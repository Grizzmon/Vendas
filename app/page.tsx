"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { CTAButton } from "@/components/cta-button"
import { PlansSection } from "@/components/plans-section"

export default function BankPixPage() {
  const [showButton, setShowButton] = useState(false)
  const [isButtonFixed, setIsButtonFixed] = useState(false)

  const handleShowButton = () => {
    setShowButton(true)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (showButton) {
        // Make button fixed after scrolling down a bit
        const scrollY = window.scrollY
        setIsButtonFixed(scrollY > 200)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [showButton])

  // For demo purposes, also show button after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!showButton) {
        setShowButton(true)
      }
    }, 10000) // Show after 10 seconds for testing

    return () => clearTimeout(timer)
  }, [showButton])

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Video Section */}
      <VideoSection onShowButton={handleShowButton} />

      {/* CTA Button (appears after 70% video watched) */}
      <CTAButton isVisible={showButton} isFixed={isButtonFixed} />

      {/* Plans Section */}
      <PlansSection />

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00ff88] to-[#00aa55] flex items-center justify-center">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Bank Pix</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Bank Pix. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
