import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Calendar, MapPin, Clock, Users, Star, Music, Palette, Sparkles } from 'lucide-react'

const Events = () => {
  const upcomingEvents = [
    {
      title: "Jashn: Indian Republic Day",
      date: "January 26th, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Memorial Union, ASU",
      description: "Celebrate India's Republic Day with cultural performances, traditional food, and patriotic songs.",
      image: "🇮🇳",
      category: "Cultural",
      icon: Star,
      color: "from-saffron to-orange",
      bgColor: "bg-gradient-to-br from-saffron/10 to-orange/10"
    },
    {
      title: "Bollywood Night",
      date: "February 07, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "Student Pavilion, ASU",
      description: "Dance the night away to the latest Bollywood hits and classic favorites with our DJ.",
      image: "🎵",
      category: "Entertainment",
      icon: Music,
      color: "from-pink to-purple",
      bgColor: "bg-gradient-to-br from-pink/10 to-purple/10"
    },
    {
      title: "Holi 2025",
      date: "Dates announced soon",
      time: "TBA",
      location: "TBA",
      description: "Join us for the festival of colors! Experience the joy and vibrancy of Holi with colors, music, and traditional sweets.",
      image: "🎨",
      category: "Festival",
      icon: Palette,
      color: "from-green to-emerald",
      bgColor: "bg-gradient-to-br from-green/10 to-emerald/10"
    }
  ]

  const eventCategories = [
    { name: "Cultural", icon: Star, color: "text-saffron", bg: "bg-saffron/10" },
    { name: "Entertainment", icon: Music, color: "text-pink", bg: "bg-pink/10" },
    { name: "Festival", icon: Palette, color: "text-green", bg: "bg-green/10" },
    { name: "Educational", icon: Users, color: "text-blue", bg: "bg-blue/10" }
  ]

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-orange-50 via-white to-green-50">
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
            <Calendar className="w-3 h-3 mr-1" />
            Events
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for exciting cultural celebrations, educational workshops, and social gatherings 
            that bring our community together.
          </p>
        </motion.div>

        {/* Event Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {eventCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full ${category.bg} ${category.color} font-medium cursor-pointer hover:scale-105 transition-transform`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full hover:shadow-2xl transition-all duration-300 ${event.bgColor} border-0 group cursor-pointer`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center`}>
                      <event.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="indian" className="text-xs">
                      {event.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-800 mb-2 group-hover:text-saffron transition-colors">
                    {event.title}
                  </CardTitle>
                  
                  <div className="text-4xl mb-4">{event.image}</div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {event.description}
                  </CardDescription>
                  
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
                  
                  <Button variant="indian" size="sm" className="w-full group-hover:scale-105 transition-transform">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-saffron/10 via-orange/10 to-green/10 rounded-3xl p-12"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-saffron to-orange rounded-full mx-auto mb-6 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Don't Miss Out on the Fun!
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Stay updated with all our events and activities. Join our community and be part of 
              something amazing at ASU.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="indian" size="lg">
                View All Events
              </Button>
              <Button variant="indianOutline" size="lg">
                Join Our Newsletter
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Events
