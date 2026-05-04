"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href="/#products">Products</Link></li>
            {user && <li><Link href="/profile">My Profile</Link></li>}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost hover:bg-transparent p-0 flex items-center gap-2">
          <Image src="/asset/logo.png" alt="Sun Mart Logo" width={48} height={48} className="h-12 w-auto object-contain" />
          <h1 className="text-2xl font-bold text-[#E45C04]">Sun<span className="text-emerald-900">Mart</span></h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#products">Products</Link></li>
          {user && <li><Link href="/profile">My Profile</Link></li>}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 h-10 relative rounded-full border-2 border-primary overflow-hidden">
                <Image fill alt="User avatar" src={user.image || "https://i.pravatar.cc/150?img=1"} sizes="40px" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="px-4 py-2 font-semibold border-b">{user.name}</li>
              <li><Link href="/profile">Profile</Link></li>
              <li><button onClick={logout} className="text-error">Logout</button></li>
            </ul>
          </div>
        ) : (
          <>
            <Link href="/login" className="btn btn-ghost">Login</Link>
            <Link href="/register" className="btn bg-emerald-900 hover:bg-emerald-950 text-white border-none">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}
