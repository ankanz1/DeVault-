import { createConfig, http } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"
import { injected, metaMask, walletConnect } from "wagmi/connectors"

// Optional - supply a WalletConnect ID to enable that connector
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID

// Always-available connectors
const connectors = [injected(), metaMask()]

// Add WalletConnect only when the ID is present
if (projectId) {
  connectors.push(
    walletConnect({
      projectId,
      metadata: {
        name: "DeVault",
        description: "Decentralized Cloud Storage Platform",
        url: "https://devault.app",
        icons: ["https://devault.app/icon.png"],
      },
    }),
  )
}

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
