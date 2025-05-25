"use client";
import MagicButton from "@/components/ui/MagicButton";
import { FaPaperPlane, FaPhone, FaEnvelope, FaChartLine, FaUsers, FaHandshake, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';
import { IoCopyOutline } from 'react-icons/io5';
import { useState } from 'react';

type FormData = {
  name: string;
  company: string;
  address: string;
  countryCode: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  company?: string;
  address?: string;
  phone?: string;
  email?: string;
  message?: string;
};

const countryCodes = [
  { code: '+1', name: 'USA (+1)' },
  { code: '+44', name: 'UK (+44)' },
  { code: '+61', name: 'Australia (+61)' },
  { code: '+49', name: 'Germany (+49)' },
  { code: '+33', name: 'France (+33)' },
  { code: '+81', name: 'Japan (+81)' },
  { code: '+91', name: 'India (+91)' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    address: '',
    countryCode: '+1',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,15}$/; // Basic phone number validation (digits only)

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.address.trim()) newErrors.address = 'Company address is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (7-15 digits)';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form
      const form = e.target as HTMLFormElement;
      form.submit();
    }
  };

  return (
    <div className="w-full">
      <div className="py-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Let&apos;s Boost Your Campaign Results</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form - Using FormSubmit.co */}
          <div className="bg-black/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Ready to Maximize Your Leads?</h2>
            
            <form 
              action="https://formsubmit.co/info@dialershub.com" 
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
                {/* CC additional emails */}
                {/* <input type="hidden" name="_cc" value="another@email.com" /> */}

                {/* BCC emails */}
                {/* <input type="hidden" name="_bcc" value="secret@email.com" /> */}

                {/* Reply-to address */}
                {/* <input type="hidden" name="_replyto" value="noreply@yourdomain.com" /> */}
                
              {/* Add your custom subject */}
              <input type="hidden" name="_subject" value="New Email from Dialers Hub Website!" />
              
              {/* Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />
              
              {/* Redirect after submit */}
              <input 
                type="hidden" 
                name="_next" 
                value="https://techconnectsolutions.netlify.app/thank-you" 
              />

              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium">Company Name *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
              </div>

              <div>
                <label htmlFor="address" className="block mb-2 text-sm font-medium">Company Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number *</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-full sm:w-auto bg-white/10 border border-white/20 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="1234567890"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">How Can We Help? *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your telemarketing needs (solar, MCA, insurance, or real estate)"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
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
              {/* Company Info Section */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-900/30 rounded-lg">
                  <FaBuilding className="text-blue-400 text-lg" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2">Company Name</h3>
                  <p className="text-neutral-300">Dialers Hub</p>
                </div>
              </div>

              {/* Address Section */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-900/30 rounded-lg">
                  <FaMapMarkerAlt className="text-blue-400 text-lg" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2">Company Address</h3>
                  <p className="text-neutral-300">
                    123 Business Avenue, Suite 456<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>

              {/* Phone Section */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-900/30 rounded-lg">
                  <FaPhone className="text-blue-400 text-lg" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2">Call Us</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <p className="text-neutral-300">+1 (929) 655-9561</p>
                    <button 
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                      onClick={() => navigator.clipboard.writeText('+1 (929) 655-9561')}
                    >
                      <IoCopyOutline /> Copy
                    </button>
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
                    <p className="text-neutral-300 break-all whitespace-normal">info@dialershub.com</p>
                    <button 
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                      onClick={() => navigator.clipboard.writeText('info@dialershub.com')}
                    >
                      <IoCopyOutline /> Copy
                    </button>
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