import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8 border-t-4 border-brand-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <img src="/assets/logo.png" alt="Logo" className="w-12 h-12 rounded-full object-contain bg-white p-1" />
              <h3 className="text-xl font-bold text-white">Da'watul Islam <br /><span className="text-brand-gold text-base">Havering North</span></h3>
            </div>
            <p className="text-sm leading-relaxed">
              Serving the community by providing a welcoming space for prayer, education, and spiritual growth in Havering North.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-gold transition-colors">Our Services</Link></li>
              <li><Link href="/donations" className="hover:text-brand-gold transition-colors">Donations & Waqf</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span>Havering North Branch<br />London, UK</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-green shrink-0" />
                <span>+44 1234 567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-green shrink-0" />
                <span>info@dihnorth.org.uk</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Da'watul Islam Havering North Branch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
