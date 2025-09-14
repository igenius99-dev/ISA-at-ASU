import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ShoppingBag, Star as StarIcon } from 'lucide-react'

const Merch = () => {
  const merchItems = [
    {
      id: 1,
      name: "ISA Official T-Shirt",
      price: 25,
      description: "Premium quality cotton t-shirt with ISA logo",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
      color: "saffron",
      gradient: "from-saffron/20 to-orange/20"
    },
    {
      id: 2,
      name: "ISA Hoodie",
      price: 45,
      description: "Cozy hoodie perfect for ASU weather",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a4?w=400&h=400&fit=crop&crop=center",
      color: "green",
      gradient: "from-green/20 to-emerald/20"
    },
    {
      id: 3,
      name: "ISA Baseball Cap",
      price: 20,
      description: "Stylish cap with embroidered ISA logo",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop&crop=center",
      color: "orange",
      gradient: "from-orange/20 to-yellow/20"
    }
  ]

  return (
    <section id="merch" className="py-20 bg-gradient-to-br from-slate-50 via-orange-50 to-green-50">
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
            <ShoppingBag className="w-3 h-3 mr-1" />
            ISA Merchandise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Show Your ISA Pride
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your hands on exclusive ISA merchandise and represent our community with style.
          </p>
        </motion.div>

        {/* Merch Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {merchItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group cursor-pointer"
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`aspect-square bg-gradient-to-br ${item.gradient} rounded-xl mb-4 flex items-center justify-center relative overflow-hidden`}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1">
                      <StarIcon className={`w-4 h-4 text-${item.color}`} />
                    </div>
                  </div>
                  
                  <h4 className={`font-bold text-lg text-gray-800 mb-2 group-hover:text-${item.color} transition-colors`}>
                    {item.name}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-bold text-${item.color}`}>
                      ${item.price}
                    </span>
                    <Button variant="indian" size="sm" className="group-hover:scale-105 transition-transform">
                      Add to Cart
                    </Button>
                  </div>
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
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              More Merch Coming Soon!
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              We're constantly adding new items to our collection. Stay tuned for more exclusive 
              ISA merchandise and limited edition items.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="indian" size="lg">
                View All Products
              </Button>
              <Button variant="indianOutline" size="lg">
                Get Notified
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Merch
