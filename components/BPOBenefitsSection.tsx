// Add this to your Hero component (or create a new section component)
import React from 'react';
import Image from 'next/image';

const BPOBenefitsSection = () => {
  return (
    <div className="relative z-10 py-16 bg-gradient-to-b from-blue-900/20 to-black">
      {/* Grid Background */}
      <div className="absolute inset-0 dark:bg-grid-white/[0.03] bg-grid-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Power of BPO & Telemarketing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming business communication into measurable growth and success
          </p>
        </div>

        {/* Phone Call Benefits - Horizontal Cards */}
        {/* <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            The Power of the Phone Call
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                number: '01',
                title: 'Immediate Response',
                description: 'Real-time engagement with potential customers',
                image: '/power-of-call-1.jpg'
              },
              {
                number: '02',
                title: 'Personal Touch',
                description: 'Customized communication for each client',
                image: '/power-of-call-2.jpg'
              },
              {
                number: '03',
                title: 'Clarification',
                description: 'Instant answers to customer questions',
                image: '/power-of-call-3.jpg'
              },
              {
                number: '04',
                title: 'Problem-Solving',
                description: 'Quick resolution of customer issues',
                image: '/power-of-call-4.jpg'
              },
              {
                number: '05',
                title: 'Relationships',
                description: 'Building long-term customer connections',
                image: '/power-of-call-5.jpg'
              }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400 transition-all duration-300 h-64">
                <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition-opacity">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <span className="text-blue-400 font-bold text-lg">{item.number}</span>
                  <h4 className="text-white text-xl font-bold mt-2 mb-3">{item.title}</h4>
                  <p className="text-gray-300 mt-auto">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* BPO Advantages - Vertical Cards */}
        {/* <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Advantages of the BPO Industry
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cost Reduction',
                description: 'Significant savings on operational expenses',
                image: '/bpo-advantage-1.jpg'
              },
              {
                title: 'Employment Opportunities',
                description: 'Creates jobs and develops skilled workforce',
                image: '/bpo-advantage-2.jpg'
              },
              {
                title: 'Latest Technologies',
                description: 'Access to cutting-edge tools and infrastructure',
                image: '/bpo-advantage-3.jpg'
              },
              {
                title: 'Experienced Professionals',
                description: 'Skilled teams with specialized knowledge',
                image: '/bpo-advantage-4.jpg'
              },
              {
                title: 'Focus on Core Business',
                description: 'Free up resources for strategic initiatives',
                image: '/bpo-advantage-5.jpg'
              },
              {
                title: 'Customer Feedback',
                description: 'Valuable insights to improve your offerings',
                image: '/bpo-advantage-6.jpg'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-blue-400 transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-white text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* BPO Services Benefits - Image + Text */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Benefits of BPO Services
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/bpo-services-benefits.jpg"
                alt="BPO Services Benefits"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <ul className="space-y-6">
                {[
                  "Risk Management & Compliance - Mitigate business risks with expert oversight",
                  "Expertise and Specialization - Leverage domain-specific knowledge",
                  "Operational Efficiency - Streamline processes for better productivity",
                  "Flexibility & Agility - Scale operations up or down as needed",
                  "Cost Savings - Reduce overhead while maintaining quality",
                  "Strategic Partnerships - Align with experts who understand your goals"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4 text-blue-400 font-bold text-lg">
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        {item.split(' - ')[0]}
                      </h4>
                      <p className="text-gray-300">
                        {item.split(' - ')[1]}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Conversion Section - Full Width */}
        {/* <div className="relative rounded-2xl overflow-hidden h-96">
          <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
            <div className="text-center max-w-2xl px-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Turn Calls Into Conversions Fast
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Our customer support specialists are trained to transform every call into a business opportunity
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Boost Your Conversions
              </button>
            </div>
          </div>
          <Image
            src="/call-center-conversions.jpg"
            alt="Call center conversions"
            fill
            className="object-cover"
          />
        </div> */}
      </div>
    </div>
  );
};

export default BPOBenefitsSection;