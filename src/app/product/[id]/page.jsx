"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Star, ShieldCheck, Truck, RotateCcw, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProductDetails({ params }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { user } = useAuth();
  const [isMounted, setIsMounted] = useState(false);
  const [product, setProduct] = useState(null);
  const [productLoading, setProductLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!resolvedParams?.id) return;
    setProductLoading(true);
    fetch(`/api/products/${resolvedParams.id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setProductLoading(false);
      })
      .catch(() => {
        setProduct(null);
        setProductLoading(false);
      });
  }, [resolvedParams?.id]);

  useEffect(() => {
    if (user === null) {
      // Small timeout to allow auth state to resolve if needed
      const timeout = setTimeout(() => {
        router.push("/login");
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [user, router]);

  if (!isMounted || !user || productLoading) {
    return (
      <div className="flex-1 flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!product) {

    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h2 className="text-3xl font-bold">Product not found</h2>
        <Link href="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
      <div className="text-sm breadcrumbs mb-8">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#products">Products</Link></li>
          <li className="font-semibold text-primary">{product.name}</li>
        </ul>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Image */}
        <div className="flex-1">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-base-200 relative aspect-square">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <div className="badge badge-secondary badge-lg">{product.category}</div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-base-content">{product.name}</h1>
            <p className="text-xl text-base-content/60 font-medium">by {product.brand}</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-primary">${product.price}</span>
            <div className="flex items-center gap-1 text-warning bg-warning/10 px-3 py-1.5 rounded-full font-bold">
              <Star size={20} fill="currentColor" />
              {product.rating}
            </div>
            <span className="text-sm text-base-content/50">({Math.floor((product.id * 73) % 500 + 50)} reviews)</span>
          </div>

          <p className="text-lg text-base-content/80 leading-relaxed border-t border-b border-base-200 py-6">
            {product.description}
          </p>

          <div className="flex items-center gap-4">
            <span className={`badge ${product.stock > 0 ? "badge-success" : "badge-error"} badge-outline font-semibold`}>
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
            <span className="text-sm text-base-content/60">{product.stock} items available</span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button className="btn bg-[#E45C04] hover:bg-[#c44b03] text-white border-none btn-lg flex-1 shadow-lg shadow-[#E45C04]/30">
              <ShoppingCart size={20} /> Add to Cart
            </button>
            <button className="btn btn-outline border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white btn-lg flex-1">
              Buy Now
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            <div className="flex flex-col items-center text-center gap-2 p-4 bg-base-200 rounded-xl">
              <Truck className="text-primary" size={24} />
              <span className="text-sm font-semibold">Free Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 bg-base-200 rounded-xl">
              <ShieldCheck className="text-primary" size={24} />
              <span className="text-sm font-semibold">1 Year Warranty</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 bg-base-200 rounded-xl">
              <RotateCcw className="text-primary" size={24} />
              <span className="text-sm font-semibold">30-Day Return</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
