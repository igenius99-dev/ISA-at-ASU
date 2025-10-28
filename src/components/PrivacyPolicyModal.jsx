import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, Eye, Lock, Globe, Users, FileText } from 'lucide-react'
import { Button } from './ui/button'

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  const privacyPolicyContent = {
    lastUpdated: "October 2025",
    sections: [
      {
        id: "introduction",
        title: "1. Introduction",
        content: "Welcome to the Website of ISA at ASU. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Website. Please read this policy carefully. If you disagree with the practices described herein, please do not access or use the Website."
      },
      {
        id: "information-collection",
        title: "2. Information We Collect",
        content: "We may collect information about you in the following ways:",
        subsections: [
          {
            title: "2.1 Information you provide us directly",
            content: "Registration or membership forms (if applicable) – e.g., name, email address, student status at Arizona State University, program of study, country of origin, and other relevant details. Contact forms, event sign-ups, feedback or survey responses. Communications you send to us (via email, forms, etc.)."
          },
          {
            title: "2.2 Information collected automatically",
            content: "When you visit and interact with the Website, we may automatically collect certain data, including: Your IP address, browser type and version, operating system, device type. Usage details: pages viewed, time and date of access, how you navigate to and through the Website, the amount of time spent on pages. Cookies and similar tracking technologies (see Section 5 for more details)."
          }
        ]
      },
      {
        id: "use-of-information",
        title: "3. Use of Your Information",
        content: "We use your information for the following purposes:",
        list: [
          "To provide, maintain, and improve the Website and our services.",
          "To manage event registrations, membership records, communications, newsletters, or other ISA at ASU activities.",
          "To contact you regarding your inquiries, comments, or to send you newsletters or updates if you opt in.",
          "To analyze and understand how the Website is used, to improve user experience and functionality.",
          "To ensure security, prevent fraud and misuse of the Website, and enforce our policies."
        ]
      },
      {
        id: "disclosure",
        title: "4. Disclosure of Your Information",
        content: "We may disclose your information in the following circumstances:",
        list: [
          "With your consent.",
          "When required by law or legal process, or to respond to a governmental request.",
          "To protect our rights, property, or safety, or that of our members or the public.",
          "In connection with a merger, acquisition, reorganization, or sale of assets (with notice and in compliance with applicable law).",
          "To third-party service providers who assist us in operating the Website, conducting ISA at ASU programs, or performing services on our behalf (subject to confidentiality obligations)."
        ]
      },
      {
        id: "cookies",
        title: "5. Cookies and Tracking Technologies",
        content: "We and our third-party service providers may use cookies, web beacons, and similar technologies to collect and process information about your use of the Website. Cookies are small data files stored on your device when you visit the Website. They help us recognize your device and store certain preferences. You can set your browser to refuse cookies or alert you when cookies are being sent; however, if you disable cookies, some parts of the Website may not function properly. We may use analytics services (such as Google Analytics or similar) to track usage and performance metrics. These services may use cookies or other tracking technologies."
      },
      {
        id: "data-retention",
        title: "6. Data Retention",
        content: "We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. If you would like us to delete your information, you may contact us (see Section 9)."
      },
      {
        id: "security",
        title: "7. Security",
        content: "We take reasonable administrative, technical, and physical measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no Internet or electronic system is completely secure, so we cannot guarantee absolute security."
      },
      {
        id: "your-rights",
        title: "8. Your Rights and Choices",
        content: "Depending on your location and applicable law, you may have certain rights regarding your personal information, including:",
        list: [
          "The right to access the personal information we hold about you.",
          "The right to correct or update your personal information.",
          "The right to delete or request deletion of your personal information (subject to legal exceptions).",
          "The right to withdraw consent where we rely on it for processing your information.",
          "The right to object to or restrict certain processing of your personal information."
        ],
        additionalContent: "If you wish to exercise these rights, please contact us (see Section 9). We will respond to your request in accordance with applicable law."
      },
      {
        id: "contact",
        title: "9. Contact Information",
        content: "If you have questions or concerns about this Privacy Policy or our practices, or wish to exercise your rights regarding your personal information, please contact us at:",
        contactInfo: {
          organization: "International Students Association at Arizona State University",
          email: "official@isa-asu.com",
          address: "Arizona State University, Tempe, AZ"
        }
      },
      {
        id: "changes",
        title: "10. Changes to This Privacy Policy",
        content: "We may update this Privacy Policy from time to time. When we do, we will revise the \"Last Updated\" date at the top of this policy. We encourage you to check this page periodically for any changes. Your continued use of the Website after the posting of revised terms means you accept the changes."
      },
      {
        id: "minors",
        title: "11. Additional Disclosures for Minors",
        content: "Our Website is not intended for users under the age of 18. We do not knowingly collect or solicit personal information from children under 18. If we become aware that we have collected personal information from a child under 18 without verification of parental consent, we will take steps to delete such information promptly."
      },
      {
        id: "international",
        title: "12. International Users / Cross-Border Transfers",
        content: "If you are accessing the Website from outside the United States, your information may be transferred to and processed in the United States or other jurisdictions where our servers or service providers are located. By using the Website, you consent to such transfer and processing."
      },
      {
        id: "third-party",
        title: "13. Third-Party Links",
        content: "The Website may contain links to third-party websites, plug-ins or services that are not operated by us. We are not responsible for the privacy practices of those third parties. We encourage you to read the privacy policies of those websites before providing any personal information."
      }
    ]
  }

  const iconMap = {
    introduction: Shield,
    "information-collection": Eye,
    "use-of-information": Users,
    disclosure: Globe,
    cookies: Lock,
    "data-retention": FileText,
    security: Lock,
    "your-rights": Users,
    contact: Globe,
    changes: FileText,
    minors: Shield,
    international: Globe,
    "third-party": Globe
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden"
          >
            <div className="h-full bg-white rounded-2xl shadow-2xl flex flex-col">
              
              {/* Header with Close Button */}
              <div className="flex justify-end p-4 border-b border-gray-200">
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-4xl mx-auto">
                  

                  {/* Policy Sections */}
                  <div className="space-y-8">
                    {privacyPolicyContent.sections.map((section, index) => {
                      const IconComponent = iconMap[section.id] || FileText
                      
                      return (
                        <motion.div
                          key={section.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                          className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start space-x-4">
                          
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {section.title}
                              </h3>
                              <p className="text-gray-700 leading-relaxed mb-4">
                                {section.content}
                              </p>
                              
                              {/* Subsections */}
                              {section.subsections && (
                                <div className="space-y-4">
                                  {section.subsections.map((subsection, subIndex) => (
                                    <div key={subIndex} className="ml-4 pl-4 border-l-2 border-saffron/30">
                                      <h4 className="font-semibold text-gray-800 mb-2">
                                        {subsection.title}
                                      </h4>
                                      <p className="text-gray-700 leading-relaxed">
                                        {subsection.content}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              )}
                              
                              {/* Lists */}
                              {section.list && (
                                <ul className="space-y-2 ml-4">
                                  {section.list.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start space-x-2">
                                      <div className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0" />
                                      <span className="text-gray-700">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                              
                              {/* Additional content */}
                              {section.additionalContent && (
                                <p className="text-gray-700 leading-relaxed mt-4">
                                  {section.additionalContent}
                                </p>
                              )}
                              
                              {/* Contact info */}
                              {section.contactInfo && (
                                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                  <p className="font-semibold text-gray-800 mb-2">
                                    {section.contactInfo.organization}
                                  </p>
                                  <p className="text-gray-700">
                                    Email: <a href={`mailto:${section.contactInfo.email}`} className="text-saffron hover:underline">
                                      {section.contactInfo.email}
                                    </a>
                                  </p>
                                  <p className="text-gray-700">
                                    Address: {section.contactInfo.address}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                  <p className="text-sm text-gray-600">
                    By using our website, you agree to this Privacy Policy.
                  </p>
                  <Button
                    onClick={onClose}
                    variant="indian"
                    className="px-8"
                  >
                    I Understand
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default PrivacyPolicyModal
