import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import LiquidBlob from './LiquidBlob';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // ✅ Paste your Google Apps Script Web App URL here
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx4vzg0m2VuXQA91lGEyYXG4refNwaPMVUNr3gAnwtSNciJNiAFzNELXaepHS-Rzy7enw/exec';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#FAFAFA]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <LiquidBlob color="orange" size="700px" top="20%" right="-200px" delay="0s" />
        <LiquidBlob color="grey" size="600px" bottom="-100px" left="-150px" delay="2s" />
        <div className="absolute inset-0 backdrop-blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Let's Connect
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8 leading-[1.1]">
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">Level Up?</span>
            </h2>
            <p className="text-xl text-gray-600 font-light mb-12 max-w-lg">
              We're currently taking on new projects. Reach out to discuss how we can elevate your channel's visuals and maximize your CTR.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <Mail className="text-orange-500" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">Direct Email</h4>
                  <a href="mailto:r3nderstudio10@gmail.com" className="text-lg md:text-xl text-gray-600 hover:text-orange-500 transition-colors block mb-1">
                    r3nderstudio10@gmail.com
                  </a>
                  <a href="mailto:r3nderstudio18@gmail.com" className="text-lg md:text-xl text-gray-600 hover:text-orange-500 transition-colors block">
                    r3nderstudio18@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="liquid-glass p-8 md:p-12 rounded-[2.5rem] shadow-2xl space-y-8 relative group"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-900 ml-4">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className="w-full px-6 py-4 rounded-3xl bg-white/50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-900 ml-4">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className="w-full px-6 py-4 rounded-3xl bg-white/50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-900 ml-4">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  className="w-full px-6 py-4 rounded-3xl bg-white/50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 resize-none text-gray-800 placeholder-gray-400 disabled:opacity-50"
                  placeholder="Tell us about your channel and goals..."
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 font-medium bg-green-50 py-3 px-6 rounded-full"
                >
                  ✓ Message sent! We'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-500 font-medium bg-red-50 py-3 px-6 rounded-full"
                >
                  ✗ Something went wrong. Please email us directly.
                </motion.p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-5 rounded-full bg-gray-900 text-white font-semibold text-lg hover:bg-orange-500 transition-colors duration-300 flex items-center justify-center space-x-2 group/btn shadow-xl shadow-orange-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;