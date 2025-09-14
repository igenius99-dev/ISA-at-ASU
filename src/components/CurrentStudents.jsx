import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { 
  Users, 
  Calendar, 
  BookOpen, 
  Briefcase, 
  Heart, 
  Star, 
  MessageCircle, 
  FileText,
  Download,
  Coffee,
  GraduationCap,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const CurrentStudents = () => {
  const quickActions = [
    {
      icon: Calendar,
      title: "Upcoming Events",
      description: "View and RSVP to ISA events and activities",
      color: "from-saffron to-orange",
      action: "View Events"
    },
    {
      icon: MessageCircle,
      title: "Join Groups",
      description: "Connect with your batch and course groups",
      color: "from-green-500 to-green-600",
      action: "Get Invite Links"
    },
    {
      icon: FileText,
      title: "Resources",
      description: "Access study materials and guides",
      color: "from-blue-500 to-blue-600",
      action: "Browse Resources"
    },
    {
      icon: Users,
      title: "Find Mentors",
      description: "Connect with senior students for guidance",
      color: "from-purple-500 to-purple-600",
      action: "Find a Mentor"
    }
  ]

  const upcomingEvents = [
    {
      title: "Diwali Celebration 2024",
      date: "November 12, 2024",
      time: "6:00 PM - 11:00 PM",
      location: "Student Pavilion",
      description: "Join us for the biggest Diwali celebration at ASU with traditional food, performances, and fireworks.",
      category: "Cultural",
      attendees: "500+",
      icon: Star,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Tech Talk: AI in Healthcare",
      date: "November 18, 2024",
      time: "4:00 PM - 6:00 PM",
      location: "Engineering Center",
      description: "Industry expert discusses the future of AI in healthcare and career opportunities.",
      category: "Professional",
      attendees: "150+",
      icon: GraduationCap,
      color: "from-blue-500 to-purple-500"
    }
  ]

  const resources = [
    {
      icon: BookOpen,
      title: "Academic Support",
      items: [
        "Course registration guides",
        "Tutoring services",
        "Study abroad programs"
      ]
    },
    {
      icon: Briefcase,
      title: "Career Development",
      items: [
        "Resume templates",
        "Interview preparation",
        "Job opportunities"
      ]
    },
    {
      icon: Heart,
      title: "Wellness & Support",
      items: [
        "Mental health resources",
        "Counseling services",
        "Support groups"
      ]
    }
  ]

  return (
    <section id="current" className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="indian" className="mb-4">
            <Users className="w-3 h-3 mr-1" />
            Current Students
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Welcome Back, Sun Devils!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your ISA community is here to support your academic journey and cultural connections at ASU.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Quick Actions</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to stay connected with the ISA community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 group cursor-pointer">
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-saffron transition-colors">
                      {action.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {action.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="indian" size="sm" className="w-full group-hover:scale-105 transition-transform">
                      {action.action}
                    </Button>
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Events</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss out on these exciting events and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center`}>
                        <event.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <Badge variant="indian" className="mb-2">
                          {event.category}
                        </Badge>
                        <div className="text-sm text-gray-500">
                          {event.attendees} attending
                        </div>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-800 mb-2 group-hover:text-saffron transition-colors">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-saffron" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Coffee className="w-4 h-4 text-saffron" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-saffron" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <Button variant="indian" size="sm" className="w-full group-hover:scale-105 transition-transform">
                      RSVP Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Resources & Support</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access helpful resources to support your academic and personal growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 group cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-saffron to-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-saffron transition-colors">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3">
                      {resource.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2 text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="indian" size="sm" className="w-full mt-6 group-hover:scale-105 transition-transform">
                      Learn More
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-saffron/10 via-orange/10 to-green/10 rounded-3xl p-12"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-saffron to-orange rounded-full mx-auto mb-6 flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Need Help or Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our ISA community is here to support you. Reach out to us for any assistance 
              or questions you might have about your ASU journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="indian" size="lg">
                Contact Us
              </Button>
              <Button variant="indianOutline" size="lg">
                Join Our Discord
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CurrentStudents