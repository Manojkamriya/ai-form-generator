'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import "./globals.css";
import { Sparkles, FileText, Zap, Shield, Users, ArrowRight, LogOut } from 'lucide-react';

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
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
      <div className="px-6 py-16 lg:pt-12 lg:pb-24">
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
              className="text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2"
              style={{ backgroundImage: 'linear-gradient(to right, rgb(226, 52, 43) 0%, rgb(255, 106, 28) 100%)' }}
            >
              <span>Begin Building Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold" style={{ color: 'rgb(226, 52, 43)' }}>10K+</div>
                  <div className="text-sm text-gray-600">Forms Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ color: 'rgb(255, 106, 28)' }}>5K+</div>
                  <div className="text-sm text-gray-600">Happy Creators</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ color: 'rgb(226, 52, 43)' }}>99.9%</div>
                  <div className="text-sm text-gray-600">Reliability</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Demo */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="w-5 h-5" style={{ color: 'rgb(226, 52, 43)' }} />
                    <span className="font-semibold" style={{ color: '#1c1b1b' }}>See It In Action</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-gray-700 italic">
                      &ldquo;Build a contact form with name, email, phone, and message fields&ldquo;
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg p-3" style={{ backgroundColor: 'rgba(255, 106, 28, 0.1)', border: '1px solid rgba(226, 52, 43, 0.3)' }}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Full Name</span>
                      <span className="text-xs text-gray-500">Text Field</span>
                    </div>
                  </div>
                  <div className="rounded-lg p-3" style={{ backgroundColor: 'rgba(255, 106, 28, 0.1)', border: '1px solid rgba(226, 52, 43, 0.3)' }}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Email Address</span>
                      <span className="text-xs text-gray-500">Email Field</span>
                    </div>
                  </div>
                  <div className="rounded-lg p-3" style={{ backgroundColor: 'rgba(255, 106, 28, 0.1)', border: '1px solid rgba(226, 52, 43, 0.3)' }}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Phone Number</span>
                      <span className="text-xs text-gray-500">Phone Field</span>
                    </div>
                  </div>
                  <div className="rounded-lg p-3" style={{ backgroundColor: 'rgba(255, 106, 28, 0.1)', border: '1px solid rgba(226, 52, 43, 0.3)' }}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Message</span>
                      <span className="text-xs text-gray-500">Text Area</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center space-x-2 text-sm" style={{ color: 'rgb(226, 52, 43)' }}>
                  <Zap className="w-4 h-4" />
                  <span className="font-medium">Built in 2 seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="px-6 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1b1b' }}>
              Simple Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Build professional forms in just three steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6" style={{ backgroundImage: 'linear-gradient(to right, rgb(226, 52, 43) 0%, rgb(255, 106, 28) 100%)' }}>
                  1
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#1c1b1b' }}>Explain Your Needs</h3>
                <p className="text-gray-600">
                  Just write what you want in everyday language. Our AI comprehends your needs instantly.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6" style={{ backgroundImage: 'linear-gradient(to right, rgb(226, 52, 43) 0%, rgb(255, 106, 28) 100%)' }}>
                  2
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#1c1b1b' }}>AI Generates Form</h3>
                <p className="text-gray-600">
                  See AI craft your form with intelligent field types, validation logic, and clean structure.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6" style={{ backgroundImage: 'linear-gradient(to right, rgb(226, 52, 43) 0%, rgb(255, 106, 28) 100%)' }}>
                  3
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#1c1b1b' }}>Publish & Gather</h3>
                <p className="text-gray-600">
                  Deploy your form right away, gather responses, and organize submissions effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1b1b' }}>
              Why Choose FormCraft AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Revolutionize your form creation with AI-driven automation and smart design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundImage: 'linear-gradient(to right, rgb(226, 52, 43) 0%, rgb(255, 106, 28) 100%)' }}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#1c1b1b' }}>Intelligent Form Creation</h3>
              <p className="text-gray-600">
                Describe your needs in everyday words and witness AI build the ideal form layout with proper fields and validation rules.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundImage: 'linear-gradient(to right, rgb(226, 52, 43) 0%, rgb(255, 106, 28) 100%)' }}>
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#1c1b1b' }}>Blazing Speed</h3>
              <p className="text-gray-600">
                Create sophisticated forms instantly instead of spending hours. Our AI grasps context and delivers forms matching your precise needs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundImage: 'linear-gradient(to right, rgb(226, 52, 43) 0%, rgb(255, 106, 28) 100%)' }}>
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#1c1b1b' }}>Intelligent Field Detection</h3>
              <p className="text-gray-600">
                Automatically identifies appropriate field types, applies validation logic, and recommends optimal input formats for each data point.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundImage: 'linear-gradient(to right, rgb(226, 52, 43) 0%, rgb(255, 106, 28) 100%)' }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#1c1b1b' }}>Protected & Dependable</h3>
              <p className="text-gray-600">
                Developed with business-level security standards. Every form response is encrypted and secured with comprehensive access management.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundImage: 'linear-gradient(to right, rgb(226, 52, 43) 0%, rgb(255, 106, 28) 100%)' }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#1c1b1b' }}>Collaborative Workspace</h3>
              <p className="text-gray-600">
                Distribute forms among teammates, work together on layouts, and handle responses collectively in one unified dashboard.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundImage: 'linear-gradient(to right, rgb(226, 52, 43) 0%, rgb(255, 106, 28) 100%)' }}>
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#1c1b1b' }}>Seamless Connectivity</h3>
              <p className="text-gray-600">
                Place forms everywhere, connect with current applications, and download information in various formats for smooth process flow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Only show when user is not logged in */}
      {!isLoggedIn && (
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#1c1b1b' }}>
            Ready to Revolutionize Form Building?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands who are already building forms faster and easier with AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/signup"
              className="text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center space-x-2"
              style={{ backgroundImage: 'linear-gradient(to right, rgb(226, 52, 43) 0%, rgb(255, 106, 28) 100%)' }}
            >
              <span>Try It Free</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/login"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-orange-600 hover:text-orange-600 transition-all duration-200"
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
