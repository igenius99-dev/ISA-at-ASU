"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 px-4">
      <div className="text-center max-w-2xl">
        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-saffron via-orange-400 to-green-600 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-2xl md:text-3xl font-bold text-gray-800"
        >
          Page not found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-600 text-lg"
        >
          Looks like you wandered off the path. Let’s get you back to ISA
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </motion.div>

        {/* Decorative blur */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl pointer-events-none" />
      </div>
    </div>
  );
}
