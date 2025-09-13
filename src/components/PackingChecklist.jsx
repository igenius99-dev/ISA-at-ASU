import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { 
  CheckCircle, 
  FileText, 
  CreditCard, 
  Shirt, 
  Utensils, 
  Pill, 
  Home, 
  Plug, 
  Phone, 
  ArrowLeft,
  Download,
  Star,
  AlertCircle,
  CheckSquare,
  Square
} from 'lucide-react'
import { Link } from 'react-router-dom'

const PackingChecklist = () => {
  const checklistCategories = [
    {
      title: "Documents",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      items: [
        { name: "Passport (valid for at least 6 months)", essential: true },
        { name: "I-20 / DS-2019 form", essential: true },
        { name: "Admission letter from ASU", essential: true },
        { name: "Financial documents (bank statements, scholarship letters)", essential: true },
        { name: "Medical prescriptions (with doctor's note)", essential: false },
        { name: "Vaccination documents", essential: true },
        { name: "Academic transcripts (official copies)", essential: false },
        { name: "Birth certificate (certified copy)", essential: false },
        { name: "Driver's license (if you have one)", essential: false }
      ]
    },
    {
      title: "Financial Items",
      icon: CreditCard,
      color: "from-green-500 to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      items: [
        { name: "Credit/Debit cards (notify bank of travel)", essential: true },
        { name: "Local currency (USD) - $200-500 for initial expenses", essential: true },
        { name: "Travel checks (optional but recommended)", essential: false },
        { name: "Bank account details and contact information", essential: true },
        { name: "Emergency contact numbers for financial institutions", essential: true }
      ]
    },
    {
      title: "Clothing",
      icon: Shirt,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      items: [
        { name: "Summer clothing (lightweight, breathable)", essential: true },
        { name: "Winter clothing (jackets, sweaters, warm layers)", essential: true },
        { name: "Traditional wear (optional but recommended)", essential: false },
        { name: "Formal wear (for interviews, presentations)", essential: false },
        { name: "Comfortable shoes (walking, sports, formal)", essential: true },
        { name: "Underwear and socks (enough for 1-2 weeks)", essential: true },
        { name: "Sleepwear and loungewear", essential: true },
        { name: "Swimwear (Arizona has pools and water activities)", essential: false }
      ]
    },
    {
      title: "Kitchen & Food",
      icon: Utensils,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      items: [
        { name: "Spices and masalas (garam masala, turmeric, etc.)", essential: true },
        { name: "Basic utensils (pressure cooker, ladle, spatula)", essential: true },
        { name: "Pans and cooking essentials", essential: true },
        { name: "Homemade snacks and comfort foods", essential: false },
        { name: "Rice and lentils (if you prefer specific varieties)", essential: false },
        { name: "Tea/coffee (your preferred brands)", essential: false },
        { name: "Cooking oil (if you prefer specific types)", essential: false }
      ]
    },
    {
      title: "Medicines & Health",
      icon: Pill,
      color: "from-red-500 to-red-600",
      bgColor: "bg-gradient-to-br from-red-50 to-red-100",
      items: [
        { name: "Prescription medicines (with doctor's note)", essential: true },
        { name: "Over-the-counter medicines (pain relief, cold medicine)", essential: true },
        { name: "First aid kit (bandages, antiseptic, thermometer)", essential: true },
        { name: "Vitamins and supplements", essential: false },
        { name: "Medical insurance documents", essential: true },
        { name: "Health records and vaccination certificates", essential: true }
      ]
    },
    {
      title: "Electronics & Miscellaneous",
      icon: Plug,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      items: [
        { name: "Laptop and charger", essential: true },
        { name: "Phone and charger", essential: true },
        { name: "Travel adapters (US plug type)", essential: true },
        { name: "Power bank", essential: false },
        { name: "Bedding (sheets, pillow, blanket)", essential: true },
        { name: "Towels (bath and hand towels)", essential: true },
        { name: "Toiletries (toothbrush, shampoo, soap)", essential: true },
        { name: "Emergency contacts list", essential: true },
        { name: "Photos of family and friends", essential: false }
      ]
    }
  ]

  const packingTips = [
    {
      tip: "Start Early",
      description: "Begin packing 2-3 weeks before departure to avoid last-minute stress",
      icon: AlertCircle,
      color: "from-yellow-500 to-orange-500"
    },
    {
      tip: "Check Airline Limits",
      description: "Verify baggage weight and size limits with your airline",
      icon: CheckSquare,
      color: "from-blue-500 to-purple-500"
    },
    {
      tip: "Pack in Layers",
      description: "Use vacuum bags to maximize space and organize clothes",
      icon: Square,
      color: "from-green-500 to-teal-500"
    },
    {
      tip: "Keep Essentials Handy",
      description: "Pack important documents and valuables in carry-on luggage",
      icon: Star,
      color: "from-red-500 to-pink-500"
    }
  ]

  const essentialCount = checklistCategories.reduce((total, category) => 
    total + category.items.filter(item => item.essential).length, 0
  )

  return (
    <section id="packing-checklist" className="py-20 bg-gradient-to-br from-orange-50 via-white to-green-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Link to="/incoming" className="mr-4">
              <Button variant="outline" size="sm" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Incoming Students
              </Button>
            </Link>
          </div>
          
          <Badge variant="indian" className="mb-4">
            <FileText className="w-3 h-3 mr-1" />
            Packing Guide
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Packing Checklist
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Everything you need to pack for your journey to ASU from India. 
            This comprehensive checklist ensures you don't forget any essential items.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <div className="text-2xl font-bold text-saffron">{essentialCount}</div>
              <div className="text-sm text-gray-600">Essential Items</div>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <div className="text-2xl font-bold text-green-600">{checklistCategories.length}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
          </div>
        </motion.div>

        {/* Checklist Categories */}
        <div className="space-y-12">
          {checklistCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + (categoryIndex * 0.2) }}
              className="mb-16"
            >
              <Card className={`${category.bgColor} border-0 shadow-xl`}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600">
                        {category.items.filter(item => item.essential).length} essential items
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + (categoryIndex * 0.2) + (itemIndex * 0.05) }}
                        className={`flex items-center space-x-3 p-4 rounded-lg ${
                          item.essential 
                            ? 'bg-white border-2 border-saffron/20 shadow-md' 
                            : 'bg-gray-50 border border-gray-200'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          item.essential ? 'bg-saffron' : 'bg-gray-300'
                        }`}>
                          {item.essential ? (
                            <CheckCircle className="w-4 h-4 text-white" />
                          ) : (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <div className="flex-1">
                          <span className={`font-medium ${
                            item.essential ? 'text-gray-800' : 'text-gray-600'
                          }`}>
                            {item.name}
                          </span>
                          {item.essential && (
                            <Badge variant="secondary" className="ml-2 text-xs">
                              Essential
                            </Badge>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Packing Tips */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Packing Tips</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert advice to help you pack efficiently and avoid common mistakes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packingTips.map((tip, index) => (
              <motion.div
                key={tip.tip}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + (index * 0.1) }}
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
          transition={{ duration: 0.8, delay: 2.0 }}
          className="text-center bg-gradient-to-r from-saffron/10 via-orange/10 to-green/10 rounded-3xl p-12"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-saffron to-orange rounded-full mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Start Packing?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Use this checklist as your guide and don't forget to check off items as you pack. 
              When in doubt, it's better to pack it than to regret not having it later!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="indian" size="lg" className="group">
                <Download className="w-5 h-5 mr-2" />
                Download Checklist PDF
              </Button>
              <Link to="/incoming">
                <Button variant="indianOutline" size="lg">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Incoming Students
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PackingChecklist
