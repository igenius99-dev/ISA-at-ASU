import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Lock } from "lucide-react";
import { supabase } from "../lib/SupabaseClient";
import { useNavigate } from "react-router-dom";

const SignInUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: wire up Supabase auth
    if (!isSignUp) {
      setError("");
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setError(error.message);
        return;
      }
      setError("Sign In successful");
      navigate("/dashboard");
    } else {
      setError("");

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      setError("Signup successful. Check your email.");
    }
  };

  return (
    <section className="min-h-[calc(100vh)] flex items-center justify-center py-20 bg-gradient-to-br from-orange-50 via-white to-green-50">
      <div className="container mx-auto px-4 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-md"
        >
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CardTitle className="text-3xl font-bold text-gray-800">
                  {isSignUp ? "Create Account" : "Welcome Back"}
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2 text-base">
                  {isSignUp
                    ? "Join the ISA community at ASU"
                    : "Sign in to your ISA account"}
                </CardDescription>
              </motion.div>
            </CardHeader>

            <CardContent className="pt-4">
              {/* Toggle Tabs */}
              <div className="flex rounded-lg bg-gradient-to-br from-saffron/5 to-orange/5 p-1 mb-8">
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 ${
                    !isSignUp
                      ? "bg-gradient-to-r from-saffron to-orange text-white shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 ${
                    isSignUp
                      ? "bg-gradient-to-r from-saffron to-orange text-white shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron transition-all duration-200"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="indian"
                  size="lg"
                  className="w-full text-base font-semibold mt-2"
                  value="hello"
                >
                  {isSignUp ? "Create Account" : "Sign In"}
                </Button>
                <div>{error}</div>
              </form>

              {/* Footer text */}
              <p className="text-center text-sm text-gray-500 mt-6">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}
                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-saffron font-semibold hover:underline"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SignInUp;
