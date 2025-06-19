"use client"

import { useEffect, useState } from "react"

export function useWallet() {
  const [address, setAddress] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  /* --------------------------------------------------
   *  Restore previous session (from sessionStorage)
   * -------------------------------------------------- */
  useEffect(() => {
    const cached = sessionStorage.getItem("walletAddress")
    if (cached) setAddress(cached)
  }, [])

  /* --------------------------------------------------
   *  Connect to MetaMask / injected wallet
   * -------------------------------------------------- */
  async function connect() {
    try {
      setIsConnecting(true)
      if (typeof window === "undefined" || !(window as any).ethereum) throw new Error("No Ethereum wallet detected")

      const accounts: string[] = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      })

      const acc = accounts?.[0]
      if (!acc) throw new Error("No account returned")

      setAddress(acc)
      sessionStorage.setItem("walletAddress", acc)
      setError(null)
    } catch (e: any) {
      setError(e?.message ?? "Wallet connection failed")
    } finally {
      setIsConnecting(false)
    }
  }

  /* --------------------------------------------------
   *  Disconnect (client-side only)
   * -------------------------------------------------- */
  function disconnect() {
    setAddress(null)
    sessionStorage.removeItem("walletAddress")
  }

  return { address, isConnecting, error, connect, disconnect }
}
