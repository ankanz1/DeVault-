"use client"

import type React from "react"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-purple-900/95 group-[.toaster]:text-cyan-200 group-[.toaster]:border-pink-400/50 group-[.toaster]:shadow-lg group-[.toaster]:backdrop-blur-md",
          description: "group-[.toast]:text-cyan-300",
          actionButton: "group-[.toast]:bg-pink-500 group-[.toast]:text-white",
          cancelButton: "group-[.toast]:bg-purple-600 group-[.toast]:text-cyan-200",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
