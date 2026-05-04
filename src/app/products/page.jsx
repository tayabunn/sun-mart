import db from "../../../public/db.json";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag, Filter } from "lucide-react";

export const metadata = {
  title: "Shop All Products | Sun Mart",
  description: "Browse our complete collection of summer essentials, from sunglasses to premium skincare.",
};

export default async function ProductsPage() {
  const products = db.models;

  return (
    <div className="flex-1 min-h-screen bg-base-200/30">
      {/* Header Section */}
      <section className="bg-white border-b border-base-200 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-base-content tracking-tight">
            Our <span className="text-[#E45C04]">Summer Collection</span>
          </h1>
          <p className="text-base-content/60 max-w-2xl mx-auto text-lg">
            Explore our curated selection of high-performance sun protection and stylish beach essentials.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-sm font-medium text-base-content/50">
            Showing all <span className="text-base-content font-bold">{products.length}</span> products
          </div>
          <div className="flex gap-2">
            <button className="btn btn-sm btn-outline gap-2 border-base-300">
              <Filter size={14} /> Filter
            </button>
            <select className="select select-sm select-bordered w-full max-w-xs">
              <option disabled defaultValue>Sort by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card bg-white shadow-sm hover:shadow-xl transition-all duration-300 group border border-base-200 rounded-2xl overflow-hidden">
              <figure className="relative h-64 overflow-hidden">
                <Image 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" 
                  src={product.image} 
                  alt={product.name} 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4 z-10">
                   <div className="badge bg-white/90 backdrop-blur-md border-none text-base-content font-bold shadow-sm">
                     {product.category}
                   </div>
                </div>
              </figure>
              <div className="card-body p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="card-title text-lg font-bold group-hover:text-[#E45C04] transition-colors">{product.name}</h2>
                    <p className="text-xs text-base-content/50 uppercase tracking-widest font-semibold">{product.brand}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-black text-[#E45C04]">${product.price}</span>
                  <div className="flex items-center gap-1 text-warning font-bold">
                    <Star size={16} fill="currentColor" />
                    {product.rating}
                  </div>
                </div>

                <div className="card-actions mt-6">
                  <Link href={`/product/${product.id}`} className="btn bg-base-100 hover:bg-[#E45C04] hover:text-white text-base-content border-base-300 hover:border-[#E45C04] w-full gap-2 transition-all shadow-sm">
                    <ShoppingBag size={18} /> View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}