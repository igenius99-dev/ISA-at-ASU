import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Users, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 indian-pattern opacity-5"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-saffron/20 rounded-full blur-xl float-animation"></div>
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-green/20 rounded-full blur-xl float-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-16 h-16 bg-orange/20 rounded-full blur-xl float-animation"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
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
                <span className="text-3xl lg:text-4xl text-gray-600">
                  at Arizona State University
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Join our vibrant community celebrating Indian culture, fostering
                connections, and creating unforgettable memories at ASU.
                Together, we build bridges between cultures while staying rooted
                in our heritage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild variant="indian" size="xl" className="group">
                <a
                  href="https://sundevilcentral.eoss.asu.edu/isaasu/rsvp_boot?id=391371"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RSVP for Holi
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            ></motion.div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="flex justify-center">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border-white/20 w-fit">
                <img
                  src="/holi.png"
                  alt="Holi poster"
                  className="w-[500px] h-auto rounded-2xl"
                />
                <button
                  className="absolute inset-0 cursor-pointer bg-transparent"
                  onClick={(e) =>
                    window.open(
                      "https://sundevilcentral.eoss.asu.edu/isaasu/rsvp_boot?id=391371",
                      "_blank",
                    )
                  }
                ></button>
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
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-green/20 rounded-full blur-sm"
            >
              {" "}
            </motion.div>
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
  );
};

export default Hero;
