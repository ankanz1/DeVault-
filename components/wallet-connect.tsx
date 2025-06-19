"use client"

import { useWallet } from "@/hooks/use-wallet"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Wallet, ChevronDown, Copy, LogOut } from "lucide-react"
import { toast } from "sonner"

export function WalletConnect() {
  const { address, isConnecting, error, connect, disconnect } = useWallet()

  // error toast
  if (error) toast.error(error)

  // helpers
  const shortAddr = address ? `${address.slice(0, 6)}…${address.slice(-4)}` : ""

  const copy = async () => {
    if (!address) return
    await navigator.clipboard.writeText(address)
    toast.success("Address copied")
  }

  /* ---- RENDER ---- */

  if (address)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-gradient-to-r from-green-500/30 to-cyan-500/30 border-green-400/60 font-mono text-xs uppercase tracking-wider">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            {shortAddr}
            <ChevronDown className="w-3 h-3 ml-2" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-purple-900/95 border border-pink-400/40 backdrop-blur-md">
          <DropdownMenuItem onClick={copy} className="cursor-pointer text-cyan-300">
            <Copy className="w-4 h-4 mr-2" /> Copy address
          </DropdownMenuItem>
          <DropdownMenuItem onClick={disconnect} className="cursor-pointer text-red-300">
            <LogOut className="w-4 h-4 mr-2" /> Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

  return (
    <Button
      onClick={connect}
      disabled={isConnecting}
      className="bg-gradient-to-r from-pink-500 to-purple-600 border-pink-400 font-mono text-xs uppercase tracking-wider"
    >
      {isConnecting ? (
        <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
      ) : (
        <Wallet className="w-4 h-4 mr-2" />
      )}
      {isConnecting ? "Connecting…" : "Connect"}
    </Button>
  )
}
