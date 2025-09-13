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
  Award,
  TrendingUp,
  Globe,
  FileText,
  Download,
  ExternalLink,
  Coffee,
  GraduationCap,
  Target,
  Zap,
  Shield,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  Camera,
  Music
} from 'lucide-react'

const CurrentStudents = () => {
  const communityFeatures = [
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Connect with senior students and alumni for guidance and support.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      stats: "150+ Active Mentors",
      action: "Find a Mentor"
    },
    {
      icon: Calendar,
      title: "Event Calendar",
      description: "Stay updated with all ISA events, cultural celebrations, and social gatherings.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      stats: "50+ Events Annually",
      action: "View Calendar"
    },
    {
      icon: BookOpen,
      title: "Study Groups",
      description: "Join study groups for your courses and connect with classmates.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      stats: "25+ Active Groups",
      action: "Join Study Group"
    },
    {
      icon: Briefcase,
      title: "Career Support",
      description: "Access job opportunities, resume reviews, and interview preparation.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      stats: "200+ Job Placements",
      action: "Explore Opportunities"
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
      icon: TrendingUp,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Bollywood Dance Workshop",
      date: "November 25, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Sun Devil Fitness Complex",
      description: "Learn Bollywood dance moves from professional instructors. All skill levels welcome.",
      category: "Cultural",
      attendees: "80+",
      icon: Music,
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Networking Mixer",
      date: "December 2, 2024",
      time: "5:30 PM - 8:00 PM",
      location: "Memorial Union",
      description: "Connect with fellow students, alumni, and professionals in your field.",
      category: "Professional",
      attendees: "200+",
      icon: Users,
      color: "from-green-500 to-teal-500"
    }
  ]

  const resources = [
    {
      icon: FileText,
      title: "Academic Resources",
      items: [
        "Course registration guides",
        "Academic calendar",
        "Tutoring services",
        "Library resources",
        "Study abroad programs"
      ]
    },
    {
      icon: Briefcase,
      title: "Career Development",
      items: [
        "Resume templates",
        "Interview preparation",
        "Job search strategies",
        "Internship opportunities",
        "Alumni network"
      ]
    },
    {
      icon: Heart,
      title: "Wellness & Support",
      items: [
        "Mental health resources",
        "Counseling services",
        "Health insurance info",
        "Campus recreation",
        "Support groups"
      ]
    },
    {
      icon: Globe,
      title: "Cultural Integration",
      items: [
        "Cultural events calendar",
        "Language exchange programs",
        "Community service opportunities",
        "Cultural clubs directory",
        "International student services"
      ]
    }
  ]

  const leadershipOpportunities = [
    {
      position: "Executive Board Member",
      description: "Lead ISA initiatives and represent the Indian student community.",
      requirements: "2+ years at ASU, leadership experience",
      timeCommitment: "10-15 hours/week",
      benefits: "Leadership development, networking, resume building"
    },
    {
      position: "Event Coordinator",
      description: "Plan and execute cultural events and social gatherings.",
      requirements: "Creative mindset, organizational skills",
      timeCommitment: "5-8 hours/week",
      benefits: "Event management experience, team collaboration"
    },
    {
      position: "Mentor",
      description: "Guide incoming students and help them adjust to ASU life.",
      requirements: "Sophomore+ standing, good academic record",
      timeCommitment: "3-5 hours/week",
      benefits: "Mentoring skills, community impact"
    },
    {
      position: "Social Media Manager",
      description: "Manage ISA's social media presence and digital marketing.",
      requirements: "Social media savvy, creative content skills",
      timeCommitment: "4-6 hours/week",
      benefits: "Digital marketing experience, portfolio building"
    }
  ]

  const quickActions = [
    {
      icon: Calendar,
      title: "RSVP to Events",
      description: "Sign up for upcoming ISA events and activities",
      color: "from-saffron to-orange",
      action: "View Events"
    },
    {
      icon: MessageCircle,
      title: "Join WhatsApp Groups",
      description: "Connect with your batch and course-specific groups",
      color: "from-green-500 to-green-600",
      action: "Get Invite Links"
    },
    {
      icon: FileText,
      title: "Access Resources",
      description: "Download study materials, templates, and guides",
      color: "from-blue-500 to-blue-600",
      action: "Browse Resources"
    },
    {
      icon: Users,
      title: "Find Study Partners",
      description: "Connect with classmates for group study sessions",
      color: "from-purple-500 to-purple-600",
      action: "Find Partners"
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
            Your ISA community is here to support your academic journey, career growth, 
            and cultural connections. Make the most of your time at ASU.
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
              Everything you need to stay connected and engaged with the ISA community.
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

        {/* Community Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Community Features</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover all the ways you can get involved and make the most of your ISA experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
              >
                <Card className={`h-full hover:shadow-xl transition-all duration-300 ${feature.bgColor} border-0 group cursor-pointer`}>
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-saffron transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                    <Badge variant="secondary" className="mt-2">
                      {feature.stats}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <Button variant="indian" size="sm" className="w-full group-hover:scale-105 transition-transform">
                      {feature.action}
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
          transition={{ duration: 0.8, delay: 0.6 }}
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
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
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
                        <Clock className="w-4 h-4 text-saffron" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-saffron" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="indian" size="sm" className="flex-1 group-hover:scale-105 transition-transform">
                        RSVP Now
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Student Resources</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access all the tools and information you need for academic and personal success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <CardHeader>
                    <div className="w-10 h-10 bg-gradient-to-br from-saffron to-orange rounded-full flex items-center justify-center mb-4">
                      <resource.icon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-800">
                      {resource.title}
                    </CardTitle>
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
                    <Button variant="indian" size="sm" className="w-full mt-4">
                      Access Resources
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Leadership Opportunities</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take on leadership roles and make a positive impact on the ISA community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {leadershipOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.position}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg font-bold text-gray-800">
                        {opportunity.position}
                      </CardTitle>
                      <Badge variant="indian" className="text-xs">
                        Leadership
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-600">
                      {opportunity.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-saffron" />
                        <span><strong>Requirements:</strong> {opportunity.requirements}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4 text-saffron" />
                        <span><strong>Time:</strong> {opportunity.timeCommitment}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Award className="w-4 h-4 text-saffron" />
                        <span><strong>Benefits:</strong> {opportunity.benefits}</span>
                      </div>
                    </div>
                    <Button variant="indian" size="sm" className="w-full">
                      Apply Now
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
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-saffron/10 via-orange/10 to-green/10 rounded-3xl p-12"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-saffron to-orange rounded-full mx-auto mb-6 flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Get More Involved?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Join our leadership team, participate in events, or simply connect with 
              fellow students. Your ISA journey is what you make of it!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="indian" size="lg" className="group">
                Explore Opportunities
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="indianOutline" size="lg">
                Join WhatsApp Groups
                <MessageCircle className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CurrentStudents
