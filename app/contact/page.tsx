"use client";
import MagicButton from "@/components/ui/MagicButton";
import { FaPaperPlane, FaPhone, FaEnvelope, FaChartLine, FaUsers, FaHandshake } from 'react-icons/fa';
import { IoCopyOutline } from 'react-icons/io5';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black-100 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Let's Boost Your Campaign Results</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form - Using FormSubmit.co */}
          <div className="bg-black/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Ready to Maximize Your Leads?</h2>
            
            <form 
              action="https://formsubmit.co/rafiqahamed.tanim@gmail.com" 
              method="POST"
              className="space-y-6"
            >
                {/* CC additional emails */}
                {/* <input type="hidden" name="_cc" value="another@email.com" /> */}

                {/* BCC emails */}
                {/* <input type="hidden" name="_bcc" value="secret@email.com" /> */}

                {/* Reply-to address */}
                {/* <input type="hidden" name="_replyto" value="noreply@yourdomain.com" /> */}
                
              {/* Add your custom subject */}
              <input type="hidden" name="_subject" value="New Lead from TechConnect Website!" />
              
              {/* Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />
              
              {/* Redirect after submit */}
              <input 
                type="hidden" 
                name="_next" 
                value="https://yourdomain.com/thank-you" 
              />

              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">How Can We Help?</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your telemarketing needs (solar, MCA, insurance, or real estate)"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <MagicButton
                title="Send Message"
                icon={<FaPaperPlane />}
                position="right"
                type="submit"
                otherClasses="w-full"
              />
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-black/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              {/* Phone Section */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-900/30 rounded-lg">
                  <FaPhone className="text-blue-400 text-lg" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2">Call Us</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <p className="text-neutral-300">(929) 655-9561</p>
                    {/* <MagicButton
                      title="Copy"
                      icon={<IoCopyOutline />}
                      position="left"
                      otherClasses="bg-[#161A31] hover:bg-[#161A31]/80 text-sm px-3 py-1 h-8"
                      copyText="(929) 655-9561"
                    /> */}
                  </div>
                </div>
              </div>

              {/* Email Section */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-900/30 rounded-lg">
                  <FaEnvelope className="text-blue-400 text-lg" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2">Email Us</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <p className="text-neutral-300">Sharifanim66@gmail.com</p>
                    {/* <MagicButton
                      title="Copy"
                      icon={<IoCopyOutline />}
                      position="left"
                      otherClasses="bg-[#161A31] hover:bg-[#161A31]/80 text-sm px-3 py-1 h-8"
                      copyText="Sharifanim66@gmail.com"
                    /> */}
                  </div>
                </div>
              </div>

              {/* Our Edge Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">Our Edge</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-900/30 rounded-lg">
                      <FaChartLine className="text-blue-400 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Proven Results</h4>
                      <p className="text-sm text-neutral-300">
                        Average 45% increase in qualified leads across campaigns
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-900/30 rounded-lg">
                      <FaUsers className="text-blue-400 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Industry Experts</h4>
                      <p className="text-sm text-neutral-300">
                        Specialized teams for each vertical you serve
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-900/30 rounded-lg">
                      <FaHandshake className="text-blue-400 text-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Performance-Based</h4>
                      <p className="text-sm text-neutral-300">
                        We succeed when you succeed - aligned with your goals
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="pt-2">
                <h3 className="font-bold mb-2">Business Hours</h3>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-900/30 rounded-lg">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-300">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 3:00 PM EST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}