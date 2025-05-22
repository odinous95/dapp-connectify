"use client"
import {
    getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
} from 'wagmi/chains';


export const config = getDefaultConfig({
    appName: 'Novixpower',
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_projectId!,
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true, // If your dApp uses server side rendering (SSR)
})
