export default function SourceShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0e1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4">
            <span className="text-xs font-semibold text-[#8888aa] tracking-widest uppercase">Powered By</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Two Giants, <span className="text-gradient">One Platform</span></h2>
          <p className="text-[#8888aa] max-w-xl mx-auto text-sm">We aggregate the best products from the world&apos;s two largest e-commerce platforms so you never miss a deal.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name:"AliExpress", emoji:"🛒", color:"#ff6b35", bg:"rgba(255,107,53,0.08)", border:"rgba(255,107,53,0.2)", desc:"Global Factory Prices", sub:"Access over 100 million products directly from manufacturers.", features:["100M+ products","Factory-direct pricing","Free worldwide shipping","Buyer protection guarantee","Bulk order discounts"] },
            { name:"Amazon",     emoji:"📦", color:"#f90",    bg:"rgba(255,153,0,0.08)",  border:"rgba(255,153,0,0.2)",  desc:"Prime Quality & Speed",  sub:"Shop from Amazon's vast catalog with Prime shipping, trusted reviews, and unmatched customer service.", features:["350M+ products","Prime 2-day delivery","Verified customer reviews","Easy returns policy","Amazon's Choice badges"] },
          ].map(s => (
            <div key={s.name} className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]" style={{ background: s.bg, borderColor: s.border }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{s.emoji}</span>
                <div>
                  <h3 className="text-white font-bold text-lg">{s.name}</h3>
                  <p className="text-xs font-semibold" style={{ color: s.color }}>{s.desc}</p>
                </div>
              </div>
              <p className="text-[#8888aa] text-sm mb-5 leading-relaxed">{s.sub}</p>
              <ul className="space-y-2 mb-6">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#8888aa]">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90" style={{ background: s.color, color: "#fff" }}>
                Browse {s.name} Products →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
