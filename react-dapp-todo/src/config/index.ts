/*
 * @description: WagmiProvider 配置文件
 * @author: Jack Chen @懒人码农
 * @Date: 2024-04-24 03:18:49
 * @LastEditors: Jack Chen
 * @LastEditTime: 2024-04-24 03:19:51
 */
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia,
    hardhat,
    localhost,
} from "wagmi/chains";
import {
    metaMaskWallet,
    rainbowWallet,
    walletConnectWallet,
    injectedWallet,
    coinbaseWallet,
    imTokenWallet,
    okxWallet,
    coreWallet,
    argentWallet,
    trustWallet,
    uniswapWallet,
    phantomWallet,
} from "@rainbow-me/rainbowkit/wallets";

export const config = getDefaultConfig({
    appName: "my-app-wallet",
    projectId: "a7e8d0307cb18abe347dd1636c9a2bc1",
    chains: [
        localhost,
        hardhat,
        mainnet,
        polygon,
        optimism,
        arbitrum,
        base,
        sepolia,
    ],
    wallets: [
        {
            groupName: "Popular",
            wallets: [
                metaMaskWallet,
                rainbowWallet,
                walletConnectWallet,
                coinbaseWallet,
            ],
        },
        {
            groupName: "More",
            wallets: [
                okxWallet,
                trustWallet,
                argentWallet,
                uniswapWallet,
                coreWallet,
                imTokenWallet,
                phantomWallet,
                injectedWallet,
            ],
        },
    ],
});
