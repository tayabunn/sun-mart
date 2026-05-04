import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content mt-auto">
      <div className="footer p-10 max-w-7xl mx-auto">
        <aside>
          <div className="mb-4">
            <Image src="/asset/logo-footer.png" alt="Sun Mart Logo" width={180} height={50} className="h-16 w-auto object-contain" />
          </div>
          <p>
            Sun Mart Industries Ltd.<br/>
            Providing reliable summer essentials since 2024.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-2"><MapPin size={18} /> 123 Summer Breeze Ln, Miami, FL</div>
            <div className="flex items-center gap-2"><Phone size={18} /> +1 (800) 123-4567</div>
            <div className="flex items-center gap-2"><Mail size={18} /> hello@sunmart.com</div>
          </div>
        </aside> 
        <nav>
          <h6 className="footer-title">Shop</h6> 
          <Link href="/#products" className="link link-hover">Accessories</Link> 
          <Link href="/#products" className="link link-hover">Skincare</Link> 
          <Link href="/#products" className="link link-hover">Outfits</Link>
        </nav> 
        <nav>
          <h6 className="footer-title">Company</h6> 
          <Link href="/" className="link link-hover">About us</Link> 
          <Link href="/" className="link link-hover">Contact</Link> 
          <Link href="/" className="link link-hover">Jobs</Link> 
          <Link href="/" className="link link-hover">Press kit</Link>
        </nav> 
        <nav>
          <h6 className="footer-title">Legal</h6> 
          <Link href="/" className="link link-hover">Terms of use</Link> 
          <Link href="/" className="link link-hover">Privacy policy</Link> 
          <Link href="/" className="link link-hover">Cookie policy</Link>
        </nav>
      </div>
      <div className="footer px-10 py-4 border-t bg-neutral text-neutral-content border-base-300 max-w-7xl mx-auto flex justify-between items-center">
        <aside className="items-center grid-flow-col">
          <p>© {new Date().getFullYear()} Sun Mart. All rights reserved.</p>
        </aside> 
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
