"use client";
import { useState } from "react";
import { Mail, Sparkles } from "lucide-react";
export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#07080f]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7c6fff]/10 via-[#38bdf8]/8 to-[#f472b6]/10 pointer-events-none" />
      <div className="relative max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c6fff]/10 border border-[#7c6fff]/25 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#a78bfa]" />
          <span className="text-xs font-semibold text-[#a78bfa] tracking-widest uppercase">Exclusive Deals</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Never Miss a <span className="text-gradient">Deal Again</span></h2>
        <p className="text-[#8888aa] mb-8 text-sm sm:text-base">Subscribe to get daily curated deals, flash sales, and exclusive discounts delivered straight to your inbox.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] focus-within:border-[#7c6fff]/50 transition-all">
            <Mail className="w-4 h-4 text-[#8888aa] flex-shrink-0" />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address" className="flex-1 bg-transparent text-white text-sm placeholder:text-[#44445a] outline-none" />
          </div>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c6fff] to-[#38bdf8] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg whitespace-nowrap">Subscribe Free</button>
        </div>
        <p className="text-[#44445a] text-xs mt-4">No spam. Unsubscribe anytime. We respect your privacy.</p>
      </div>
    </section>
  );
}
