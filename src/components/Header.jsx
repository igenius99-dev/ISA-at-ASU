import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Home, Users, Users2, Mail, Key, User } from "lucide-react";
import { Button } from "./ui/button";
import ISALogo from "../assets/ISALogo.png";
import { useAuth } from "../lib/AuthContextSupabase";
import { supabase } from "../lib/SupabaseClient";

const Header = () => {
  const { session, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error.message);
    }
  }
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Incoming Students", href: "/incoming", icon: Users },
    { name: "Current Students", href: "/current", icon: Users2 },
    /*   { name: 'Events', href: '/#events', icon: Calendar },*/
    { name: "Team", href: "/team", icon: Users2 },
    { name: "Leasing", href: "/leasing", icon: Key },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 glass-effect"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img
              src={ISALogo}
              alt="ISA Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gradient">ISA</h1>
              <p className="text-xs text-muted-foreground">
                Indian Students Association
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name}>
                {item.href.startsWith("#") ? (
                  <motion.a
                    href={item.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-300 ${
                      location.pathname === "/" && item.href === "/#events"
                        ? "text-saffron"
                        : "text-gray-700 hover:text-saffron"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </motion.a>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-300 ${
                        location.pathname === item.href
                          ? "text-saffron"
                          : "text-gray-700 hover:text-saffron"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          {session === null ? (
            <div className="hidden md:block">
              <Button variant="indian" size="sm">
                <Link to="/login"> Team login</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="md:hidden">
                <Link to="/dashboard" aria-label="Profile">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                  >
                    <User className="w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <Link to="/dashboard" aria-label="Profile">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                  >
                    <User className="w-5 h-5" />
                  </Button>
                </Link>
                <Button variant="indian" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-saffron transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-saffron transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4">
                {session === null ? (
                  <Button variant="indian" size="sm" className="w-full">
                    <Link to="/login"> Team login</Link>
                  </Button>
                ) : (
                  <Button
                    variant="indian"
                    size="sm"
                    className="w-full"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
