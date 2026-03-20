import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About";
import Events from "./components/Events";
import IncomingStudents from "./components/IncomingStudents";
import CurrentStudents from "./components/CurrentStudents";
import Team from "./components/Team";
import Housing from "./components/Housing";
import Leasing from "./components/Leasing";
import PackingChecklist from "./components/PackingChecklist";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import SignInUp from "./components/SignInUp";
import "./index.css";
import ProtectedRoute from "./lib/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Election from "./components/election";
import SplashCursor from "./components/ui/SplashCursor";
import Faq from "./components/Faq";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <SplashCursor />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-green-50">
        <Header />
        <ScrollToTop />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Faq />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/incoming" element={<IncomingStudents />} />
            <Route path="/team" element={<Team />} />
            <Route path="/housing" element={<Housing />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/packing-checklist" element={<PackingChecklist />} />
            <Route path="/login" element={<SignInUp />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/elections"
              element={
                <ProtectedRoute>
                  <Election />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
