import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import PrivacyPolicyModal from './PrivacyPolicyModal'
import { 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone, 
  Heart,
  Star,
  Users,
  Calendar,
  BookOpen
} from 'lucide-react'

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/isa.asu', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/isa-asu/', color: 'hover:text-blue-600' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://chat.whatsapp.com/', color: 'hover:text-green-500' }

  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Events', href: '/#events' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' }
  ]

  const studentResources = [
    { name: 'Incoming Students', href: '/incoming' },
    { name: 'Current Students', href: '/current' },
    { name: 'Housing Information', href: '/housing' }
  ]

  const faqs = [
    'Where can I find information about housing?',
    'How can we RSVP for ISA events?',
    'How can I become a member of ISA?'
  ]

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img src="/ISALogo.png" alt="ISA Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ISA at ASU</h3>
                <p className="text-sm text-gray-400">Indian Students Association</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building bridges between cultures while celebrating our Indian heritage. 
              Join our vibrant community at Arizona State University.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-saffron">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-saffron transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.href}
                      className="text-gray-300 hover:text-saffron transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Student Resources */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-green">Student Resources</h4>
            <ul className="space-y-3">
              {studentResources.map((resource) => (
                <li key={resource.name}>
                  {resource.href.startsWith('#') ? (
                    <a 
                      href={resource.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                    >
                      {resource.name}
                    </a>
                  ) : (
                    <Link 
                      to={resource.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                    >
                      {resource.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-orange">Contact & FAQs</h4>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-saffron" />
                <a href="mailto:official@isa-asu.com" className="text-gray-300 hover:text-saffron transition-colors">
                  official@isa-asu.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-saffron" />
                <span className="text-gray-300">Arizona State University</span>
              </div>
              <div className="flex items-center space-x-3">
                
              </div>
            </div>

          </motion.div>
        </div>

        {/* Newsletter Signup */}
        
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with love for the Indian community at ASU</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© 2024 ISA at ASU. All rights reserved.</span>
              <button 
                onClick={() => setIsPrivacyModalOpen(true)}
                className="hover:text-saffron transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <a href="#" className="hover:text-saffron transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </footer>
  )
}

export default Footer
