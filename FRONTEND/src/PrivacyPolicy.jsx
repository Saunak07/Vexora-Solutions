import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0B2C4D] mb-6">
            Privacy Policy
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            At Vexora Solutions, we respect your privacy and are committed to
            protecting the personal information you share with us. This Privacy
            Policy explains how we collect, use, and safeguard your data.
          </p>

          {/* SECTION */}
          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may collect personal information such as your name, email
                address, company name, and any details you provide when you:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
                <li>Fill out a contact or inquiry form</li>
                <li>Reach out to us via email or messaging platforms</li>
                <li>Request information about our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The information we collect is used only to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
                <li>Respond to your inquiries</li>
                <li>Understand your project requirements</li>
                <li>Communicate regarding our services</li>
                <li>Improve our website and service offerings</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Data Sharing
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, rent, or trade your personal information with
                third parties. Your data is shared only when required to provide
                our services or when legally obligated to do so.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We take reasonable technical and organizational measures to
                protect your personal data from unauthorized access, misuse, or
                disclosure. However, no method of transmission over the internet
                is completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may use basic cookies or analytics tools to improve
                user experience and understand website usage. These do not
                collect personally identifiable information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You have the right to request access, correction, or deletion of
                your personal data. To make such a request, please contact us
                using the details below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy or how your
                information is handled, you can contact us at:
              </p>
              <p className="text-gray-700 mt-3">
                📧 <strong>Email:</strong> vexoraservices@gmail.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Updates to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with the updated date.
              </p>
            </div>

          </div>

          <p className="text-sm text-gray-500 mt-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy
