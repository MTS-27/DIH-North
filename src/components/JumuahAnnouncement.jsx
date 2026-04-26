import { MapPin, Clock, Car, Users, Info } from "lucide-react";

export default function JumuahAnnouncement() {
  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-br from-brand-green to-[#1e521e] rounded-3xl shadow-2xl overflow-hidden relative">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>
          
          <div className="p-8 md:p-12 relative z-10 text-white">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              
              <div className="w-full md:w-2/3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-gold text-brand-brown rounded-full font-bold text-sm uppercase tracking-wider mb-6 shadow-sm">
                  <span className="animate-pulse">📢</span> Weekly Announcement
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  Jumu'ah at Harold Hill / Harold Wood
                </h2>
                
                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl shrink-0">
                      <Clock className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Timing</h3>
                      <p className="text-white/80 text-lg">Khutbah begins strictly at <span className="font-bold text-brand-gold">1:30 PM</span></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl shrink-0">
                      <MapPin className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Venue</h3>
                      <p className="text-white/80 text-lg">
                        Rockchase Sport Centre<br/>
                        Creative House, Bryant Ave, Romford RM3 0AP
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl shrink-0">
                      <Users className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Sisters</h3>
                      <p className="text-white/80 text-lg">Designated prayer space is available for sisters.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-inner">
                <div className="flex items-center gap-2 mb-4">
                  <Car className="w-5 h-5 text-brand-gold" />
                  <h3 className="text-lg font-bold">Parking Rules</h3>
                </div>
                <ul className="space-y-3 text-white/90">
                  <li className="flex gap-2">
                    <span className="text-brand-gold">•</span>
                    Parking is available at the Tesco car park.
                  </li>
                  <li className="flex gap-2 font-bold text-red-300">
                    <span className="text-brand-gold">•</span>
                    Strictly NO parking on the road.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-gold">•</span>
                    Please car-share if possible.
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
