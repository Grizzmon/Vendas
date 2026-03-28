"use client"

import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[40vh] flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a0a0a] to-[#0a0a0a]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#ff4d4d]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] bg-[#00ff88]/5 rounded-full blur-[80px]" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff4d4d]/10 border border-[#ff4d4d]/30 mb-6">
          <Sparkles className="w-4 h-4 text-[#ff4d4d]" />
          <span className="text-sm text-[#ff4d4d] font-medium">Oferta Por Tempo Limitado</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
          Aproveite agora essa oferta{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ff8800]">
            antes que o vídeo saia do ar
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Assista ao vídeo completo para entender como funciona
        </p>
      </div>
    </section>
  )
}
