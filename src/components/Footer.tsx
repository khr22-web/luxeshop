import { Zap } from "lucide-react";
const cols = [
  { title: "Platform",   links: ["How It Works","Pricing","API Access","Affiliate Program"] },
  { title: "Sources",    links: ["AliExpress Products","Amazon Products","Compare Prices","Price Alerts"] },
  { title: "Categories", links: ["Electronics","Fashion","Home & Garden","Gaming"] },
  { title: "Support",    links: ["Help Center","Contact Us","Privacy Policy","Terms of Service"] },
];
export default function Footer() {
  return (
    <footer className="bg-[#07080f] border-t border-white/[0.06] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#7c6fff] to-[#38bdf8] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="text-white font-bold text-lg">Luxe<span className="text-gradient">Shop</span></span>
            </div>
            <p className="text-[#44445a] text-xs leading-relaxed">The world&apos;s most elegant shopping aggregator. Discover, compare, and buy from AliExpress and Amazon in one seamless experience.</p>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <h4 className="text-white text-sm font-semibold mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map(l => <li key={l}><a href="#" className="text-[#44445a] text-xs hover:text-[#a78bfa] transition-colors">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#44445a] text-xs">© 2025 LuxeShop. All rights reserved. Not affiliated with AliExpress or Amazon.</p>
          <p className="text-[#44445a] text-xs">Built with ♥ using Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
