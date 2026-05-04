import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-base-200 text-base-content mt-auto">
      
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/asset/logo.png" 
                alt="Sun Mart Logo" 
                width={45} 
                height={45} 
                className="h-10 w-auto object-contain" 
              />
              <h1 className="text-2xl font-bold tracking-tight text-[#E45C04]">
                Sun<span className="text-emerald-900">Mart</span>
              </h1>
            </Link>
            <p className="text-base-content/60 leading-relaxed max-w-xs">
              Your ultimate destination for premium summer essentials. We bring the heat with style, protection, and quality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-[#E45C04] hover:text-white transition-all duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-[#E45C04] hover:text-white transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-[#E45C04] hover:text-white transition-all duration-300">
                <FaXTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-[#E45C04] hover:text-white transition-all duration-300">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-emerald-900 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-base-content/70 hover:text-[#E45C04] transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-base-content/70 hover:text-[#E45C04] transition-colors">Shop All</Link></li>
              <li><Link href="/products?category=Skincare" className="text-base-content/70 hover:text-[#E45C04] transition-colors">Skincare</Link></li>
              <li><Link href="/products?category=Accessories" className="text-base-content/70 hover:text-[#E45C04] transition-colors">Accessories</Link></li>
            </ul>
          </div>

          
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-emerald-900 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about-us" className="text-base-content/70 hover:text-[#E45C04] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-base-content/70 hover:text-[#E45C04] transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-base-content/70 hover:text-[#E45C04] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-base-content/70 hover:text-[#E45C04] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-emerald-900 uppercase tracking-wider">Join the Vibe</h3>
            <p className="text-base-content/60">Subscribe to get summer tips and exclusive offers!</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="input input-bordered w-full pr-12 focus:border-[#E45C04] focus:outline-none bg-base-200/50" 
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#E45C04] text-white rounded-lg flex items-center justify-center hover:bg-emerald-900 transition-colors shadow-md shadow-[#E45C04]/20">
                <Send size={16} />
              </button>
            </form>
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-base-content/70 text-sm">
                <MapPin size={16} className="text-[#E45C04]" /> Dhaka, Bangladesh
              </div>
              <div className="flex items-center gap-3 text-base-content/70 text-sm">
                <Phone size={16} className="text-[#E45C04]" /> +8801234567890
              </div>
            </div>
          </div>

        </div>
      </div>

      
      <div className="border-t border-base-200 bg-base-200/30">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-base-content/50">
            © {currentYear} <span className="font-bold text-[#E45C04]">Sun Mart</span>. Crafted with ❤️ for a better summer.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-3xl text-base-content/30">
              <FaCcVisa className="hover:text-[#E45C04] transition-colors cursor-help" title="Visa" />
              <FaCcMastercard className="hover:text-[#E45C04] transition-colors cursor-help" title="Mastercard" />
              <FaCcPaypal className="hover:text-[#E45C04] transition-colors cursor-help" title="Paypal" />
              <FaCcApplePay className="hover:text-[#E45C04] transition-colors cursor-help" title="Apple Pay" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
