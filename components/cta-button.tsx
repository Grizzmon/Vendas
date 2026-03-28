"use client"

import { ArrowDown, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CTAButtonProps {
  isVisible: boolean
  isFixed: boolean
}

export function CTAButton({ isVisible, isFixed }: CTAButtonProps) {
  const scrollToPlans = () => {
    const plansSection = document.getElementById("plans-section")
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <div
      className={`
        ${isFixed ? "fixed bottom-6 left-0 right-0 z-50 px-4" : "relative px-4 py-8"}
        animate-fade-in-up
      `}
    >
      <div className="max-w-md mx-auto">
        <Button
          onClick={scrollToPlans}
          size="lg"
          className="w-full h-16 text-lg font-bold bg-gradient-to-r from-[#00ff88] to-[#00cc6a] hover:from-[#00cc6a] hover:to-[#00ff88] text-black rounded-xl shadow-lg shadow-[#00ff88]/30 hover:shadow-[#00ff88]/50 transition-all duration-300 group"
        >
          <Zap className="w-6 h-6 mr-2 group-hover:animate-pulse" />
          Quero obter Bank Pix agora
          <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
        </Button>
        
        {isFixed && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent -z-10 h-32 -top-16" />
        )}
      </div>
    </div>
  )
}
