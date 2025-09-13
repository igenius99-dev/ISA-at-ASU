import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { 
  Users, 
  Crown, 
  Mail, 
  Linkedin, 
  Instagram, 
  MessageCircle,
  Award,
  Star,
  Heart,
  Target,
  Zap,
  Globe,
  Calendar,
  BookOpen,
  Briefcase,
  GraduationCap,
  ArrowRight,
  ExternalLink,
  Phone
} from 'lucide-react'

const Team = () => {
  const executiveBoard = [
    {
      name: "Priya Sharma",
      position: "President",
      major: "Computer Science",
      year: "Senior",
      image: "👩‍💼",
      bio: "Leading ISA with passion and dedication. Focused on creating an inclusive community for all Indian students at ASU.",
      responsibilities: ["Overall leadership", "Strategic planning", "External relations"],
      email: "president@isa-asu.com",
      linkedin: "priya-sharma-asu",
      instagram: "priya_sharma_asu"
    },
    {
      name: "Arjun Patel",
      position: "Vice President",
      major: "Business Administration",
      year: "Senior",
      image: "👨‍💼",
      bio: "Supporting ISA's mission through event coordination and member engagement. Passionate about cultural exchange.",
      responsibilities: ["Event coordination", "Member engagement", "Community outreach"],
      email: "vicepresident@isa-asu.com",
      linkedin: "arjun-patel-asu",
      instagram: "arjun_patel_asu"
    },
    {
      name: "Sneha Reddy",
      position: "Treasurer",
      major: "Finance",
      year: "Junior",
      image: "👩‍💻",
      bio: "Managing ISA's finances and budget planning. Ensuring financial transparency and responsible spending.",
      responsibilities: ["Budget management", "Financial planning", "Expense tracking"],
      email: "treasurer@isa-asu.com",
      linkedin: "sneha-reddy-asu",
      instagram: "sneha_reddy_asu"
    },
    {
      name: "Rohan Kumar",
      position: "Secretary",
      major: "Engineering",
      year: "Junior",
      image: "👨‍🔬",
      bio: "Keeping ISA organized and connected. Managing communications and maintaining records.",
      responsibilities: ["Meeting minutes", "Communication", "Record keeping"],
      email: "secretary@isa-asu.com",
      linkedin: "rohan-kumar-asu",
      instagram: "rohan_kumar_asu"
    }
  ]

  const committeeHeads = [
    {
      name: "Ananya Singh",
      position: "Cultural Events Director",
      major: "Theater & Performance",
      year: "Sophomore",
      image: "👩‍🎭",
      bio: "Bringing Indian culture to life through vibrant events and performances.",
      responsibilities: ["Diwali celebration", "Holi festival", "Cultural shows"],
      email: "cultural@isa-asu.com"
    },
    {
      name: "Vikram Joshi",
      position: "Academic Affairs Director",
      major: "Pre-Med",
      year: "Senior",
      image: "👨‍⚕️",
      bio: "Supporting students' academic success through tutoring and study groups.",
      responsibilities: ["Study groups", "Academic workshops", "Mentorship program"],
      email: "academic@isa-asu.com"
    },
    {
      name: "Kavya Nair",
      position: "Social Media Manager",
      major: "Digital Media",
      year: "Sophomore",
      image: "👩‍💻",
      bio: "Creating engaging content and managing ISA's online presence.",
      responsibilities: ["Social media", "Content creation", "Digital marketing"],
      email: "socialmedia@isa-asu.com"
    },
    {
      name: "Aditya Gupta",
      position: "Sports & Recreation Director",
      major: "Kinesiology",
      year: "Junior",
      image: "👨‍🏃",
      bio: "Organizing sports events and promoting healthy lifestyle among members.",
      responsibilities: ["Cricket tournaments", "Fitness events", "Recreation activities"],
      email: "sports@isa-asu.com"
    },
    {
      name: "Meera Iyer",
      position: "Community Service Director",
      major: "Social Work",
      year: "Senior",
      image: "👩‍🤝",
      bio: "Leading community service initiatives and volunteer programs.",
      responsibilities: ["Volunteer programs", "Community outreach", "Service projects"],
      email: "community@isa-asu.com"
    },
    {
      name: "Rajesh Verma",
      position: "Technology Director",
      major: "Computer Science",
      year: "Junior",
      image: "👨‍💻",
      bio: "Managing ISA's technology infrastructure and digital platforms.",
      responsibilities: ["Website maintenance", "Tech support", "Digital tools"],
      email: "technology@isa-asu.com"
    }
  ]

  const achievements = [
    {
      title: "Best Cultural Organization 2024",
      description: "Recognized by ASU Student Government for outstanding cultural programming",
      icon: Award,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "500+ Active Members",
      description: "Largest Indian student organization at Arizona State University",
      icon: Users,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "50+ Events Annually",
      description: "Hosting diverse cultural, academic, and social events throughout the year",
      icon: Calendar,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Community Impact Award",
      description: "Recognized for significant contributions to the local Indian community",
      icon: Heart,
      color: "from-red-500 to-pink-500"
    }
  ]

  const joinTeamReasons = [
    {
      icon: Target,
      title: "Leadership Development",
      description: "Develop essential leadership skills and gain valuable experience managing teams and projects."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Make a positive impact on the Indian student community and help create memorable experiences."
    },
    {
      icon: Briefcase,
      title: "Professional Growth",
      description: "Build your resume with leadership experience and develop skills valued by employers."
    },
    {
      icon: Heart,
      title: "Cultural Connection",
      description: "Deepen your connection to Indian culture while sharing it with others at ASU."
    }
  ]

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="indian" className="mb-4">
            <Crown className="w-3 h-3 mr-1" />
            Our Team
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of student leaders works tirelessly to create an 
            inclusive, vibrant, and supportive community for all Indian students at ASU.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Achievements</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proud milestones and recognition for our community impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 text-center">
                  <CardHeader>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-800">
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {achievement.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Executive Board */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Executive Board</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core leadership team responsible for ISA's strategic direction and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveBoard.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-4">{member.image}</div>
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-saffron transition-colors">
                        {member.name}
                      </CardTitle>
                      <Badge variant="indian" className="text-sm">
                        {member.position}
                      </Badge>
                      <div className="text-sm text-gray-600">
                        {member.major} • {member.year}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 text-center">
                      {member.bio}
                    </CardDescription>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 text-sm">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {member.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-saffron rounded-full" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-center space-x-2 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={`mailto:${member.email}`}>
                          <Mail className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={`https://linkedin.com/in/${member.linkedin}`} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={`https://instagram.com/${member.instagram}`} target="_blank" rel="noopener noreferrer">
                          <Instagram className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Committee Heads */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Committee Directors</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our specialized directors who lead specific areas of ISA's activities and programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeHeads.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{member.image}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-saffron transition-colors">
                          {member.name}
                        </CardTitle>
                        <Badge variant="secondary" className="text-xs mt-1">
                          {member.position}
                        </Badge>
                        <div className="text-sm text-gray-600 mt-1">
                          {member.major} • {member.year}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-gray-600 text-sm">
                      {member.bio}
                    </CardDescription>
                    
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-800 text-sm">Focus Areas:</h4>
                      <ul className="space-y-1">
                        {member.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1 h-1 bg-saffron rounded-full" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={`mailto:${member.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to make a difference? Join our leadership team and help shape the future of ISA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {joinTeamReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200 text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-saffron to-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-800">
                      {reason.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {reason.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="indian" size="lg" className="group">
              Apply for Leadership Position
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Contact Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-saffron/10 via-orange/10 to-green/10 rounded-3xl p-12"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-saffron to-orange rounded-full mx-auto mb-6 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Get in Touch with Our Team
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Have questions, suggestions, or want to get involved? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="indian" size="lg" className="group">
                <Mail className="w-5 h-5 mr-2" />
                Contact Executive Board
              </Button>
              <Button variant="indianOutline" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Join WhatsApp Group
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
