import Link from "next/link";

const FacebookIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12 2.04c-5.5 0-10 4.48-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.54-4.5-10.02-10-10.02Z"/>
  </svg>
);

export default function SocialFeed() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-2">
              <FacebookIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Stay Connected with Our Community
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Follow our Facebook page for the latest updates on events, classes, community initiatives, and urgent announcements from the Da'watul Islam Havering North Branch.
            </p>
            
            <div className="pt-4">
              <a 
                href="https://www.facebook.com/DIHNorth/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <FacebookIcon className="h-5 w-5" />
                Follow us on Facebook
              </a>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border-4 border-white aspect-[4/3] flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-brand-green/10 z-0"></div>
              
              {/* Fallback visual if iframe isn't ideal or fails */}
              <div className="text-center z-10 p-8 transform transition-transform group-hover:scale-105">
                 <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                   <img src="/assets/logo.jpg" alt="Logo" className="w-14 h-14 rounded-full object-contain" />
                 </div>
                 <h3 className="font-bold text-xl text-slate-800 mb-2">Da'watul Islam Havering North</h3>
                 <p className="text-blue-600 font-medium">@DIHNorth</p>
              </div>
              {/* To embed actual facebook feed, you would replace this container with the Facebook Page Plugin iframe */}
              {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDIHNorth%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="500" style={{border:'none', overflow:'hidden'}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" className="absolute inset-0 w-full h-full object-cover z-20 opacity-0 transition-opacity duration-500 hover:opacity-100"></iframe> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
