import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/banner.jpg"
          alt="Islamic Architecture Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green/80 via-brand-green/60 to-[#0f172a]/90 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 animate-fade-in-up">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/30 backdrop-blur-md">
          <span className="text-brand-gold font-semibold tracking-wide text-sm uppercase">
            Serving the Community
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl leading-tight">
          Da&apos;watul Islam <br className="hidden md:block" />
          <span className="text-brand-gold">Havering North</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          A vibrant hub for spiritual growth, community engagement, and Islamic education in the heart of Havering.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#prayer-times"
            className="group relative px-8 py-4 bg-brand-green text-white rounded-full font-bold text-lg shadow-lg shadow-brand-green/30 overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative z-10">View Prayer Times</span>
          </Link>
          <Link
            href="/donations"
            className="px-8 py-4 bg-transparent border-2 border-brand-gold text-brand-gold rounded-full font-bold text-lg hover:bg-brand-gold hover:text-brand-green transition-all shadow-lg hover:shadow-brand-gold/20 hover:scale-105 active:scale-95"
          >
            Support Our Branch
          </Link>
        </div>
      </div>
    </section>
  );
}
