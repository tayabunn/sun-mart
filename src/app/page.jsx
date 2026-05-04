import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingBag, Droplets, Sun, Wind, Umbrella } from "lucide-react";

import db from "../../public/db.json";

export default async function Home() {
  const products = db.models;
  const popularProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      
      <section className="relative bg-base-200 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/asset/hero_bg.jpg" 
            alt="Summer Beach Background" 
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate__animated animate__fadeInUp">
          <div className="inline-block p-2 px-4 rounded-full bg-warning/20 text-warning-content font-bold border border-warning/50 mb-4 animate__animated animate__pulse animate__infinite">
            🔥 Summer Sale 50% OFF
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-base-content drop-shadow-sm">
            Embrace the <span className="text-[#E45C04]">Summer Vibe</span>
          </h1>
          <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
            Get ready for the sun with our exclusive collection of sunglasses, skincare, and beach essentials.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link href="#products" className="btn bg-[#E45C04] hover:bg-emerald-900 text-white border-none btn-lg shadow-lg">
              Shop Hot Deals
            </Link>
            <Link href="#care-tips" className="btn btn-outline btn-lg bg-base-100/50 backdrop-blur-sm">
              Care Tips
            </Link>
          </div>
        </div>
      </section>

      
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-base-content mb-4">Popular Products</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">Our most loved summer essentials, handpicked for you.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularProducts.map((product) => (
            <div key={product.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-base-200">
              <figure className="px-6 pt-6 relative h-64 overflow-hidden rounded-t-2xl">
                <Image fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={product.image} alt={product.name} className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-8 right-8 badge bg-[#E45C04] text-white border-none font-bold">New</div>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl">{product.name}</h2>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-2xl font-bold text-[#E45C04]">${product.price}</span>
                  <div className="flex items-center gap-1 text-warning bg-warning/10 px-2 py-1 rounded-full text-sm font-semibold">
                    <Star size={16} fill="currentColor" />
                    {product.rating}
                  </div>
                </div>
                <div className="card-actions justify-end mt-4">
                  <Link href={`/product/${product.id}`} className="btn bg-[#E45C04] hover:bg-emerald-900 text-white border-none w-full group-hover:bg-emerald-900 transition-colors">
                    <ShoppingBag size={18} /> View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/products" className="btn btn-outline border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white btn-wide">View All Products</Link>
        </div>
      </section>

      
      <section id="care-tips" className="py-20 bg-primary/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Summer Care Tips</h2>
            <p className="text-base-content/70">Stay healthy and glowing all season long.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-md p-6 items-center text-center hover:shadow-lg transition-shadow border border-primary/10">
              <div className="w-16 h-16 bg-info/20 text-info rounded-full flex items-center justify-center mb-4">
                <Droplets size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Stay Hydrated</h3>
              <p className="text-base-content/70">Drink at least 8 glasses of water a day to keep your skin glowing and body energized.</p>
            </div>
            <div className="card bg-base-100 shadow-md p-6 items-center text-center hover:shadow-lg transition-shadow border border-primary/10">
              <div className="w-16 h-16 bg-warning/20 text-warning rounded-full flex items-center justify-center mb-4">
                <Sun size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Sun Protection</h3>
              <p className="text-base-content/70">Always apply SPF 30+ sunscreen 15 minutes before stepping out into the sun.</p>
            </div>
            <div className="card bg-base-100 shadow-md p-6 items-center text-center hover:shadow-lg transition-shadow border border-primary/10">
              <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mb-4">
                <Umbrella size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Find Shade</h3>
              <p className="text-base-content/70">Take breaks in the shade, especially during peak sun hours between 10 AM and 4 PM.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-base-200">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Trusted by Top Brands</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {["SunShade", "NatureCare", "WaveRider", "SunGuard"].map((brand, idx) => (
            <div key={idx} className="text-2xl md:text-4xl font-black text-base-content/50 hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
              <Wind size={36} className="text-primary hidden md:block" />
              {brand}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
