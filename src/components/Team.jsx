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
      name: "Pratham Hegde",
      position: "President",
      major: "Cybersecurity",
      year: "Senior",
      image: "👨‍💼",
      bio: "Leading ISA with passion and dedication. Focused on creating an inclusive community for all Indian students at ASU.",
      responsibilities: ["Overall leadership", "Strategic planning", "External relations"],
      email: "president@isa-asu.com",
      linkedin: "pratham-hegde-asu",
      instagram: "pratham_hegde_asu"
    },
    {
      name: "Asmi Kachare",
      position: "Vice President",
      major: "Computer Science",
      year: "Senior",
      image: "👩‍💼",
      bio: "Supporting ISA's mission through event coordination and member engagement. Passionate about cultural exchange.",
      responsibilities: ["Event coordination", "Member engagement", "Community outreach"],
      email: "vicepresident@isa-asu.com",
      linkedin: "asmi-kachare-asu",
      instagram: "asmi_kachare_asu"
    },
    {
      name: "Vaishnavi Mahajan",
      position: "Treasurer",
      major: "Computer Science",
      year: "Senior",
      image: "👩‍💻",
      bio: "Managing ISA's finances and budget planning. Ensuring financial transparency and responsible spending of Money.",
      responsibilities: ["Budget management", "Financial planning", "Expense tracking"],
      email: "treasurer@isa-asu.com",
      linkedin: "vaishnavi-mahajan-asu",
      instagram: "vaishnavi_mahajan_asu"
    },
    {
      name: "Deepak Akundi",
      position: "Secretary",
      major: "Chemical Eng.",
      year: "PhD",
      image: "👨‍🔬",
      bio: "Keeping ISA organized and connected. Managing communications and maintaining records with love.",
      responsibilities: ["Meeting minutes", "Communication", "Record keeping"],
      email: "secretary@isa-asu.com",
      linkedin: "deepak-akundi-asu",
      instagram: "deepak_akundi_asu"
    },
    {
      name: "Sankalp Srinath",
      position: "Joint Secretary",
      major: "Robotics",
      year: "Graduate",
      image: "👨",
      bio: "Supporting the Secretary in maintaining ISA's organization and communication systems with love.",
      responsibilities: ["Assistant to Secretary", "Communication support", "Record keeping"],
      email: "jointsecretary@isa-asu.com",
      linkedin: "sankalp-srinath-asu",
      instagram: "sankalp_srinath_asu"
    }
  ]

  const committeeHeads = [
    {
      name: "Prince Sathwara",
      position: "Director of Administration",
      major: "Construction Management",
      year: "Senior",
      bio: "Oversees administrative processes and organizational efficiency.",
      responsibilities: ["Operations", "Documentation", "Internal coordination"],
      email: "admin@isa-asu.com"
    },
    {
      name: "Vatsal Rajeshbhai Kakadiya",
      position: "Director of Events",
      major: "CS and Eng. Management",
      year: "Junior",
      bio: "Leads planning and execution of ISA events and cultural programs.",
      responsibilities: ["Event planning", "Logistics", "Vendor coordination"],
      email: "events@isa-asu.com"
    },
    {
      name: "Manya Shukla",
      position: "Director of Finance",
      major: "Computer Science",
      year: "Senior",
      bio: "Manages budgeting, reimbursements, and financial compliance.",
      responsibilities: ["Budgeting", "Expense tracking", "Sponsorships"],
      email: "finance@isa-asu.com"
    },
    {
      name: "Deepikaa Anjan Kumar",
      position: "Director of Human Resources",
      major: "Robotics",
      year: "Graduate",
      bio: "Focuses on recruitment, onboarding, and member engagement.",
      responsibilities: ["Recruitment", "Onboarding", "Member relations"],
      email: "hr@isa-asu.com"
    },
    {
      name: "Nysa Jain",
      position: "Director of Marketing",
      major: "Computer Science",
      year: "Senior",
      bio: "Drives branding, social presence, and promotional campaigns.",
      responsibilities: ["Branding", "Content", "Social media"],
      email: "marketing@isa-asu.com"
    },
    {
      name: "Tushar Sachan",
      position: "Director of IT",
      major: "Computer Science",
      year: "Senior",
      bio: "Owns the website, tooling, and technical infrastructure.",
      responsibilities: ["Website", "Automations", "Tech support"],
      email: "tsachan@asu.edu"
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
    <section id="team" className="pt-20 pb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of student leaders works tirelessly to create an 
            inclusive, vibrant, and supportive community for all Indian students at ASU.
          </p>
        </motion.div>

        {/* Team Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16"
        >
          <div className="relative overflow-hidden rounded-xl mx-auto max-w-5xl">
            <img
              src="/team.JPG"
              alt="ISA Team"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
              <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/90 backdrop-blur text-gray-800 text-sm md:text-base font-semibold shadow">
                Our Team • ISA at ASU
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
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

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch">
            {executiveBoard.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer text-center">
                  <CardHeader className={`text-center flex flex-col items-center ${member.name === 'Deepak Akundi' ? 'min-h-[180px]' : 'min-h-[160px]'} py-4`}> 
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
                  <CardContent className="space-y-3 flex-1 flex flex-col">
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

                    <div className="flex justify-center space-x-2 pt-2 mt-auto">
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
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center flex-shrink-0">
                        {member.name === 'Nysa Jain' ? (
                          <img src="/nysa.jpeg" alt="Nysa Jain" className="w-full h-full object-cover" />
                        ) : member.name === 'Tushar Sachan' ? (
                          <img src="/tushar.jpg" alt="Tushar Sachan" className="w-full h-full object-cover" />
                        ) : member.name === 'Deepikaa Anjan Kumar' ? (
                          <img src="/deepika.jpg" alt="Deepikaa Anjan Kumar" className="w-full h-full object-cover" />
                        ): member.name === 'Manya Shukla' ? (
                          <img src="/manya.jpeg" alt="Manya Shukla" className="w-full h-full object-cover" />
                        ): member.name === 'Vatsal Rajeshbhai Kakadiya' ? (
                          <img src="/vatsal.jpeg" alt="Vatsal Rajeshbhai Kakadiya" className="w-full h-full object-cover" />
                        ): member.name === 'Prince Sathwara' ? (
                          <img src="/prince.jpg" alt="Prince Sathwara" className="w-full h-full object-cover" />
                        ): member.name === 'Sankalp Srinath' ? (
                          <img src="/sankalp.jpg" alt="Sankalp Srinath" className="w-full h-full object-cover" />
                        ): member.name === 'Deepak Akundi' ? (
                          <img src="/deepak.jpg" alt="Deepak Akundi" className="w-full h-full object-cover" />
                        ): member.name === 'Vaishnavi Mahajan' ? (
                          <img src="/vaishnavi.jpg" alt="Vaishnavi Mahajan" className="w-full h-full object-cover" />
                        ): member.name === 'Asmi Kachare' ? (
                          <img src="/asmi.jpg" alt="Asmi Kachare" className="w-full h-full object-cover" />
                        ): (
                          <span className="text-4xl">{member.image}</span>
                        )}
                      </div>
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

