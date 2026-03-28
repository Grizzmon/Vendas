"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useRouter } from "next/navigation"
import { Play, Lock, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VideoLandingPage() {
  const [showButton, setShowButton] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const router = useRouter()
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // 70% of video (~7 minutes = 420000ms)
  const TRIGGER_TIME_MS = 7 * 60 * 1000

  const startTimer = useCallback(() => {
    if (hasTriggered) return

    const timer = setTimeout(() => {
      if (!hasTriggered) {
        setHasTriggered(true)
        setShowButton(true)
      }
    }, TRIGGER_TIME_MS)

    return () => clearTimeout(timer)
  }, [hasTriggered, TRIGGER_TIME_MS])

  useEffect(() => {
    if (isVideoLoaded && !hasTriggered) {
      const cleanup = startTimer()
      return cleanup
    }
  }, [isVideoLoaded, hasTriggered, startTimer])

  const handleIframeLoad = () => {
    setIsVideoLoaded(true)
  }

  const handleCTAClick = () => {
    router.push("/planos")
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden flex flex-col">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff4d4d]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00ff88]/5 rounded-full blur-[150px]" />
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 md:mb-12">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ff88] to-[#00aa55] flex items-center justify-center shadow-lg shadow-[#00ff88]/20">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-white">Bank Pix</span>
        </div>

        {/* Hero text */}
        <div className="text-center mb-8 md:mb-12 max-w-3xl">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-balance">
            <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
              Aproveite essa oferta antes que o vídeo saia do ar
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            Assista até o final para desbloquear o acesso
          </p>
        </div>

        {/* Video container */}
        <div className="w-full max-w-4xl">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-[#ff4d4d]/20 via-[#ff8800]/15 to-[#ff4d4d]/20 rounded-2xl md:rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Video wrapper */}
            <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-[#333] bg-[#0f0f0f] shadow-2xl">
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#0f0f0f]">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#ff4d4d]/20 flex items-center justify-center animate-pulse">
                      <Play className="w-8 h-8 text-[#ff4d4d]" />
                    </div>
                    <span className="text-gray-400">Carregando vídeo...</span>
                  </div>
                </div>
              )}
              
              <iframe
                ref={iframeRef}
                src="https://www.youtube.com/embed/0_lBJWIewt4?controls=0&modestbranding=1&rel=0&showinfo=0"
                title="Bank Pix - Apresentação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={handleIframeLoad}
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                  isVideoLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Decorative corners */}
            <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#00ff88] rounded-tl-lg" />
            <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#00ff88] rounded-tr-lg" />
            <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#00ff88] rounded-bl-lg" />
            <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#00ff88] rounded-br-lg" />
          </div>

          {/* Video instruction */}
          {!showButton && (
            <div className="flex items-center justify-center gap-2 mt-6 text-gray-500 text-sm">
              <Lock className="w-4 h-4" />
              <span>Continue assistindo para desbloquear a oferta especial</span>
            </div>
          )}
        </div>

        {/* CTA Button - appears after 70% video */}
        <div
          className={`mt-8 md:mt-12 transition-all duration-700 ${
            showButton
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="group relative h-14 md:h-16 px-8 md:px-12 text-base md:text-lg font-bold rounded-xl bg-gradient-to-r from-[#00ff88] to-[#00cc6a] hover:from-[#00cc6a] hover:to-[#00ff88] text-black shadow-xl shadow-[#00ff88]/30 transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
            Quero obter Bank Pix agora
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative py-6 text-center">
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Bank Pix. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  )
}
