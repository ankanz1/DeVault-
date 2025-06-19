"use client"

import { motion } from "framer-motion"
import { Upload, Database, Shield, Globe } from "lucide-react"

interface UploadLoaderProps {
  progress: number
  fileName?: string
  stage?: "uploading" | "encrypting" | "distributing" | "complete"
}

export function UploadLoader({ progress, fileName, stage = "uploading" }: UploadLoaderProps) {
  const stages = {
    uploading: { icon: Upload, text: "Uploading", color: "from-pink-500 to-purple-500" },
    encrypting: { icon: Shield, text: "Encrypting", color: "from-purple-500 to-indigo-500" },
    distributing: { icon: Globe, text: "Distributing", color: "from-indigo-500 to-cyan-500" },
    complete: { icon: Database, text: "Complete", color: "from-green-500 to-cyan-500" },
  }

  const currentStage = stages[stage]
  const IconComponent = currentStage.icon

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      {/* Animated Icon */}
      <div className="relative">
        <motion.div
          className={`w-16 h-16 bg-gradient-to-r ${currentStage.color} rounded-lg flex items-center justify-center border-2 border-white/20`}
          animate={{
            scale: [1, 1.1, 1],
            rotate: stage === "distributing" ? [0, 360] : 0,
          }}
          transition={{
            scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
            rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        >
          <IconComponent className="w-8 h-8 text-white" />
        </motion.div>

        {/* Pulse Ring */}
        <motion.div
          className={`absolute inset-0 rounded-lg border-2 bg-gradient-to-r ${currentStage.color} opacity-30`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
          }}
        />
      </div>

      {/* Stage Text */}
      <motion.div
        className="text-center"
        key={stage}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3
          className={`text-lg font-bold font-mono uppercase tracking-wider bg-gradient-to-r ${currentStage.color} bg-clip-text text-transparent`}
        >
          {currentStage.text}
        </h3>
        {fileName && <p className="text-white font-mono text-sm mt-1 truncate max-w-64">{fileName}</p>}
      </motion.div>

      {/* Progress Bar */}
      <div className="w-64">
        <div className="flex justify-between text-xs font-mono text-white mb-2">
          <span>{currentStage.text}...</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-purple-900/50 rounded-full h-2">
          <motion.div
            className={`bg-gradient-to-r ${currentStage.color} h-2 rounded-full`}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Data Particles */}
      <div className="relative w-32 h-8">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${i * 20}%`,
              top: "50%",
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}
