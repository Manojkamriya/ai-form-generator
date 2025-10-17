import React from 'react';
import { Sparkles, Zap, FileText, Shield, Users, ArrowRight } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: "Intelligent Form Creation",
      description: "Describe your needs in everyday words and witness AI build the ideal form layout with proper fields and validation rules.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Blazing Speed",
      description: "Create sophisticated forms instantly instead of spending hours. Our AI grasps context and delivers forms matching your precise needs.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: FileText,
      title: "Intelligent Field Detection",
      description: "Automatically identifies appropriate field types, applies validation logic, and recommends optimal input formats for each data point.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Protected & Dependable",
      description: "Developed with business-level security standards. Every form response is encrypted and secured with comprehensive access management.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Collaborative Workspace",
      description: "Distribute forms among teammates, work together on layouts, and handle responses collectively in one unified dashboard.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: ArrowRight,
      title: "Seamless Connectivity",
      description: "Place forms everywhere, connect with current applications, and download information in various formats for smooth process flow.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="relative px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* AI/Form Creation Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"></div>
        
        {/* Circuit Board / AI Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#ff6a1c" />
              <circle cx="10" cy="10" r="1.5" fill="#e2342b" />
              <circle cx="90" cy="90" r="1.5" fill="#ff6a1c" />
              <line x1="50" y1="50" x2="10" y2="10" stroke="#e2342b" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="90" y2="90" stroke="#ff6a1c" strokeWidth="0.5" />
              <rect x="48" y="8" width="4" height="4" fill="#e2342b" opacity="0.6" />
              <rect x="88" y="48" width="4" height="4" fill="#ff6a1c" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Form Document Icons Pattern */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${(i * 17 + 5) % 100}%`,
                top: `${(i * 23 + 10) % 100}%`,
                transform: `rotate(${i * 15}deg)`
              }}
            >
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-orange-600">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="8" y1="13" x2="16" y2="13" />
                <line x1="8" y1="17" x2="16" y2="17" />
              </svg>
            </div>
          ))}
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-orange-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-52 h-52 bg-red-300 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Animated Grid Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226, 52, 43, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 106, 28, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>

        {/* White Overlay for Content Visibility */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-bold px-4 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
              ✨ POWERFUL FEATURES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Why Choose FormCraft AI?
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Revolutionize your form creation with AI-driven automation and smart design.
          </p>
        </div>
        
        {/* Features Grid - 2 columns on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-50/50 to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="relative mb-4 sm:mb-6">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 mx-auto`}></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Decorative Corner */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-orange-200 rounded-tr-xl sm:rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-red-200 rounded-bl-xl sm:rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Outer Glow */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-400/20 to-red-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 flex-wrap justify-center">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
            <span className="font-medium">Trusted by thousands of teams worldwide</span>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.25;
          }
        }
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}