"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ShoppingBag, User, LogOut, Menu, X, Info, Tag, Home } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Products", href: "/products", icon: Tag },
    { name: "About Us", href: "/about-us", icon: Info },
  ];

  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-50 px-4 md:px-8 border-b border-base-200">
      <div className="navbar max-w-7xl mx-auto p-0 min-h-[4rem]">
        
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image 
              src="/asset/logo.png" 
              alt="Sun Mart Logo" 
              width={45} 
              height={45} 
              className="h-10 w-auto object-contain" 
            />
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-[#E45C04]">
              Sun<span className="text-emerald-900">Mart</span>
            </h1>
          </Link>
        </div>

        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-semibold text-base-content/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`hover:text-[#E45C04] transition-all hover:bg-transparent ${
                    isActive(link.href) ? "text-[#E45C04] border-b-2 border-[#E45C04] rounded-none" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="navbar-end gap-1 md:gap-3">
          {user ? (
            <div className="flex items-center gap-2 md:gap-4">
              
              <Link href="/cart" className="btn btn-ghost btn-circle relative hover:bg-base-200">
                <ShoppingBag size={22} className="text-base-content/80" />
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E45C04] text-[10px] font-bold text-white shadow-sm animate-in fade-in zoom-in">
                    {totalItems}
                  </span>
                )}
              </Link>

              
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-[#E45C04]/10 hover:border-[#E45C04]/50 transition-all">
                  <div className="w-10 rounded-full relative overflow-hidden">
                    <Image 
                      fill 
                      src={user.image || "https://i.pravatar.cc/150?img=32"} 
                      alt="User" 
                      sizes="40px"
                    />
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow-xl bg-base-100 rounded-box w-56 border border-base-200 animate-in slide-in-from-top-2">
                  <li className="px-4 py-3 border-b border-base-200 mb-2">
                    <p className="font-bold text-base-content">{user.name}</p>
                    <p className="text-xs text-base-content/50 truncate">{user.email}</p>
                  </li>
                  <li><Link href="/profile" className="py-3 flex gap-3"><User size={18} /> My Profile</Link></li>
                  <li><Link href="/orders" className="py-3 flex gap-3"><ShoppingBag size={18} /> My Orders</Link></li>
                  <div className="divider my-1"></div>
                  <li><button onClick={logout} className="py-3 flex gap-3 text-error hover:bg-error/10"><LogOut size={18} /> Logout</button></li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="btn btn-ghost btn-sm md:btn-md font-bold uppercase text-xs tracking-wider">Login</Link>
              <Link href="/register" className="btn btn-sm md:btn-md bg-[#E45C04] hover:bg-[#c44b03] text-white border-none px-6 shadow-lg shadow-[#E45C04]/20 uppercase text-xs font-bold tracking-wider">Signup</Link>
            </div>
          )}

          
          <button 
            className="btn btn-ghost btn-circle lg:hidden text-base-content/80" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute left-0 top-full w-full bg-base-100 border-t border-base-200 shadow-2xl animate-in slide-in-from-top-4 duration-300 z-50">
          <ul className="menu menu-vertical p-4 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-4 py-4 text-lg ${isActive(link.href) ? "bg-[#E45C04]/10 text-[#E45C04] font-bold" : ""}`}
                >
                  <link.icon size={20} /> {link.name}
                </Link>
              </li>
            ))}
            {user && (
              <li>
                <Link 
                  href="/profile" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 py-4 text-lg"
                >
                  <User size={20} /> Profile
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
