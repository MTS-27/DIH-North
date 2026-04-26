export const metadata = {
  title: "About Us | Da'watul Islam Havering North",
  description: "Learn about the history and mission of Da'watul Islam Havering North Branch.",
};

export default function About() {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-8">About Us</h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Da'watul Islam Havering North Branch is dedicated to serving the local Muslim community. 
          Our mission is to foster spiritual growth, provide Islamic education, and build a cohesive, 
          supportive environment for all ages.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          More details about our history, board members, and vision will be added here soon.
        </p>
      </div>
    </div>
  );
}
