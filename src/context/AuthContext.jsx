"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "@/lib/auth-client";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, isPending, error: sessionError } = useSession();

  useEffect(() => {
    if (session) {
      setUser(session.user);
    } else {
      setUser(null);
    }
  }, [session]);

  const login = async (email, password) => {
    const { data, error } = await signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    if (error) throw error;
    return data;
  };

  const logout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          setUser(null);
          router.push("/login");
        },
      },
    });
  };

  const updateProfile = (data) => {
    // Better-Auth profile update would go here
    setUser(prev => ({ ...prev, ...data }));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
