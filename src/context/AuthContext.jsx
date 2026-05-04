"use client";

import { createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "@/lib/auth-client";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const { data: session, isPending, error: sessionError } = useSession();

  // Derive user directly from session to avoid cascading renders/warnings
  const user = session?.user || null;

  const login = async (email, password) => {
    const { data, error } = await signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    if (error) throw error;
    return data;
  };

  const signInWithGoogle = async () => {
    const { data, error } = await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    if (error) throw error;
    return data;
  };

  const logout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  const updateProfile = (data) => {
    // Note: With Better-Auth, profile updates should be done via authClient.updateUser
    // For now, we provide this as a placeholder or remove it to stay clean
  };

  return (
    <AuthContext.Provider value={{ user, isPending, login, logout, updateProfile, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
