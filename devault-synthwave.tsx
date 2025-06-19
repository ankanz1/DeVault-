"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Globe,
  Coins,
  Upload,
  Lock,
  Share2,
  Download,
  Github,
  Twitter,
  Mail,
  ChevronRight,
  Zap,
  Database,
} from "lucide-react"
import Link from "next/link"
import { WalletConnect } from "./components/wallet-connect"
import { FileUpload } from "./components/file-upload"
import { FileAccess } from "./components/file-access"
import { StorageStats } from "./components/storage-stats"

export default function DeVaultSynthwave() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-purple-900 text-white overflow-hidden relative">
      {/* Retro Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,0,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,0,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Stars */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-pink-500/30 backdrop-blur-md bg-purple-900/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-pink-500/50">
              <Database className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-mono">
              DEVAULT
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-cyan-300 hover:text-pink-400 transition-colors font-mono text-sm uppercase tracking-wider"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-cyan-300 hover:text-pink-400 transition-colors font-mono text-sm uppercase tracking-wider"
            >
              Process
            </Link>
            <Link
              href="#roadmap"
              className="text-cyan-300 hover:text-pink-400 transition-colors font-mono text-sm uppercase tracking-wider"
            >
              Roadmap
            </Link>
            <WalletConnect />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-4 text-center">
          {/* Retro Sun */}
          <div className="relative mb-12">
            <div className="w-64 h-32 mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 via-orange-500 to-pink-500 rounded-t-full">
                {/* Sun stripes */}
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="absolute w-full h-2 bg-purple-900/30" style={{ top: `${i * 16}px` }} />
                ))}
              </div>
            </div>

            {/* Pixel Clouds */}
            <div
              className="absolute -top-8 left-8 w-16 h-8 bg-gradient-to-r from-pink-400 to-purple-400 opacity-80"
              style={{ clipPath: "polygon(0 50%, 25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%)" }}
            />
            <div
              className="absolute -top-4 right-12 w-12 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-80"
              style={{ clipPath: "polygon(0 50%, 25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%)" }}
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border-2 border-pink-400 text-pink-300 font-mono text-xs uppercase tracking-wider">
              <Zap className="w-3 h-3 mr-1" />
              Cyber Storage Protocol
            </Badge>

            {/* Retro Title */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 font-mono uppercase tracking-wider relative">
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent transform translate-x-1 translate-y-1">
                  DEVAULT
                </span>
                <span className="relative bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  DEVAULT
                </span>
              </h1>
              <div className="text-2xl md:text-3xl font-mono uppercase tracking-widest">
                <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Own Your Data
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Store Without Limits
                </span>
              </div>
            </div>

            <p className="text-lg text-white mb-8 max-w-2xl mx-auto leading-relaxed font-mono">
              {"> "} Break free from centralized storage systems {"<"}
              <br />
              {"> "} Decentralized cloud powered by blockchain tech {"<"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 border-2 border-pink-400 shadow-lg shadow-pink-500/25 font-mono uppercase tracking-wider"
              >
                Initialize
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 bg-transparent font-mono uppercase tracking-wider"
              >
                Demo Mode
              </Button>
            </div>
          </div>

          {/* Retro City Skyline */}
          <div className="mt-16 relative">
            <div className="w-full max-w-4xl mx-auto h-32 relative">
              {/* Buildings */}
              <div className="absolute bottom-0 left-0 w-16 h-20 bg-gradient-to-t from-purple-600 to-purple-500 border-2 border-pink-400/50">
                <div className="w-2 h-2 bg-yellow-400 absolute top-2 left-2" />
                <div className="w-2 h-2 bg-cyan-400 absolute top-2 right-2" />
              </div>
              <div className="absolute bottom-0 left-20 w-12 h-24 bg-gradient-to-t from-indigo-600 to-indigo-500 border-2 border-cyan-400/50">
                <div className="w-2 h-2 bg-pink-400 absolute top-2 left-2" />
              </div>
              <div className="absolute bottom-0 right-20 w-12 h-24 bg-gradient-to-t from-indigo-600 to-indigo-500 border-2 border-cyan-400/50">
                <div className="w-2 h-2 bg-pink-400 absolute top-2 right-2" />
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-20 bg-gradient-to-t from-purple-600 to-purple-500 border-2 border-pink-400/50">
                <div className="w-2 h-2 bg-yellow-400 absolute top-2 left-2" />
                <div className="w-2 h-2 bg-cyan-400 absolute top-2 right-2" />
              </div>

              {/* Street */}
              <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-purple-800 to-indigo-800 border-t-2 border-pink-400/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Upload & Access Section */}
      <section className="relative z-10 py-20 border-t-2 border-cyan-500/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                {">"} File Management {"<"}
              </span>
            </h2>
            <p className="text-white max-w-2xl mx-auto font-mono">
              Upload your files to the decentralized network and access them anytime
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <FileUpload />
            <FileAccess />
          </div>

          {/* Storage Stats */}
          <div className="mt-12 max-w-2xl mx-auto">
            <StorageStats />
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="relative z-10 py-20 border-t-2 border-pink-500/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-red-900/40 to-purple-900/40 border-2 border-red-400/50 backdrop-blur-sm shadow-lg shadow-red-500/25">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-4 font-mono uppercase tracking-wider">
                  {">"} System Error {"<"}
                </h3>
                <ul className="space-y-3 text-white font-mono text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 mt-2 mr-3 flex-shrink-0" />
                    Centralized servers = vulnerability
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 mt-2 mr-3 flex-shrink-0" />
                    Limited storage + expensive upgrades
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 mt-2 mr-3 flex-shrink-0" />
                    No true data ownership
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 mt-2 mr-3 flex-shrink-0" />
                    Single point of failure
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/40 to-purple-900/40 border-2 border-cyan-400/50 backdrop-blur-sm shadow-lg shadow-cyan-500/25">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-4 font-mono uppercase tracking-wider">
                  {">"} DeVault Protocol {"<"}
                </h3>
                <ul className="space-y-3 text-white font-mono text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-pink-500 mt-2 mr-3 flex-shrink-0" />
                    Distributed across global nodes
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-pink-500 mt-2 mr-3 flex-shrink-0" />
                    Unlimited storage + token rewards
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-pink-500 mt-2 mr-3 flex-shrink-0" />
                    Smart contract ownership
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-pink-500 mt-2 mr-3 flex-shrink-0" />
                    99.99% uptime guarantee
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
              <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                {">"} Core Modules {"<"}
              </span>
            </h2>
            <p className="text-white max-w-2xl mx-auto font-mono">Advanced blockchain protocols for maximum security</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 border-2 border-pink-400/50 backdrop-blur-sm hover:border-pink-400 transition-all duration-300 shadow-lg shadow-pink-500/25">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 border-2 border-pink-400 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-pink-300 font-mono uppercase tracking-wider text-sm">
                  Encryption
                </h3>
                <p className="text-white text-xs font-mono">Military-grade encryption protocols</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border-2 border-purple-400/50 backdrop-blur-sm hover:border-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/25">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 border-2 border-purple-400 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-purple-300 font-mono uppercase tracking-wider text-sm">
                  Smart Access
                </h3>
                <p className="text-white text-xs font-mono">Blockchain access control system</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border-2 border-cyan-400/50 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/25">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 border-2 border-cyan-400 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-300 font-mono uppercase tracking-wider text-sm">
                  P2P Network
                </h3>
                <p className="text-white text-xs font-mono">Global peer-to-peer distribution</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 border-2 border-yellow-400/50 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-500/25">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 border-2 border-yellow-400 flex items-center justify-center mx-auto mb-4">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-yellow-300 font-mono uppercase tracking-wider text-sm">
                  Token Rewards
                </h3>
                <p className="text-white text-xs font-mono">Earn tokens for storage provision</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 py-20 border-t-2 border-cyan-500/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                {">"} Process Flow {"<"}
              </span>
            </h2>
            <p className="text-white max-w-2xl mx-auto font-mono">Four-step decentralized storage protocol</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 border-2 border-pink-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-pink-500/25">
                <Upload className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-pink-300 font-mono uppercase tracking-wider text-sm">
                01. Upload
              </h3>
              <p className="text-white text-xs font-mono">Secure file transmission</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 border-2 border-purple-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-purple-300 font-mono uppercase tracking-wider text-sm">
                02. Encrypt
              </h3>
              <p className="text-white text-xs font-mono">Private key encryption</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 border-2 border-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/25">
                <Share2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-cyan-300 font-mono uppercase tracking-wider text-sm">
                03. Distribute
              </h3>
              <p className="text-white text-xs font-mono">Network fragmentation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 border-2 border-yellow-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/25">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300 font-mono uppercase tracking-wider text-sm">
                04. Access
              </h3>
              <p className="text-white text-xs font-mono">Instant file retrieval</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
              <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                {">"} Tech Stack {"<"}
              </span>
            </h2>
            <p className="text-white max-w-2xl mx-auto font-mono">Powered by cutting-edge blockchain protocols</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Ethereum", color: "from-blue-500 to-purple-500" },
              { name: "IPFS", color: "from-cyan-500 to-blue-500" },
              { name: "MetaMask", color: "from-orange-500 to-red-500" },
              { name: "USDC", color: "from-blue-500 to-cyan-500" },
              { name: "Web3", color: "from-purple-500 to-pink-500" },
              { name: "Filecoin", color: "from-yellow-500 to-orange-500" },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${tech.color} border-2 border-white/30 flex items-center justify-center mb-2 shadow-lg`}
                >
                  <div className="w-8 h-8 bg-white/20 rounded" />
                </div>
                <span className="text-xs text-white font-mono uppercase tracking-wider">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative z-10 py-20 border-t-2 border-pink-500/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-mono uppercase tracking-wider">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                {">"} Roadmap {"<"}
              </span>
            </h2>
            <p className="text-white max-w-2xl mx-auto font-mono">Future protocol upgrades and expansions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 border-2 border-pink-400/50 backdrop-blur-sm shadow-lg shadow-pink-500/25">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-pink-500/20 text-pink-300 border-2 border-pink-400/50 font-mono text-xs uppercase tracking-wider">
                  Q2 2024
                </Badge>
                <h3 className="text-lg font-semibold mb-3 text-pink-300 font-mono uppercase tracking-wider">
                  Mobile Apps
                </h3>
                <ul className="space-y-2 text-white text-xs font-mono">
                  <li>• iOS/Android clients</li>
                  <li>• Offline sync protocol</li>
                  <li>• Biometric security</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border-2 border-purple-400/50 backdrop-blur-sm shadow-lg shadow-purple-500/25">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-2 border-purple-400/50 font-mono text-xs uppercase tracking-wider">
                  Q3 2024
                </Badge>
                <h3 className="text-lg font-semibold mb-3 text-purple-300 font-mono uppercase tracking-wider">
                  Enterprise API
                </h3>
                <ul className="space-y-2 text-white text-xs font-mono">
                  <li>• RESTful endpoints</li>
                  <li>• Admin dashboard</li>
                  <li>• Analytics suite</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border-2 border-cyan-400/50 backdrop-blur-sm shadow-lg shadow-cyan-500/25">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-2 border-cyan-400/50 font-mono text-xs uppercase tracking-wider">
                  Q4 2024
                </Badge>
                <h3 className="text-lg font-semibold mb-3 text-cyan-300 font-mono uppercase tracking-wider">
                  DAO Protocol
                </h3>
                <ul className="space-y-2 text-white text-xs font-mono">
                  <li>• Community governance</li>
                  <li>• Protocol upgrades</li>
                  <li>• Treasury management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t-2 border-pink-500/30 py-12 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-cyan-400 border-2 border-pink-400 flex items-center justify-center shadow-lg shadow-pink-500/50">
                <Database className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-mono">
                DEVAULT
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <Link href="#" className="text-cyan-300 hover:text-pink-400 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-cyan-300 hover:text-pink-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-cyan-300 hover:text-pink-400 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
              <WalletConnect />
            </div>
          </div>

          <div className="mt-8 pt-8 border-t-2 border-pink-500/30 text-center text-white text-xs font-mono">
            <p>© 2024 DEVAULT PROTOCOL • BUILT ON THE DECENTRALIZED WEB</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
