"use client"

import { motion } from "framer-motion"
import { Database } from "lucide-react"

interface LoadingAnimationProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  text?: string
}

export function LoadingAnimation({ size = "md", showText = true, text = "LOADING..." }: LoadingAnimationProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  }

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-lg",
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Animated Logo Container */}
      <div className="relative">
        {/* Outer Rotating Ring */}
        <motion.div
          className={`${sizeClasses[size]} border-2 border-transparent rounded-lg relative`}
          style={{
            background: "linear-gradient(45deg, #ec4899, #06b6d4, #8b5cf6, #ec4899)",
            backgroundSize: "400% 400%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            rotate: [0, 360],
          }}
          transition={{
            backgroundPosition: {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            rotate: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
          }}
        >
          {/* Inner Logo Container */}
          <motion.div
            className={`${sizeClasses[size]} bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg flex items-center justify-center relative overflow-hidden`}
            style={{ margin: "2px" }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {/* Glowing Background Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-lg"
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Database Icon */}
            <motion.div
              animate={{
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Database className={`${iconSizes[size]} text-white relative z-10`} />
            </motion.div>

            {/* Scanning Line Effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              animate={{
                y: [0, Number.parseInt(sizeClasses[size].split("h-")[1]) * 4, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Orbiting Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full"
            style={{
              top: "50%",
              left: "50%",
              marginTop: "-4px",
              marginLeft: "-4px",
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              rotate: {
                duration: 3 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              scale: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.3,
              },
            }}
            style={{
              transformOrigin: `${20 + i * 8}px 0px`,
            }}
          />
        ))}
      </div>

      {/* Loading Text */}
      {showText && (
        <motion.div
          className={`${textSizes[size]} font-mono uppercase tracking-wider bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold`}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.div>
      )}

      {/* Loading Dots */}
      {showText && (
        <div className="flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full"
              animate={{
                scale: [0.5, 1, 0.5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
