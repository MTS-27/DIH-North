import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-white pt-24 pb-12 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Banner Graphic */}
      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-sm border border-slate-100">
          <img
            src="/assets/banner.jpg"
            alt="Da'watul Islam Havering North Branch"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Call to Actions */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 px-4">
        <Link
          href="#prayer-times"
          className="group relative px-8 py-4 bg-brand-green text-white rounded-full font-bold text-lg shadow-lg shadow-brand-green/30 overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
          <span className="relative z-10">View Prayer Times</span>
        </Link>
        <Link
          href="/donations"
          className="px-8 py-4 bg-white border-2 border-brand-green text-brand-green rounded-full font-bold text-lg hover:bg-brand-green hover:text-white transition-all shadow-lg hover:shadow-brand-green/20 hover:scale-105 active:scale-95"
        >
          Support Our Branch
        </Link>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
