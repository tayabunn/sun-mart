"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, User, Edit } from "lucide-react";

export default function Profile() {
  const { user } = useAuth();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

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

  return (
    <div className="flex-1 flex justify-center items-center py-12 px-4 bg-base-200/30">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body items-center text-center">
          <div className="avatar mb-4">
            <div className="w-32 h-32 relative rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 overflow-hidden">
              <Image fill sizes="128px" src={user.image || "https://i.pravatar.cc/150?img=1"} alt={user.name} />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mt-2">{user.name}</h2>
          
          <div className="flex items-center gap-2 text-base-content/70 mt-2">
            <Mail size={18} />
            <span>{user.email}</span>
          </div>

          <div className="divider w-full"></div>

          <div className="w-full flex justify-center">
            <Link href="/profile/update" className="btn btn-primary btn-wide gap-2 text-white shadow-lg shadow-primary/30">
              <Edit size={18} /> Update Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
