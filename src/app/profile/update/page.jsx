"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { User, Image as ImageIcon, Save, ArrowLeft } from "lucide-react";

export default function UpdateProfile() {
  const { user, updateProfile } = useAuth();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (user === null) {
      const timeout = setTimeout(() => {
        router.push("/login");
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [user, router]);

  if (!isMounted || !user) {
    return (
      <div className="flex-1 flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    updateProfile({ name, image });
    setSuccess("Profile updated successfully!");
    
    setTimeout(() => {
      router.push("/profile");
    }, 1500);
  };

  return (
    <div className="flex-1 flex justify-center items-center py-12 px-4 bg-base-200/30">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body">
          <div className="flex items-center mb-6">
            <Link href="/profile" className="btn btn-ghost btn-circle btn-sm mr-2">
              <ArrowLeft size={20} />
            </Link>
            <h2 className="text-2xl font-extrabold text-base-content m-0">Update Profile</h2>
          </div>
          
          {success && (
            <div className="alert alert-success text-sm py-2 rounded-lg mb-4 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{success}</span>
            </div>
          )}

          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text font-medium">Name</span></label>
              <label className="input input-bordered flex items-center gap-2 focus-within:outline-primary">
                <User size={18} className="text-base-content/50" />
                <input type="text" name="name" defaultValue={user.name} required className="grow" />
              </label>
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text font-medium">Image URL</span></label>
              <label className="input input-bordered flex items-center gap-2 focus-within:outline-primary">
                <ImageIcon size={18} className="text-base-content/50" />
                <input type="url" name="image" defaultValue={user.image} required className="grow" />
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-4 text-white font-bold shadow-lg shadow-primary/30">
              <Save size={18} /> Save Information
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
