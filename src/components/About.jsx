import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Users, Heart, Target, Eye, Star, Globe, BookOpen, Handshake } from 'lucide-react'

const About = () => {
  const aboutCards = [
    {
      icon: Globe,
      title: "A Cultural Association",
      description: "ISA represents the culture of India and all of its diversity, acting as a venue for students to embrace their culture in a land away from it.",
      color: "from-saffron to-orange",
      bgColor: "bg-gradient-to-br from-saffron/10 to-orange/10"
    },
    {
      icon: Users,
      title: "A Student Club",
      description: "We are primarily a student club, working to ensure all students have fun, inclusivity and entertainment in all our events.",
      color: "from-green to-emerald",
      bgColor: "bg-gradient-to-br from-green/10 to-emerald/10"
    },
    {
      icon: Heart,
      title: "A Service Organisation",
      description: "We serve the Indian students to make them feel at home and also aid them in any queries/problem they have.",
      color: "from-orange to-red",
      bgColor: "bg-gradient-to-br from-orange/10 to-red/10"
    }
  ]

  const missionVision = [
    {
      icon: Target,
      title: "Mission",
      description: "The Indian Students' Association aims to provide guidance and assistance to fellow Indian students at ASU. With an objective of promoting service and leadership opportunities, ISA aims to be students' link to ASU for putting forward any educational and social issue that a student might face.",
      color: "text-saffron",
      bgColor: "bg-gradient-to-br from-saffron/5 to-orange/5"
    },
    {
      icon: Eye,
      title: "Vision",
      description: "The Indian Students' Association (ISA) is a non-profit and culturally diverse association at Arizona State University (ASU). ISA hopes to keep helping the Indian Student community during their journey at Arizona State University amidst a fun environment filled with cultural and recreational activities.",
      color: "text-green",
      bgColor: "bg-gradient-to-br from-green/5 to-emerald/5"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        {/* Who We Are Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A vibrant community dedicated to celebrating Indian culture, fostering connections, 
            and supporting students throughout their journey at ASU.
          </p>
        </motion.div>

        {/* About Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full hover:shadow-xl transition-all duration-300 ${card.bgColor} border-0`}>
                <CardHeader className="text-center">
                 
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12">
          {missionVision.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${item.bgColor} border-0 shadow-lg`}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    
                    <CardTitle className={`text-3xl font-bold ${item.color}`}>
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default About
