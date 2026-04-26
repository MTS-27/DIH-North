import { Heart, Building2, CreditCard } from "lucide-react";

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
            Your generous contributions help us maintain the branch, provide educational programs, and serve the community. May Allah reward you abundantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Branch Donation Section (SumUp) */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-t-8 border-brand-green transform transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full">
            <div className="bg-brand-green/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-brand-green" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Support Our Branch</h2>
            <p className="text-slate-600 mb-8 flex-grow">
              Donate directly to the Da'watul Islam Havering North Branch. These funds go towards our local operational costs, community events, and youth programs.
            </p>
            <div className="mt-auto">
              {/* Place SumUp link in the href below */}
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-green/90 text-white py-4 rounded-xl font-bold text-lg transition-all active:scale-95 shadow-md shadow-brand-green/20"
              >
                <CreditCard className="w-6 h-6" />
                Donate via SumUp
              </a>
              <p className="text-xs text-center text-slate-400 mt-4">Secure payments processed by SumUp</p>
            </div>
          </div>

          {/* Central Mosque Fund Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-t-8 border-brand-gold transform transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full">
            <div className="bg-brand-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Building2 className="h-8 w-8 text-brand-gold" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Central Mosque Fund</h2>
            <p className="text-slate-600 mb-8 flex-grow">
              Contributions to this fund go directly toward the central building and waqf projects, establishing a permanent home for our growing community.
            </p>
            <div className="mt-auto w-full aspect-video bg-slate-100 rounded-xl overflow-hidden relative flex items-center justify-center border-2 border-dashed border-slate-300">
               {/* 
                 TODO: <iframe src="KINDERTREE_OR_JUSTGIVING_WIDGET_URL" width="100%" height="100%" frameBorder="0" scrolling="no"></iframe> 
               */}
               <div className="text-center p-4">
                 <p className="text-slate-500 font-medium mb-2">Donation Widget Placeholder</p>
                 <p className="text-sm text-slate-400">Embed iFrame from Kindertree / JustGiving here.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
