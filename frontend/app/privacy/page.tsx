'use client';

import Link from 'next/link';
import { Shield, Sparkles } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-teal-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">SmartForms Pro</span>
          </Link>
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-teal-600 rounded-lg flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-500 text-sm mt-1">Last updated: October 16, 2025</p>
            </div>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
              <p>
                We collect the information you share with us when creating an account, using our
                tools, or contacting us. This can include your name, email, and any forms or content
                you create through SmartForms Pro.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
              <p className="mb-2">
                We use your information to make SmartForms Pro work smoothly and safely. This includes:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Providing and improving our services</li>
                <li>Processing your form data and transactions</li>
                <li>Sending important updates or support messages</li>
                <li>Responding to your requests or feedback</li>
                <li>Preventing fraud or misuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Keeping Your Data Safe</h2>
              <p>
                We take your privacy seriously. Your form data is encrypted and stored securely. We
                use modern security measures to prevent unauthorized access, loss, or misuse of your
                information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Third-Party Services</h2>
              <p>
                SmartForms Pro uses AI tools and cloud storage to provide certain features. These
                partners have their own privacy policies, and we recommend reviewing them for more
                details on how your data is handled.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Your Privacy Choices</h2>
              <p className="mb-2">You have full control over your information. You can:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>View and download your personal data</li>
                <li>Edit or update your information</li>
                <li>Request account deletion</li>
                <li>Opt out of certain types of data use</li>
                <li>Export your data in a readable format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Contact Us</h2>
              <p>
                Have questions about your data or our privacy policy? Reach out anytime through our
                support channels or contact form on the website.
              </p>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link
              href="/terms"
              className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
            >
              View Terms of Service →
            </Link>
            <Link
              href="/"
              className="bg-teal-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
