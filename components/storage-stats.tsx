"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useFileStorage } from "@/hooks/use-file-storage"

export function StorageStats() {
  const { files, getTotalSize, formatFileSize } = useFileStorage()

  const totalSize = getTotalSize()
  const totalSizeGB = totalSize / (1024 * 1024 * 1024)
  const usagePercentage = Math.min((totalSizeGB / 100) * 100, 100) // Simulate 100GB limit for demo

  return (
    <Card className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border-2 border-purple-400/50 backdrop-blur-sm shadow-lg shadow-purple-500/25">
      <CardContent className="p-6">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-purple-300 font-mono">{formatFileSize(totalSize)}</div>
            <div className="text-white text-xs font-mono uppercase tracking-wider">Used Storage</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-300 font-mono">{files.length}</div>
            <div className="text-white text-xs font-mono uppercase tracking-wider">Total Files</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-pink-300 font-mono">∞</div>
            <div className="text-white text-xs font-mono uppercase tracking-wider">Available Space</div>
          </div>
        </div>

        {/* Storage Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs font-mono text-white mb-2">
            <span>Storage Usage</span>
            <span>{formatFileSize(totalSize)} / Unlimited</span>
          </div>
          <div className="w-full bg-purple-900/50 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.max(usagePercentage, 2)}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
