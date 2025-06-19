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
  Wallet,
  ChevronRight,
  Zap,
  Database,
  Network,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DeVaultLanding() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-violet-900/20" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />

      {/* Header */}
      <header className="relative z-50 border-b border-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              DeVault
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#roadmap" className="text-gray-300 hover:text-white transition-colors">
              Roadmap
            </Link>
            <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10">
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-violet-500/20 border-blue-500/30 text-blue-300">
              <Zap className="w-3 h-3 mr-1" />
              Decentralized Storage Revolution
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-violet-200 bg-clip-text text-transparent leading-tight">
              Own Your Data.
              <br />
              Store Without Limits.
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Break free from centralized storage. DeVault offers secure, decentralized cloud storage powered by
              blockchain technology and peer-to-peer networks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-3"
              >
                Get Started
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Demo
              </Button>
            </div>
          </div>

          {/* Animated Visual */}
          <div className="mt-16 relative">
            <div className="w-full max-w-3xl mx-auto h-64 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-2xl backdrop-blur-sm border border-white/10" />
              <div className="absolute inset-4 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-8 opacity-60">
                  <div className="w-12 h-12 bg-blue-500/30 rounded-lg animate-pulse" />
                  <div className="w-12 h-12 bg-violet-500/30 rounded-lg animate-pulse delay-100" />
                  <div className="w-12 h-12 bg-blue-500/30 rounded-lg animate-pulse delay-200" />
                  <div className="w-12 h-12 bg-violet-500/30 rounded-lg animate-pulse delay-300" />
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg" />
                  <div className="w-12 h-12 bg-blue-500/30 rounded-lg animate-pulse delay-400" />
                  <div className="w-12 h-12 bg-violet-500/30 rounded-lg animate-pulse delay-500" />
                  <div className="w-12 h-12 bg-blue-500/30 rounded-lg animate-pulse delay-600" />
                  <div className="w-12 h-12 bg-violet-500/30 rounded-lg animate-pulse delay-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="relative z-10 py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-red-900/20 border-red-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-4">The Problem</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Centralized servers vulnerable to breaches
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Limited storage with expensive upgrades
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    No true ownership of your data
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Single points of failure and downtime
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-violet-900/20 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-4">
                  The DeVault Solution
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Distributed across thousands of nodes
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Unlimited storage with token incentives
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    Complete ownership via smart contracts
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    99.99% uptime with redundancy
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
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built on cutting-edge blockchain technology for maximum security and performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-900/20 to-transparent border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-blue-300">End-to-End Encryption</h3>
                <p className="text-gray-400 text-sm">
                  Military-grade encryption ensures your data remains private and secure
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-violet-900/20 to-transparent border-violet-500/30 backdrop-blur-sm hover:border-violet-400/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-violet-300">Smart Contract Access</h3>
                <p className="text-gray-400 text-sm">Blockchain-based access control with programmable permissions</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-transparent border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-blue-300">Global P2P Network</h3>
                <p className="text-gray-400 text-sm">Distributed storage across a worldwide peer-to-peer network</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-violet-900/20 to-transparent border-violet-500/30 backdrop-blur-sm hover:border-violet-400/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-violet-300">Token Incentives</h3>
                <p className="text-gray-400 text-sm">
                  Earn tokens by providing storage and get rewarded for participation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Simple, secure, and decentralized storage in four easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-300">1. Upload</h3>
              <p className="text-gray-400 text-sm">Upload your files through our secure interface</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-violet-300">2. Encrypt</h3>
              <p className="text-gray-400 text-sm">Files are automatically encrypted with your private key</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-300">3. Distribute</h3>
              <p className="text-gray-400 text-sm">Encrypted chunks are distributed across the network</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-violet-300">4. Access</h3>
              <p className="text-gray-400 text-sm">Retrieve and decrypt your files anytime, anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powered by Leading Technologies
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Built on proven blockchain and decentralized technologies</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center mb-2 border border-white/10">
                <Image src="/placeholder.svg?height=32&width=32" width={32} height={32} alt="Ethereum" />
              </div>
              <span className="text-sm text-gray-400">Ethereum</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center mb-2 border border-white/10">
                <Network className="w-8 h-8 text-blue-400" />
              </div>
              <span className="text-sm text-gray-400">IPFS</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center mb-2 border border-white/10">
                <Wallet className="w-8 h-8 text-violet-400" />
              </div>
              <span className="text-sm text-gray-400">MetaMask</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center mb-2 border border-white/10">
                <Coins className="w-8 h-8 text-blue-400" />
              </div>
              <span className="text-sm text-gray-400">USDC</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center mb-2 border border-white/10">
                <Shield className="w-8 h-8 text-violet-400" />
              </div>
              <span className="text-sm text-gray-400">Web3</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center mb-2 border border-white/10">
                <Database className="w-8 h-8 text-blue-400" />
              </div>
              <span className="text-sm text-gray-400">Filecoin</span>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative z-10 py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What's Next
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our roadmap for the future of decentralized storage</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-900/20 to-transparent border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">Q2 2024</Badge>
                <h3 className="text-lg font-semibold mb-3 text-blue-300">Mobile Applications</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• iOS and Android apps</li>
                  <li>• Offline sync capabilities</li>
                  <li>• Biometric authentication</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-violet-900/20 to-transparent border-violet-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-violet-500/20 text-violet-300 border-violet-500/30">Q3 2024</Badge>
                <h3 className="text-lg font-semibold mb-3 text-violet-300">Enterprise APIs</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• RESTful API suite</li>
                  <li>• Enterprise dashboard</li>
                  <li>• Advanced analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-violet-900/20 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-gradient-to-r from-blue-500/20 to-violet-500/20 text-blue-300 border-blue-500/30">
                  Q4 2024
                </Badge>
                <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">
                  DAO Governance
                </h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Community voting</li>
                  <li>• Protocol upgrades</li>
                  <li>• Treasury management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                DeVault
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
              <Button variant="outline" size="sm" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10">
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>&copy; 2024 DeVault. All rights reserved. Built on the decentralized web.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
