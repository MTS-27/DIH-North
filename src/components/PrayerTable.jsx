"use client";

import { useState, useEffect } from "react";
import { Clock, Calendar } from "lucide-react";

export default function PrayerTable() {
  const [prayerTimes, setPrayerTimes] = useState([
    { name: "Fajr", start: "--:--", jamaah: "--:--" },
    { name: "Zuhr", start: "--:--", jamaah: "--:--" },
    { name: "Asr", start: "--:--", jamaah: "--:--" },
    { name: "Maghrib", start: "--:--", jamaah: "--:--" },
    { name: "Isha", start: "--:--", jamaah: "--:--" },
  ]);

  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Fetch live prayer times from London Prayer Times API
    const fetchPrayerTimes = async () => {
      try {
        // Format date to YYYY-MM-DD
        const today = new Date().toISOString().split('T')[0];
        const res = await fetch(`https://www.londonprayertimes.com/api/times/?format=json&key=71664292-21c9-4049-9aa8-34f3c6ecf96b&24hours=true&date=${today}`);
        const data = await res.json();
        
        if (data && data.fajr) {
          setPrayerTimes([
            { name: "Fajr", start: data.fajr, jamaah: data.fajr_jamat },
            { name: "Zuhr", start: data.dhuhr, jamaah: data.dhuhr_jamat },
            { name: "Asr", start: data.asr, jamaah: data.asr_jamat },
            { name: "Maghrib", start: data.magrib, jamaah: data.magrib_jamat },
            { name: "Isha", start: data.isha, jamaah: data.isha_jamat },
          ]);
        }
      } catch (error) {
        console.error("Failed to fetch prayer times:", error);
      }
    };

    fetchPrayerTimes();

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="prayer-times" className="py-20 relative overflow-hidden bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-green blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-brand-gold blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 inline-block relative">
            Prayer Times
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-brand-gold rounded-full"></span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4">
            Join us for daily congregational prayers at the Havering North Branch.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 overflow-hidden transform transition-all hover:shadow-2xl">
          <div className="bg-brand-green text-white p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <Calendar className="h-6 w-6 text-brand-gold" />
              </div>
              <div>
                <p className="text-sm text-brand-gold font-medium uppercase tracking-wider">Today's Date</p>
                <p className="text-lg font-semibold">{currentDate || "Loading..."}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <Clock className="h-6 w-6 text-brand-gold" />
              </div>
              <div>
                <p className="text-sm text-brand-gold font-medium uppercase tracking-wider">Current Time</p>
                <p className="text-lg font-semibold">{currentTime || "Loading..."}</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-slate-400 font-medium uppercase tracking-wider border-b border-slate-100">Prayer</th>
                  <th className="py-4 px-6 text-slate-400 font-medium uppercase tracking-wider border-b border-slate-100 text-center">Start Time</th>
                  <th className="py-4 px-6 text-slate-400 font-medium uppercase tracking-wider border-b border-slate-100 text-right">Jama'ah</th>
                </tr>
              </thead>
              <tbody>
                {prayerTimes.map((prayer, index) => (
                  <tr 
                    key={prayer.name} 
                    className="group transition-colors hover:bg-slate-50/50"
                  >
                    <td className="py-5 px-6 border-b border-slate-50">
                      <span className="font-bold text-xl text-slate-800 group-hover:text-brand-green transition-colors">
                        {prayer.name}
                      </span>
                    </td>
                    <td className="py-5 px-6 border-b border-slate-50 text-center">
                      <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 rounded-lg font-mono text-lg">
                        {prayer.start}
                      </span>
                    </td>
                    <td className="py-5 px-6 border-b border-slate-50 text-right">
                      <span className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green rounded-lg font-mono text-lg font-semibold">
                        {prayer.jamaah}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="group transition-colors hover:bg-slate-50/50">
                   <td className="py-5 px-6 border-b border-slate-50">
                      <span className="font-bold text-xl text-slate-800 group-hover:text-brand-green transition-colors">
                        Jumu'ah
                      </span>
                    </td>
                    <td className="py-5 px-6 border-b border-slate-50 text-center text-slate-500">
                      -
                    </td>
                    <td className="py-5 px-6 border-b border-slate-50 text-right">
                      <span className="inline-block px-4 py-1.5 bg-brand-gold/20 text-brand-brown rounded-lg font-mono text-lg font-bold">
                        13:30
                      </span>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
