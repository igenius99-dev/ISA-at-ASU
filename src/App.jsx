import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import ScrollToTop from './components/ScrollToTop'
import About from './components/About'
import Events from './components/Events'
import IncomingStudents from './components/IncomingStudents'
import CurrentStudents from './components/CurrentStudents'
import Team from './components/Team'
import Housing from './components/Housing'
import PackingChecklist from './components/PackingChecklist'
import Footer from './components/Footer'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-green-50">
        <Header />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Events />
                <Contact />
              </>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/incoming" element={<IncomingStudents />} />
            <Route path="/current" element={<CurrentStudents />} />
            <Route path="/team" element={<Team />} />
            <Route path="/housing" element={<Housing />} />
            <Route path="/packing-checklist" element={<PackingChecklist />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App