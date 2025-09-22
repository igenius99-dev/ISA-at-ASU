import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { 
  GraduationCap, 
  Home, 
  Plane, 
  BookOpen, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Globe,
  Shield,
  Heart,
  Star,
  FileText,
  Download,
  ExternalLink
} from 'lucide-react'

const IncomingStudents = () => {
  const preArrivalChecklist = [
    { item: "Complete ASU application and receive admission", completed: true },
    { item: "Apply for F-1 student visa", completed: true },
    { item: "Book flight tickets to Phoenix", completed: false },
    { item: "Arrange temporary accommodation", completed: false },
    { item: "Complete ASU orientation requirements", completed: false },
    { item: "Set up ASU email and MyASU account", completed: false },
    { item: "Register for classes", completed: false },
    { item: "Join ISA WhatsApp groups", completed: false }
  ]

  const essentialResources = [
    {
      icon: Home,
      title: "Housing Information",
      description: "Find on-campus and off-campus housing options, roommates, and accommodation tips.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      items: [
        "On-campus housing applications",
        "Off-campus housing database",
        "Roommate matching service",
        "Housing cost breakdown",
        "Neighborhood guides"
      ],
      link: "/housing"
    },
    {
      icon: BookOpen,
      title: "Academic Support",
      description: "Get help with course selection, academic planning, and study resources.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      items: [
        "Course registration guidance",
        "Academic advisor contacts",
        "Study group connections",
        "Tutoring services",
        "Library resources"
      ],
      link: "https://tutoring.asu.edu/"
    },
    {
      icon: Users,
      title: "Packing Checklist",
      description: "Essential items you need/should to pack for your journey to ASU from India.",
      color: "from-saffron to-orange",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      items: [
        "Passport & I-20 documents",
        "Financial documents & cards",
        "Summer & winter clothing",
        "Spices and kitchen essentials",
        "Medicines & emergency contacts"
      ],
      link: "/packing-checklist"
    },
    {
      icon: Shield,
      title: "Immigration & Legal",
      description: "Navigate visa requirements, work authorization, and legal compliance to stay in the US.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      items: [
        "F-1 visa maintenance",
        "OPT/CPT applications",
        "Social Security Number",
        "Driver's license process",
        "Tax filing assistance"
      ]
    }
  ]

  const importantContacts = [
    {
      name: "ASU International Students Office",
      phone: "+1 (480) 965-9011",
      email: "international@asu.edu",
      description: "Primary contact for visa and immigration matters"
    },
    {
      name: "ISA Executive Board",
      phone: "+1 (480) 123-4567",
      email: "executive@isa-asu.com",
      description: "Student leadership for community support"
    },
    {
      name: "ASU Housing Services",
      phone: "+1 (480) 965-3515",
      email: "housing@asu.edu",
      description: "On-campus housing and accommodation"
    },
    {
      name: "ASU Academic Advising",
      phone: "+1 (480) 965-6506",
      email: "advising@asu.edu",
      description: "Course planning and academic guidance"
    }
  ]

  const upcomingEvents = [
    {
      title: "New Student Orientation",
      date: "August 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Memorial Union",
      description: "Comprehensive orientation for incoming international students"
    },
    {
      title: "ISA Welcome Mixer",
      date: "August 20, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Student Pavilion",
      description: "Meet your fellow Indian students and ISA members"
    },
    {
      title: "Housing Fair",
      date: "August 25, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Sun Devil Fitness Complex",
      description: "Explore housing options and meet potential roommates"
    }
  ]

  return (
    <section id="incoming" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="indian" className="mb-4">
            <GraduationCap className="w-3 h-3 mr-1" />
            Welcome to ASU
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Incoming Students
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey at Arizona State University starts here. We're here to help you 
            navigate your transition and make ASU feel like home.
          </p>
        </motion.div>

        {/* Pre-Arrival Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="bg-gradient-to-br from-saffron/10 to-orange/10 border-0 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-saffron to-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
                Pre-Arrival Checklist
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Essential tasks to complete before arriving at ASU
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {preArrivalChecklist.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    className={`flex items-center space-x-3 p-3 rounded-lg ${
                      item.completed ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      item.completed ? 'bg-green-500' : 'bg-gray-300'
                    }`}>
                      {item.completed ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className={`font-medium ${
                      item.completed ? 'text-green-800 line-through' : 'text-gray-700'
                    }`}>
                      {item.item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Essential Resources */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Essential Resources</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know to get started at ASU and thrive in our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {essentialResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
              >
                {resource.link ? (
                  resource.link.startsWith('http') ? (
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      <Card className={`h-full hover:shadow-xl transition-all duration-300 ${resource.bgColor} border-0 group cursor-pointer`}>
                        <CardHeader className="text-center">
                          <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                            <resource.icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-saffron transition-colors">
                            {resource.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            {resource.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {resource.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-saffron rounded-full" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <Button variant="indian" size="sm" className="w-full mt-4 group-hover:scale-105 transition-transform">
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    </a>
                  ) : (
                    <Link to={resource.link}>
                      <Card className={`h-full hover:shadow-xl transition-all duration-300 ${resource.bgColor} border-0 group cursor-pointer`}>
                        <CardHeader className="text-center">
                          <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                            <resource.icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-saffron transition-colors">
                            {resource.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            {resource.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {resource.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-saffron rounded-full" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <Button variant="indian" size="sm" className="w-full mt-4 group-hover:scale-105 transition-transform">
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                ) : (
                  <Card className={`h-full hover:shadow-xl transition-all duration-300 ${resource.bgColor} border-0 group cursor-pointer`}>
                    <CardHeader className="text-center">
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                        <resource.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-saffron transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {resource.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-saffron rounded-full" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="indian" size="sm" className="w-full mt-4 group-hover:scale-105 transition-transform">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Important Contacts</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key people and offices you should know about for your ASU journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {importantContacts.map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-800 mb-2">
                      {contact.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {contact.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-saffron" />
                      <a href={`tel:${contact.phone}`} className="text-gray-700 hover:text-saffron transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-saffron" />
                      <a href={`mailto:${contact.email}`} className="text-gray-700 hover:text-saffron transition-colors">
                        {contact.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Events</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss these important events for incoming students.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + (index * 0.2) }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="indian" className="text-xs">
                        New Student
                      </Badge>
                      <Calendar className="w-4 h-4 text-saffron" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-800">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-saffron" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-4 h-4 text-saffron" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-saffron" />
                      <span>{event.location}</span>
                    </div>
                    <Button variant="indian" size="sm" className="w-full">
                      RSVP Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center bg-gradient-to-r from-saffron/10 via-orange/10 to-green/10 rounded-3xl p-12"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-saffron to-orange rounded-full mx-auto mb-6 flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Start Your ASU Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Join our community of Indian students and make the most of your time at ASU. 
              We're here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="indian" size="lg" className="group">
                Join ISA Community
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="indianOutline" size="lg">
                Download Student Guide
                <Download className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IncomingStudents
