'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import "./globals.css";
import StatsSection from '@/components/StatsSection';
import { Sparkles, FileText, Zap, ArrowRight, LogOut,Send } from 'lucide-react';
import FeaturesSection from '@/components/FeatureSection';

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

 const handleLogout = () => {
  if (window.confirm('Are you sure you want to logout?')) {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(to right, rgb(226, 52, 43) 0%, rgb(255, 106, 28) 100%)' }}>
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold" style={{ color: '#1c1b1b' }}>FormCraft AI</span>
          </div>
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                {/* <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Dashboard
                </Link> */}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-600 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
  className="px-6 py-16 lg:pt-12 lg:pb-24 relative"
  style={{
    backgroundImage: "url('/bg-technology1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }} >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: 'rgba(255, 106, 28, 0.1)', color: 'rgb(226, 52, 43)' }}>
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Technology</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: '#1c1b1b' }}>
                Build Forms Using
                <span className="block bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, rgb(226, 52, 43) 0%, rgb(255, 106, 28) 100%)' }}>
                  Plain English
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Just explain what you need in everyday language, and our AI creates it in seconds. 
                No technical skills or complicated builders necessary.
              </p>
            
          <div className="flex flex-col sm:flex-row items-center lg:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
       <button
  onClick={() => router.push(isLoggedIn ? '/dashboard' : '/signup')}
  className="text-white px-8 py-4 font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2 rounded-[2rem]"
  style={{ backgroundImage: 'linear-gradient(to right, rgb(226, 52, 43) 0%, rgb(255, 106, 28) 100%)' }}
>
 


              <span>Begin Building Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
              </div>

              {/* Stats */}
            
            </div>

            {/* Right Column - Visual Demo */}
            <div className="hidden lg:block">
             <div className="bg-transparent rounded-2xl  p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
  <div className="mb-8">
    <div className="flex items-center space-x-2 mb-4">
      <Sparkles className="w-5 h-5" style={{ color: 'rgb(226, 52, 43)' }} />
      <span className="font-semibold text-lg" style={{ color: '#1a1a1a' }}>See It In Action</span>
    </div>
    <div className=" from-gray-50 to-white rounded-xl p-5 bg-transparent">
      <p className="text-gray-700 italic leading-relaxed">
        &ldquo;Build a contact form with name, email, phone, and message fields.&rdquo;
      </p>
    </div>
  </div>

  <div className="space-y-3">
    {[
      { label: 'Full Name', type: 'Text Field' },
      { label: 'Email Address', type: 'Email Field' },
      { label: 'Phone Number', type: 'Phone Field' },
      { label: 'Message', type: 'Text Area' },
    ].map((item, idx) => (
      <div
        key={idx}
        className="rounded-xl p-4 flex items-center justify-between bg-gradient-to-r from-orange-50 to-white border border-orange-100 hover:border-orange-300 transition-all duration-200"
      >
        <span className="text-sm font-medium text-gray-800">{item.label}</span>
        <span className="text-xs text-gray-500 bg-white px-2 py-0.5 rounded-md border border-gray-200">
          {item.type}
        </span>
      </div>
    ))}
  </div>

  <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-800">
    <div
      className="p-2 rounded-full bg-gradient-to-r from-[rgb(226,52,43)] to-[rgb(255,106,28)] text-white"
    >
      <Zap className="w-4 h-4" />
    </div>
    <span className="font-medium text-gray-800">
      Built in <span className="text-[rgb(226,52,43)]">2 seconds</span>
    </span>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>

  <StatsSection/>

    <div className="relative px-4 py-12 md:py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Simple Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Build professional forms in just three simple steps
          </p>
        </div>

        {/* Mobile View - Vertical */}
        <div className="md:hidden space-y-8">
          {/* Step 1 */}
          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white shadow-lg">
                  <FileText className="w-8 h-8" />
                </div>
                <div className="w-1 h-24 bg-gradient-to-b from-red-500 to-orange-400 mx-auto mt-2"></div>
              </div>
              <div className="flex-1 pt-2">
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-orange-100">
                  <div className="text-sm font-bold text-orange-500 mb-2">STEP 01</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Explain Your Needs
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Write what you want in plain language. Our AI understands your intent instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div className="w-1 h-24 bg-gradient-to-b from-orange-400 to-orange-500 mx-auto mt-2"></div>
              </div>
              <div className="flex-1 pt-2">
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-orange-100">
                  <div className="text-sm font-bold text-orange-500 mb-2">STEP 02</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    AI Generates Form
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Watch AI create a ready-to-use form with smart field types and validation logic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white shadow-lg">
                  <Send className="w-8 h-8" />
                </div>
              </div>
              <div className="flex-1 pt-2">
                <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-orange-100">
                  <div className="text-sm font-bold text-orange-500 mb-2">STEP 03</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    Publish & Gather
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Deploy instantly, collect responses, and organize submissions effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View - Horizontal */}
        <div className="hidden md:block relative">
          {/* Connecting Path */}
          <svg className="absolute top-24 left-0 w-full h-32" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'rgb(239, 68, 68)', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: 'rgb(249, 115, 22)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'rgb(239, 68, 68)', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              d="M 100 60 Q 300 20, 500 60 T 900 60"
              stroke="url(#pathGradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="8 8"
            />
          </svg>

          <div className="grid grid-cols-3 gap-8 relative" style={{ zIndex: 1 }}>
            {/* Step 1 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    <FileText className="w-10 h-10" />
                  </div>
                  <div className="inline-block text-xs font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 mb-4">
                    STEP 01
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Explain Your Needs
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Write what you want in plain language. Our AI understands your intent instantly.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-10 h-10" />
                  </div>
                  <div className="inline-block text-xs font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 mb-4">
                    STEP 02
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    AI Generates Form
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Watch AI create a ready-to-use form with smart field types and validation logic.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    <Send className="w-10 h-10" />
                  </div>
                  <div className="inline-block text-xs font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 mb-4">
                    STEP 03
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Publish & Gather
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Deploy instantly, collect responses, and organize submissions effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-orange-400"></div>
            <span className="font-medium">Start building in minutes</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-red-400"></div>
          </div>
        </div>
      </div>
    </div>
  
      {/* Features Section */}
       <FeaturesSection />

      {/* CTA Section - Only show when user is not logged in */}
      {!isLoggedIn && (
    <div className="px-6 py-4">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1c1b1b' }}>
      Ready to Revolutionize Form Building?
    </h2>
    <p className="text-lg sm:text-xl text-gray-600 mb-10 px-4">
      Join thousands who are already building forms faster and easier with AI.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link
        href="/signup"
        className="text-white px-8 py-4 rounded-[2rem] font-semibold text-base sm:text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center space-x-2 w-full sm:w-auto"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(226, 52, 43) 0%, rgb(255, 106, 28) 100%)',
        }}
      >
        <span>Try It Free</span>
        <ArrowRight className="w-5 h-5" />
      </Link>

      <Link
        href="/login"
        className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-[2rem] font-semibold text-base sm:text-lg hover:border-orange-600 hover:text-orange-600 transition-all duration-200 w-full sm:w-auto text-center"
      >
        Sign In
      </Link>
    </div>
  </div>
</div>

      )}

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(to right, rgb(226, 52, 43) 0%, rgb(255, 106, 28) 100%)' }}>
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">FormCraft AI</span>
          </div>
          <p className="text-gray-400 mb-6">
            Next-generation form building. Driven by artificial intelligence.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <span>© 2025 FormCraft AI. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
