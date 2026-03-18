import { useContext, createContext, useState, useEffect } from "react";
import { supabase } from "./SupabaseClient";
import React from "react";

const authContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    // Listen for login/logout
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <authContext.Provider value={{ session, user, loading }}>
      {children}
    </authContext.Provider>
  );
}
export const useAuth = () => useContext(authContext);
