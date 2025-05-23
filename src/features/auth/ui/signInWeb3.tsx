'use client';
import { useState, useEffect } from 'react';
import { useAccount, useSignMessage, useChainId } from 'wagmi';
import { useSession, signIn, signOut } from 'next-auth/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { SiweMessage } from 'siwe';

export function SignInWeb3() {
    const { data: session } = useSession();
    const { address, isConnected } = useAccount();
    const chainId = useChainId();
    const { signMessageAsync } = useSignMessage();
    const [loading, setLoading] = useState(false);
    const [loginTriggered, setLoginTriggered] = useState(false);
    useEffect(() => {
        if (isConnected && loginTriggered && address && chainId && !session?.address) {
            handleLogin();
        }
    }, [isConnected, loginTriggered, address, chainId, session]);

    const handleLogin = async () => {
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
                redirect: false,
            });

            if (!res?.ok) {
                throw new Error('SIWE sign-in failed');
            }
        } catch (err) {
            console.error(err);
            alert('Sign-in failed');
        } finally {
            setLoading(false);
            setLoginTriggered(false); // reset trigger
        }
    };

    return (
        <div>
            {!isConnected ? (
                <div onClick={() => setLoginTriggered(true)}>
                    <ConnectButton />
                </div>
            ) : session?.address ? (
                <div>
                    <button onClick={() => {
                        signOut();
                        setLoginTriggered(false);
                    }}>
                        Sign out
                    </button>
                </div>
            ) : (
                <button onClick={() => setLoginTriggered(true)} disabled={loading}>
                    {loading ? 'Connecting...' : 'Sign-In'}
                </button>
            )}
        </div>
    );
}
