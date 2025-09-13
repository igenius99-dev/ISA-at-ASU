import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { 
  Home, 
  Users, 
  GraduationCap, 
  ExternalLink, 
  CheckCircle, 
  Star,
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Building,
  Key,
  Shield,
  Heart,
  Award,
  Calendar,
  Download,
  MessageCircle,
  BookOpen,
  Briefcase
} from 'lucide-react'

const Housing = () => {
  const housingOptions = [
    {
      type: "Undergraduate Students",
      description: "Must stay on campus for the first year",
      details: "The first year you will live with other students who share similar academic interests in your Residential College on the ASU campus of your major. You will be invited to participate in activities and events with your peers and faculty from your college, as well as make friends with others in your residential community.",
      additionalInfo: "Students who are continuing their studies at ASU beyond the first year also live on campus. There is housing available at all locations beyond your first year.",
      requirements: ["First year on-campus requirement", "Residential College assignment", "Academic interest-based housing"],
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      type: "Graduate Students",
      description: "Can choose between numerous on campus and off campus choices",
      details: "Graduate students have the flexibility to choose from various housing options both on and off campus, allowing them to find accommodations that best suit their lifestyle and budget.",
      additionalInfo: "Off-campus options provide more independence and often better value for money, while on-campus options offer convenience and community.",
      requirements: ["Flexible housing options", "On-campus and off-campus choices", "Independent living arrangements"],
      icon: Users,
      color: "from-green-500 to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100"
    }
  ]

  const uniusFeatures = [
    {
      title: "Comprehensive Listings",
      description: "From subleases to furnished apartments, Unius is the go-to place to find the perfect living space.",
      icon: Building,
      color: "from-saffron to-orange"
    },
    {
      title: "Student-Driven",
      description: "Existing students can add listings and postings, ensuring the most relevant and up-to-date options.",
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    {
      title: "User-Friendly",
      description: "Our intuitive interface makes searching and listing easy and efficient.",
      icon: Globe,
      color: "from-blue-500 to-purple-500"
    }
  ]

  const popularOffCampusOptions = [
    {
      name: "Paseo on University",
      type: "Apartment Complex",
      features: ["Furnished units", "Pool & gym", "Near campus"],
      distance: "0.5 miles from ASU",
      priceRange: "$800-1200/month"
    },
    {
      name: "The Frederick",
      type: "Apartment Complex",
      features: ["Modern amenities", "Study rooms", "Pet-friendly"],
      distance: "0.3 miles from ASU",
      priceRange: "$900-1300/month"
    },
    {
      name: "Hyve",
      type: "Student Housing",
      features: ["All-inclusive", "Social events", "Furnished"],
      distance: "0.4 miles from ASU",
      priceRange: "$700-1100/month"
    },
    {
      name: "Apollo",
      type: "Apartment Complex",
      features: ["Rooftop pool", "Fitness center", "Study spaces"],
      distance: "0.6 miles from ASU",
      priceRange: "$850-1250/month"
    },
    {
      name: "Canvas",
      type: "Student Housing",
      features: ["Furnished units", "Community events", "Near campus"],
      distance: "0.2 miles from ASU",
      priceRange: "$750-1150/month"
    },
    {
      name: "Desert Palm",
      type: "Apartment Complex",
      features: ["Pool & spa", "Fitness center", "Pet-friendly"],
      distance: "0.8 miles from ASU",
      priceRange: "$800-1200/month"
    },
    {
      name: "Murietta",
      type: "Apartment Complex",
      features: ["Modern design", "Study rooms", "Near campus"],
      distance: "0.7 miles from ASU",
      priceRange: "$850-1250/month"
    },
    {
      name: "Agave",
      type: "Apartment Complex",
      features: ["Furnished options", "Pool & gym", "Social spaces"],
      distance: "0.9 miles from ASU",
      priceRange: "$750-1150/month"
    },
    {
      name: "Volta",
      type: "Student Housing",
      features: ["All-inclusive", "Events", "Furnished"],
      distance: "0.5 miles from ASU",
      priceRange: "$700-1100/month"
    }
  ]

  const housingResources = [
    {
      title: "ASU Housing Website",
      description: "Official ASU housing information and applications",
      url: "https://housing.asu.edu/",
      icon: Globe,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Housing Contact",
      description: "Direct contact for accommodations, exceptions, or general housing questions",
      phone: "+1 (480) 965-3515",
      email: "housing@asu.edu",
      icon: Phone,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Unius App",
      description: "Student-driven platform for off-campus housing",
      url: "https://unius.com",
      icon: Building,
      color: "from-saffron to-orange"
    },
    {
      title: "ISA Housing Support",
      description: "Get help from fellow Indian students with housing decisions",
      email: "housing@isa-asu.com",
      icon: Heart,
      color: "from-purple-500 to-pink-500"
    }
  ]

  const housingTips = [
    {
      tip: "Start Early",
      description: "Begin your housing search at least 3-4 months before your move-in date",
      icon: Calendar,
      color: "from-red-500 to-pink-500"
    },
    {
      tip: "Consider Location",
      description: "Factor in distance to campus, public transportation, and nearby amenities",
      icon: MapPin,
      color: "from-blue-500 to-purple-500"
    },
    {
      tip: "Budget Wisely",
      description: "Include utilities, internet, and other expenses in your housing budget",
      icon: Briefcase,
      color: "from-green-500 to-teal-500"
    },
    {
      tip: "Read Reviews",
      description: "Check online reviews and talk to current residents before signing",
      icon: Star,
      color: "from-yellow-500 to-orange-500"
    },
    {
      tip: "Roommate Matching",
      description: "Use ISA's roommate matching service to find compatible roommates",
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      tip: "Visit in Person",
      description: "If possible, visit the property before signing a lease",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section id="housing" className="py-20 bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="indian" className="mb-4">
            <Home className="w-3 h-3 mr-1" />
            Housing Information
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            ASU Housing Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ASU has numerous accommodation options in and around the campus. 
            Find the perfect place to call home during your time at Arizona State University.
          </p>
        </motion.div>

        {/* Housing Options */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {housingOptions.map((option, index) => (
              <motion.div
                key={option.type}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
              >
                <Card className={`h-full hover:shadow-xl transition-all duration-300 ${option.bgColor} border-0`}>
                  <CardHeader>
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${option.color} flex items-center justify-center`}>
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                          {option.type}
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-600">
                          {option.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      {option.details}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {option.additionalInfo}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {option.requirements.map((requirement, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-saffron" />
                            <span>{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Unius Partnership */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <Card className="bg-gradient-to-br from-saffron/10 to-orange/10 border-0 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-saffron to-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
                Unius - College Housing
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                ISA has partnered with Unius, an application to help students find off-campus accommodations near ASU with ease.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {uniusFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    className="text-center"
                  >
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <Button variant="indian" size="lg" className="group">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Visit Unius Platform
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Popular Off-Campus Options */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Popular Off-Campus Options</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Some off-campus choices frequented by Indian students at ASU.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularOffCampusOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-saffron transition-colors">
                        {option.name}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {option.type}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-600">
                      {option.distance} • {option.priceRange}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 text-sm">Features:</h4>
                      <ul className="space-y-1">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-saffron rounded-full" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-saffron group-hover:text-white transition-colors">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Housing Resources */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Housing Resources</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential resources and contacts for your housing search.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {housingResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200 text-center group cursor-pointer">
                  <CardHeader>
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${resource.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-saffron transition-colors">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {resource.url ? (
                      <Button variant="indian" size="sm" className="w-full" asChild>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit
                        </a>
                      </Button>
                    ) : (
                      <div className="space-y-2 text-sm">
                        {resource.phone && (
                          <div className="flex items-center justify-center space-x-2 text-gray-600">
                            <Phone className="w-4 h-4 text-saffron" />
                            <a href={`tel:${resource.phone}`} className="hover:text-saffron transition-colors">
                              {resource.phone}
                            </a>
                          </div>
                        )}
                        {resource.email && (
                          <div className="flex items-center justify-center space-x-2 text-gray-600">
                            <Mail className="w-4 h-4 text-saffron" />
                            <a href={`mailto:${resource.email}`} className="hover:text-saffron transition-colors">
                              Email
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Housing Tips */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Housing Tips</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert advice to help you find the perfect housing option.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {housingTips.map((tip, index) => (
              <motion.div
                key={tip.tip}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${tip.color} flex items-center justify-center`}>
                        <tip.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-gray-800">
                          {tip.tip}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {tip.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
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
              <Home className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Need Help Finding Housing?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our ISA community is here to help you find the perfect place to live. 
              Connect with fellow students and get personalized housing advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="indian" size="lg" className="group">
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Housing WhatsApp Group
              </Button>
              <Button variant="indianOutline" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Contact Housing Support
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Housing
