"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Mail, Lock, User, Image as ImageIcon, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";

export default function Register() {
  const { login } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;

    if (!name || !email || !photoUrl || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Real registration with Better-Auth
    signUp.email({
      email,
      password,
      name,
      image: photoUrl,
      callbackURL: "/login",
    }).catch((err) => {
      setError(err.message || "Failed to register. Please try again.");
    });
  };

  const handleGoogleLogin = () => {
    login({
      name: "Google User",
      email: "google@example.com",
      image: "https://i.pravatar.cc/150?img=12",
    });
  };

  return (
    <div className="flex-1 flex justify-center items-center py-12 px-4 bg-base-200/50">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body">
          <h2 className="text-3xl font-extrabold text-center mb-6 text-base-content">Create Account</h2>
          
          {error && (
            <div className="alert alert-error text-sm py-2 rounded-lg mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text font-medium">Full Name</span></label>
              <label className="input input-bordered flex items-center gap-2 focus-within:outline-primary">
                <User size={18} className="text-base-content/50" />
                <input type="text" name="name" placeholder="John Doe" className="grow" />
              </label>
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text font-medium">Email</span></label>
              <label className="input input-bordered flex items-center gap-2 focus-within:outline-primary">
                <Mail size={18} className="text-base-content/50" />
                <input type="email" name="email" placeholder="hello@example.com" className="grow" />
              </label>
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text font-medium">Photo URL</span></label>
              <label className="input input-bordered flex items-center gap-2 focus-within:outline-primary">
                <ImageIcon size={18} className="text-base-content/50" />
                <input type="url" name="photoUrl" placeholder="https://example.com/photo.jpg" className="grow" />
              </label>
            </div>
            
            <div className="form-control">
              <label className="label"><span className="label-text font-medium">Password</span></label>
              <label className="input input-bordered flex items-center gap-2 focus-within:outline-primary">
                <Lock size={18} className="text-base-content/50" />
                <input type="password" name="password" placeholder="••••••••" className="grow" />
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-4 text-white font-bold shadow-lg shadow-primary/30">
              <UserPlus size={18} /> Register
            </button>
          </form>

          <div className="divider text-sm text-base-content/50">OR</div>

          <button onClick={handleGoogleLogin} className="btn btn-outline hover:bg-base-200 hover:text-base-content gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
              <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
              <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
              <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
              <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-sm mt-4 text-base-content/70">
            Already have an account? <Link href="/login" className="link link-primary font-bold">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
