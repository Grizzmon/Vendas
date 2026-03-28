"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Play } from "lucide-react"

interface VideoSectionProps {
  onShowButton: () => void
}

export function VideoSection({ onShowButton }: VideoSectionProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Estimated video duration (10 minutes = 600 seconds)
  // 70% of video = approximately 7 minutes = 420 seconds
  const TRIGGER_TIME_MS = 7 * 60 * 1000 // 7 minutes in milliseconds

  const startTimer = useCallback(() => {
    if (hasTriggered) return
    
    // Start a timer when video loads - after 7 minutes, show the button
    const timer = setTimeout(() => {
      if (!hasTriggered) {
        setHasTriggered(true)
        onShowButton()
      }
    }, TRIGGER_TIME_MS)

    return () => clearTimeout(timer)
  }, [hasTriggered, onShowButton, TRIGGER_TIME_MS])

  useEffect(() => {
    // Start timer when video is loaded
    if (isVideoLoaded && !hasTriggered) {
      const cleanup = startTimer()
      return cleanup
    }
  }, [isVideoLoaded, hasTriggered, startTimer])

  const handleIframeLoad = () => {
    setIsVideoLoaded(true)
  }

  return (
    <section className="relative px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Video container with glow effect */}
        <div className="relative group">
          {/* Glow effect behind video */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#ff4d4d]/20 via-[#ff8800]/20 to-[#ff4d4d]/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Video wrapper */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-[#333] bg-[#0f0f0f] shadow-2xl">
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
              src="https://www.youtube.com/embed/0_lBJWIewt4?enablejsapi=1&rel=0"
              title="Bank Pix - Apresentação"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleIframeLoad}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                isVideoLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#00ff88] rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#00ff88] rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#00ff88] rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#00ff88] rounded-br-lg" />
        </div>

        {/* Video instruction */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Continue assistindo para desbloquear a oferta especial
        </p>
      </div>
    </section>
  )
}
