"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from '@/lib/safe-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = async () => {
    try {
      if (!navigator.clipboard) {
        throw new Error('Clipboard not supported');
      }
      await navigator.clipboard.writeText('alex@example.com');
      toast.success('Email copied to clipboard!', {
        description: 'alex@example.com',
        duration: 3000,
      });
    } catch (error) {
      console.warn('Copy to clipboard failed:', error);
      toast.error('Failed to copy email. Please select and copy manually.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Show success message
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        description: 'Thank you for reaching out. I appreciate your interest!',
        duration: 5000,
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });

      console.log('Form submitted:', formData);
    } catch (error) {
      toast.error('Failed to send message. Please try again or contact me directly.', {
        description: 'You can also reach me at alex@example.com',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex@example.com',
      href: 'mailto:alex@example.com',
      onClick: copyEmail
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com/?q=San+Francisco,CA'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-500 rounded-full mx-auto mb-8" />
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="What's this about?"
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 glow text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        Sending...
                        <motion.div
                          className="ml-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send size={20} />
                        </motion.div>
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2" size={20} />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-foreground/80 leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, whether that's 
                a full-time role, freelance project, or just a chat about technology.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Component = info.onClick ? motion.button : motion.a;
                  const props = info.onClick ?
                    { onClick: info.onClick } :
                    { href: info.href, target: info.href.startsWith('http') ? '_blank' : undefined, rel: info.href.startsWith('http') ? 'noopener noreferrer' : undefined };

                  return (
                    <Component
                      key={info.label}
                      {...props}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group w-full text-left cursor-pointer"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <info.icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-foreground/70">{info.value}</p>
                      </div>
                      {info.onClick && (
                        <div className="ml-auto text-xs text-primary/60 opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to copy
                        </div>
                      )}
                    </Component>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon size={24} className="text-primary group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-xl border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <p className="font-semibold text-foreground">Available for Work</p>
              </div>
              <p className="text-sm text-foreground/70">
                I'm currently open to new opportunities and interesting projects. 
                Let's discuss how we can work together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
