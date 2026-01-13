import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0B2C4D] mb-6">
            Terms of Service
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            These Terms of Service govern your use of the Vexora Solutions website
            and services. By accessing or using our website, you agree to comply
            with these terms.
          </p>

          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Vexora Solutions provides digital services including website
                development, web applications, automation, and related consulting
                services. All services are provided based on mutually agreed
                requirements and scope.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Use of Website
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to use this website only for lawful purposes. You must
                not attempt to misuse, disrupt, or gain unauthorized access to
                the website or related systems.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Project Engagement
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Project timelines, deliverables, pricing, and responsibilities
                will be defined and agreed upon before work begins. Any changes
                to the scope may require revised timelines or additional costs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Payments
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Payment terms will be discussed and agreed upon before the start
                of a project. Failure to make timely payments may result in
                delayed delivery or suspension of services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Upon full payment, ownership of the final project deliverables
                will be transferred to the client unless otherwise agreed in
                writing. Vexora Solutions retains the right to showcase completed
                work in its portfolio unless restricted by agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                While we strive to deliver reliable solutions, Vexora Solutions
                shall not be held liable for any indirect, incidental, or
                consequential damages arising from the use of our services or
                website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Termination
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Either party may terminate a service agreement with reasonable
                notice. Any completed work up to the termination date must be
                paid for as agreed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update these Terms of Service from time to time. Any
                updates will be posted on this page with the revised date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0B2C4D] mb-3">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-700 mt-3">
                📧 <strong>Email:</strong> vexoraservices@gmail.com
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

export default TermsOfService
