'use client';
import { useState, useEffect, useCallback } from 'react';
import { useAccount, useSignMessage, useChainId } from 'wagmi';
import { useSession, signIn, signOut } from 'next-auth/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { SiweMessage } from 'siwe';
import { useRouter } from 'next/navigation';

export function SignInWeb3() {
    const { data: session } = useSession();
    const { address, isConnected } = useAccount();
    const chainId = useChainId();
    const { signMessageAsync } = useSignMessage();
    const [loading, setLoading] = useState(false);
    const [loginTriggered, setLoginTriggered] = useState(false);
    const router = useRouter();

    const handleLogin = useCallback(async () => {
        try {
            setLoading(true);
            const nonceRes = await fetch('/api/siwe/nonce');
            const { nonce } = await nonceRes.json();
            const message = new SiweMessage({
                domain: window.location.host,
                address,
                statement: 'Sign in with Ethereum to Connectify',
                uri: window.location.origin,
                version: '1',
                chainId: chainId,
                nonce,
            });

            const signature = await signMessageAsync({
                message: message.prepareMessage(),
            });

            const res = await signIn('credentials', {
                message: JSON.stringify(message),
                signature,
                redirect: true,
            });

            if (!res?.ok) {
                throw new Error('SIWE sign-in failed');
            }
            router.push('/private-profile');
        } catch (err) {
            console.error(err);
            alert('Sign-in failed');
        } finally {
            setLoading(false);
            setLoginTriggered(false); // reset trigger
        }
    }, [address, chainId, router, setLoading, setLoginTriggered, signMessageAsync]);

    useEffect(() => {
        if (isConnected && loginTriggered && address && chainId && !session?.address) {
            handleLogin();
        }
    }, [isConnected, loginTriggered, address, chainId, session, handleLogin]);

    return (
        <>
            {!isConnected ? (
                <div className="cursor-pointer">
                    <ConnectButton label="Connect" chainStatus="none" showBalance={false} />
                </div>
            ) : session?.address ? (
                <div>
                    <button
                        onClick={() => {
                            signOut();
                            setLoginTriggered(false);
                        }}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors duration-200"
                    >
                        Sign out
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => setLoginTriggered(true)}
                    disabled={loading}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {loading ? 'Connecting...' : 'Sign In'}
                </button>
            )}
        </>
    );
}
