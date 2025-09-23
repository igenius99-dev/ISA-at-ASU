import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { ArrowRight, Star, Users, Calendar, Heart } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 indian-pattern opacity-5"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-saffron/20 rounded-full blur-xl float-animation"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-green/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-orange/20 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">Indian Students</span>
                <br />
                <span className="text-gray-800">Association</span>
                <br />
                <span className="text-3xl lg:text-4xl text-gray-600">at Arizona State University</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Join our vibrant community celebrating Indian culture, fostering connections, 
                and creating unforgettable memories at ASU. Together, we build bridges between 
                cultures while staying rooted in our heritage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="indian" size="xl" className="group">
                Become a Member
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="indianOutline" size="xl">
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-saffron">1000+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green">15+</div>
                <div className="text-sm text-gray-600">Events Annually</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange">10+</div>
                <div className="text-sm text-gray-600">Years Strong</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              {/* Indian Flag Colors */}
              <div className="absolute -top-4 left-8 right-8 h-2 bg-gradient-to-r from-saffron via-white to-green rounded-full"></div>
              
              <div className="space-y-6">
                <div className="text-center">
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Cultural Heritage</h3>
                  <p className="text-gray-600">Celebrating India's rich traditions and diversity</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-saffron/10 to-orange/10 rounded-xl p-4 text-center">
                    <Users className="w-8 h-8 text-saffron mx-auto mb-2" />
                    <div className="text-lg font-semibold text-gray-800">Community</div>
                    <div className="text-sm text-gray-600">Strong bonds</div>
                  </div>
                  <div className="bg-gradient-to-br from-green/10 to-emerald/10 rounded-xl p-4 text-center">
                    <Calendar className="w-8 h-8 text-green mx-auto mb-2" />
                    <div className="text-lg font-semibold text-gray-800">Events</div>
                    <div className="text-sm text-gray-600">Year-round fun</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-saffron/20 rounded-full blur-sm"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-green/20 rounded-full blur-sm"
            >            </motion.div>
          </motion.div>
        </div>
      </div>


      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-saffron rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-saffron rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
