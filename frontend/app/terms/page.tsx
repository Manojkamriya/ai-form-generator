'use client';

import Link from 'next/link';
import { FileText, Sparkles } from 'lucide-react';

export default function TermsOfServicePage() {
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
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
              <p className="text-gray-500 text-sm mt-1">Last updated: October 16, 2025</p>
            </div>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Agreeing to Our Terms</h2>
              <p>
                By using SmartForms Pro, you agree to follow these terms. Please read them carefully.
                If you don’t agree, you should stop using our service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Using SmartForms Pro</h2>
              <p className="mb-2">
                You can use SmartForms Pro to create and manage forms for personal or business use.
                Please use it responsibly and legally. You should not:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Upload harmful or illegal content</li>
                <li>Try to hack, damage, or misuse the service</li>
                <li>Impersonate someone else</li>
                <li>Use the platform to harass or harm others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Your Account</h2>
              <p>
                Keep your account details private. You are responsible for any activity that happens
                through your account. If you notice any unauthorized access, please contact us right away.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Your Content</h2>
              <p>
                You own the forms and content you create. We only store and process it so the service
                can function. We don’t claim ownership of your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. AI-Generated Forms</h2>
              <p>
                Our AI helps you create form templates quickly. While we aim for accuracy, results may
                sometimes need review. Please double-check generated content before using it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Service Updates and Downtime</h2>
              <p>
                We do our best to keep SmartForms Pro running smoothly. However, we may update, pause,
                or change parts of the service from time to time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Limitation of Responsibility</h2>
              <p>
                SmartForms Pro is provided “as is.” We’re not responsible for any loss or damage that
                may result from using the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Changing These Terms</h2>
              <p>
                We may update these terms when needed. If we make major changes, we’ll let you know.
                Using the service after updates means you accept the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact Us</h2>
              <p>
                Have questions about these terms? Reach out to us through our support page or email.
              </p>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link
              href="/privacy"
              className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
            >
              View Privacy Policy →
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
