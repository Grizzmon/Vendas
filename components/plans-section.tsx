"use client"

import { PlanCard, createBenefit } from "./plan-card"

const plans = [
  {
    name: "Bank Pix Básico",
    price: 299,
    originalPrice: 599,
    benefits: [
      createBenefit("key", "Chave personalizada (x1)"),
      createBenefit("wallet", "Limite de saque por dia: 200 MZN"),
      createBenefit("shield", "Conta garantida"),
      createBenefit("zap", "Levantamento instantâneo (M-pesa)"),
    ],
    buttonText: "Quero Bank Pix Básico",
    link: "https://my.debito.co.mz/pay/f3f148d7-2749-4b0e-b23d-f8f208b582bc",
    isHighlighted: false,
  },
  {
    name: "Bank Pix Pro Max",
    price: 729,
    originalPrice: 1479,
    benefits: [
      createBenefit("key", "Chave personalizada"),
      createBenefit("wallet", "Limite de saque por dia: 50.000 MZN"),
      createBenefit("shield", "Conta garantida"),
      createBenefit("zap", "Levantamento instantâneo (M-pesa e E-mola)"),
      createBenefit("refresh", "Atualizações automáticas"),
    ],
    buttonText: "Quero Bank Pix Pro Max",
    link: "https://my.debito.co.mz/pay/cfdc7006-0e32-40ee-88de-72ae5bdc3463",
    isHighlighted: true,
    badge: "Melhor Oferta",
  },
  {
    name: "Bank Pix Normal",
    price: 379,
    originalPrice: 809,
    benefits: [
      createBenefit("key", "Chave personalizada (x3)"),
      createBenefit("wallet", "Limite de saque por dia: 1000 MZN"),
      createBenefit("shield", "Conta garantida"),
      createBenefit("zap", "Levantamento instantâneo"),
    ],
    buttonText: "Quero Bank Pix Normal",
    link: "https://my.debito.co.mz/pay/5cf54a87-c174-4000-a662-21127880185b",
    isHighlighted: false,
  },
]

export function PlansSection() {
  return (
    <section id="plans-section" className="relative px-4 py-16 md:py-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0505] to-[#0a0a0a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#ff4d4d]/5 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            ESCOLHA SEU PLANO
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Selecione o plano ideal para suas necessidades
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`animate-fade-in-up ${
                plan.isHighlighted ? "md:order-2" : index === 0 ? "md:order-1" : "md:order-3"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PlanCard {...plan} />
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#00ff88]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Pagamento Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#00ff88]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Ativação Imediata</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#00ff88]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Suporte 24/7</span>
          </div>
        </div>
      </div>
    </section>
  )
}
