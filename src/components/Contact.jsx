import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Mail, User, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })

    try {
    
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Failed to send message')
      setStatus({ loading: false, success: 'Message sent! We will get back to you soon.', error: null })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: 'Could not send message. Please try again.' })
    }
  }

  return (
    <section id="contact" className="py-20 pt-20 bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to collaborate? Send us a message and we’ll respond soon.
          </p>
       

        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-saffron absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full pl-9 pr-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/60"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-saffron absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@asu.edu"
                      className="w-full pl-9 pr-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/60"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-saffron absolute left-3 top-4" />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="How can we help?"
                      className="w-full pl-9 pr-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-saffron/60"
                    />
                  </div>
                </div>

                {status.success && (
                  <div className="text-green-700 bg-green-50 border border-green-200 rounded-md p-3">
                    {status.success}
                  </div>
                )}
                {status.error && (
                  <div className="text-red-700 bg-red-50 border border-red-200 rounded-md p-3">
                    {status.error}
                  </div>
                )}

                <Button type="submit" variant="indian" size="lg" disabled={status.loading} className="w-full">
                  {status.loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact


