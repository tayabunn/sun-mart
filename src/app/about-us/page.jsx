import { Info, Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "About Us | Sun Mart",
  description: "Learn more about Sun Mart, your premium summer eCommerce destination.",
};

export default function AboutUs() {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-16">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h1 className="text-5xl font-extrabold text-base-content mb-4">
          About <span className="text-[#E45C04]">Sun Mart</span>
        </h1>
        <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
          We bring the best of summer essentials to your doorstep with a commitment to quality and style.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-lg text-base-content/80 leading-relaxed">
            Founded with a passion for the sun and the sea, Sun Mart started as a small boutique for high-quality sunglasses. Today, we have expanded into a full-scale summer destination, offering everything from advanced skincare to designer beachwear.
          </p>
          <p className="text-lg text-base-content/80 leading-relaxed">
            Our mission is to ensure you enjoy every moment under the sun, protected and in style. We handpick every product in our catalog to meet the highest standards of performance and aesthetics.
          </p>
        </div>
        <div className="bg-base-200 rounded-3xl p-8 lg:p-12 space-y-8">
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center">
              <MapPin size={24} />
            </div>
            <div>
              <p className="font-bold">Our Location</p>
              <p className="text-base-content/70">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-full flex items-center justify-center">
              <Phone size={24} />
            </div>
            <div>
              <p className="font-bold">Phone Number</p>
              <p className="text-base-content/70">+8801234567890</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center">
              <Mail size={24} />
            </div>
            <div>
              <p className="font-bold">Email Address</p>
              <p className="text-base-content/70">hello@sunmart.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#E45C04] text-white rounded-3xl p-12 text-center space-y-6">
        <h2 className="text-3xl font-bold">Join the Summer Vibe</h2>
        <p className="text-xl max-w-2xl mx-auto opacity-90">
          Sign up for our newsletter to get exclusive deals, summer tips, and early access to our new collections.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <input type="email" placeholder="Enter your email" className="input input-bordered text-base-content w-full max-w-xs" />
          <button className="btn bg-emerald-900 hover:bg-emerald-800 text-white border-none px-8">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
