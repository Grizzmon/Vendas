"use client"

import { Check, Key, Wallet, Shield, Zap, RefreshCw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Benefit {
  icon: React.ReactNode
  text: string
}

interface PlanCardProps {
  name: string
  price: number
  originalPrice: number
  benefits: Benefit[]
  buttonText: string
  link: string
  isHighlighted?: boolean
  badge?: string
}

export function PlanCard({
  name,
  price,
  originalPrice,
  benefits,
  buttonText,
  link,
  isHighlighted = false,
  badge,
}: PlanCardProps) {
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100)

  return (
    <div
      className={`
        relative flex flex-col rounded-2xl p-6 transition-all duration-500
        ${
          isHighlighted
            ? "bg-gradient-to-b from-[#2a1a1a] to-[#1a0a0a] border-2 border-[#ff4d4d] scale-105 shadow-2xl shadow-[#ff4d4d]/20 animate-glow-pulse"
            : "bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border border-[#333] hover:border-[#00ff88]/50 hover:shadow-lg hover:shadow-[#00ff88]/10"
        }
      `}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#ff8800] to-[#ff4d4d] text-white text-sm font-bold shadow-lg">
            <Sparkles className="w-4 h-4" />
            {badge}
          </div>
        </div>
      )}

      {/* Plan name */}
      <div className="text-center mb-6 pt-2">
        <h3 className={`text-xl font-bold ${isHighlighted ? "text-white" : "text-white"}`}>
          {name}
        </h3>
      </div>

      {/* Pricing */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-gray-500 line-through text-lg">
            {originalPrice} MZN
          </span>
          <span className="px-2 py-0.5 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-xs font-bold">
            -{discount}%
          </span>
        </div>
        <div className="flex items-baseline justify-center gap-1">
          <span className={`text-4xl font-bold ${isHighlighted ? "text-[#00ff88]" : "text-white"}`}>
            {price}
          </span>
          <span className="text-gray-400 text-lg">MZN</span>
        </div>
      </div>

      {/* Benefits */}
      <div className="flex-1 space-y-4 mb-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
              isHighlighted ? "bg-[#00ff88]/20 text-[#00ff88]" : "bg-[#333] text-[#00ff88]"
            }`}>
              {benefit.icon}
            </div>
            <span className="text-gray-300 text-sm leading-relaxed">{benefit.text}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <Button
          size="lg"
          className={`w-full h-14 text-base font-bold rounded-xl transition-all duration-300 ${
            isHighlighted
              ? "bg-gradient-to-r from-[#00ff88] to-[#00cc6a] hover:from-[#00cc6a] hover:to-[#00ff88] text-black shadow-lg shadow-[#00ff88]/30"
              : "bg-[#1f1f1f] hover:bg-[#2a2a2a] text-white border border-[#333] hover:border-[#00ff88]"
          }`}
        >
          {buttonText}
        </Button>
      </a>

      {/* PixBank logo */}
      <div className="flex items-center justify-center mt-6">
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
          isHighlighted ? "bg-[#00ff88]/10" : "bg-[#1a1a1a]"
        }`}>
          <div className="w-6 h-6 rounded bg-gradient-to-br from-[#00ff88] to-[#00aa55] flex items-center justify-center">
            <Zap className="w-4 h-4 text-black" />
          </div>
          <span className="text-sm font-semibold text-[#00ff88]">PixBank</span>
        </div>
      </div>
    </div>
  )
}

// Helper function to create benefit with icon
export function createBenefit(type: string, text: string): Benefit {
  const icons: Record<string, React.ReactNode> = {
    key: <Key className="w-3.5 h-3.5" />,
    wallet: <Wallet className="w-3.5 h-3.5" />,
    shield: <Shield className="w-3.5 h-3.5" />,
    zap: <Zap className="w-3.5 h-3.5" />,
    refresh: <RefreshCw className="w-3.5 h-3.5" />,
    check: <Check className="w-3.5 h-3.5" />,
  }

  return {
    icon: icons[type] || icons.check,
    text,
  }
}
