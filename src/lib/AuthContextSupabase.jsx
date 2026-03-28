import { useContext, createContext, useState, useEffect } from "react";
import { supabase } from "./SupabaseClient";
import React from "react";

const authContext = createContext(null);
const API_BASE = "https://isaapisprintboot.igenius99.com/api";

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchRoles(currentSession) {
    if (!currentSession?.access_token) {
      setRoles([]);
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/user/me`, {
        headers: {
          Authorization: `Bearer ${currentSession.access_token}`,
        },
      });

      if (!res.ok) {
        setRoles([]);
        return;
      }

      const data = await res.json();
      setRoles(data.roles || []);
    } catch (err) {
      console.error("Failed to fetch roles:", err);
      setRoles([]);
    }
  }

  async function refreshRoles() {
    const { data } = await supabase.auth.getSession();
    await fetchRoles(data.session ?? null);
  }

  useEffect(() => {
    async function init() {
      try {
        const { data } = await supabase.auth.getSession();
        const currentSession = data.session ?? null;

        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        await fetchRoles(currentSession);
      } finally {
        setLoading(false);
      }
    }

    init();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession ?? null);
      setUser(newSession?.user ?? null);

      fetchRoles(newSession ?? null).finally(() => {
        setLoading(false);
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  const isAdmin = roles.includes("ADMIN");

  return (
    <authContext.Provider
      value={{
        session,
        user,
        roles,
        isAdmin,
        loading,
        refreshRoles,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);
