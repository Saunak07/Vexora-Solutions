import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { CheckCircle } from 'lucide-react'

const About = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />

      {/* HERO */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B2C4D] mb-6">
            About Vexora Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a focused digital solutions studio helping businesses build
            reliable, scalable, and well-structured web systems that support
            long-term growth.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0B2C4D] mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Vexora Solutions was started with a simple goal — to help businesses
              move away from fragile, poorly structured software and towards
              clean, dependable digital systems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We work closely with clients to understand their workflows,
              challenges, and objectives before writing a single line of code.
              Our focus is on clarity, maintainability, and real-world usability.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-[#0B2C4D] mb-4">
              What We Believe In
            </h3>
            <ul className="space-y-4">
              {[
                'Simple and maintainable architecture',
                'Transparent communication at every step',
                'Solutions built for long-term use, not shortcuts',
                'Technology that supports business decisions'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-[#2EA4FF] mt-1 mr-3" size={20} />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B2C4D] mb-8">
            How We Work
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Understand First',
                desc: 'We take time to understand your business, users, and processes before proposing solutions.'
              },
              {
                title: 'Build with Purpose',
                desc: 'Every feature is built with a clear reason — no unnecessary complexity or bloated systems.'
              },
              {
                title: 'Support & Improve',
                desc: 'After delivery, we help maintain, improve, and adapt the system as your business evolves.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#0B2C4D] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B2C4D] mb-8">
            Why Businesses Choose Vexora
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Clear and honest communication',
              'Modern tech stack with proven practices',
              'Flexible engagement for small teams and startups',
              'Focus on reliability over flashy features'
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="text-[#2EA4FF] mt-1 mr-3" size={20} />
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B2C4D] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let’s Build Something Reliable
          </h2>
          <p className="text-gray-300 mb-10 leading-relaxed">
            If you’re looking for a dependable technology partner who values
            clarity, quality, and long-term thinking, we’d love to talk.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-white text-[#0B2C4D] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
