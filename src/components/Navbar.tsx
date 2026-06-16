"use client";
import { useState, useEffect } from "react";
import { ShoppingBag, Heart, Menu, X, Zap } from "lucide-react";
const navLinks = ["Home","Products","Deals","Categories","About"];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[rgba(7,8,15,0.92)] backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#7c6fff] to-[#38bdf8] flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(124,111,255,0.5)] transition-all duration-300">
              <Zap className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">Luxe<span className="text-gradient">Shop</span></span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a key={l} href="#" className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${l==="Home" ? "text-white bg-white/[0.07]" : "text-[#8888aa] hover:text-white hover:bg-white/[0.06]"}`}>{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="relative w-9 h-9 rounded-xl flex items-center justify-center text-[#8888aa] hover:text-white hover:bg-white/[0.06] transition-all">
              <Heart className="w-[18px] h-[18px]" />
            </button>
            <button className="relative w-9 h-9 rounded-xl flex items-center justify-center text-[#8888aa] hover:text-white hover:bg-white/[0.06] transition-all">
              <ShoppingBag className="w-[18px] h-[18px]" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#7c6fff] text-white text-[9px] font-bold flex items-center justify-center">3</span>
            </button>
            <button className="hidden sm:flex ml-1 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7c6fff] to-[#38bdf8] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg">Sign In</button>
            <button onClick={() => setOpen(!open)} className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-[#8888aa] hover:text-white hover:bg-white/[0.06] transition-all">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4 border-t border-white/[0.06] mt-1 pt-3 space-y-1">
            {navLinks.map((l) => (
              <a key={l} href="#" className="block px-4 py-2.5 rounded-xl text-sm text-[#8888aa] hover:text-white hover:bg-white/[0.06] transition-all" onClick={() => setOpen(false)}>{l}</a>
            ))}
            <div className="pt-2 px-4">
              <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#7c6fff] to-[#38bdf8] text-white text-sm font-semibold">Sign In</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
