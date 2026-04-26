import { Heart, Building2, Landmark, Info } from "lucide-react";

export const metadata = {
  title: "Donations | Da'watul Islam Havering North",
  description: "Support our branch and the central mosque fund.",
};

export default function Donations() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Support Our Community
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your generous contributions help us maintain the branch, provide educational programs, and establish a permanent home. May Allah reward you abundantly.
          </p>
          <div className="mt-4 text-sm text-slate-500 font-medium">
            Da'watul Islam UK & Eire - Charity No. 1186155
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Operational Cost Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-t-8 border-brand-green transform transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full relative overflow-hidden">
            <div className="bg-brand-green/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-brand-green" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Operational Cost</h2>
            <p className="text-brand-green font-semibold mb-6 flex items-center gap-2">
              <Info className="w-4 h-4" /> Recommended: £1/day or £30/month
            </p>
            <p className="text-slate-600 mb-8 flex-grow">
              These funds go towards our local operational costs, community events, and maintaining day-to-day activities at the Havering North Branch.
            </p>
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Landmark className="w-16 h-16" />
              </div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Bank Transfer Details</h3>
              <div className="space-y-3 relative z-10">
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Name</span>
                  <span className="font-bold text-slate-800 text-right">Havering Muslim<br/>Community Ltd.</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Sort Code</span>
                  <span className="font-mono font-bold text-lg text-brand-green">56-00-47</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Account No.</span>
                  <span className="font-mono font-bold text-lg text-brand-green">38679299</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-slate-500">Reference</span>
                  <span className="font-bold text-slate-800 bg-brand-green/10 px-3 py-1 rounded-md">Your Name</span>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-slate-500 mt-6 font-medium">Please set up a Standing Order</p>
          </div>

          {/* Masjid Purchase Fund Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-t-8 border-brand-gold transform transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full relative overflow-hidden">
            <div className="bg-brand-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Building2 className="h-8 w-8 text-brand-gold" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Masjid Purchase Fund</h2>
            <p className="text-brand-brown font-semibold mb-6 flex items-center gap-2">
              <Info className="w-4 h-4" /> Goal: Donate £1000+ in 2026
            </p>
            <p className="text-slate-600 mb-8 flex-grow">
              Contributions to this fund go directly toward purchasing a central building and waqf projects, establishing a permanent home for our growing community.
            </p>
            
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Landmark className="w-16 h-16" />
              </div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Bank Transfer Details</h3>
              <div className="space-y-3 relative z-10">
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Name</span>
                  <span className="font-bold text-slate-800 text-right">Dawatul islam<br/>UK and Eire</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Sort Code</span>
                  <span className="font-mono font-bold text-lg text-brand-gold">20-31-52</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Account No.</span>
                  <span className="font-mono font-bold text-lg text-brand-gold">23032523</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-slate-500">Reference</span>
                  <span className="font-bold text-slate-800 bg-brand-gold/20 px-3 py-1 rounded-md text-brand-brown">Your Name</span>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-slate-500 mt-6 font-medium">Please set up a Standing Order</p>
          </div>

        </div>
      </div>
    </div>
  );
}
