import { ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Nav from './components/Nav';

function HeroLeft() {
  const containerStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '2rem' };
  const headingStyle: React.CSSProperties = {
    fontSize: '3rem',
    lineHeight: 1.05,
    fontWeight: 700,
    color: '#0f172a',
    margin: 0,
  };
  const paragraphStyle: React.CSSProperties = { fontSize: '1.125rem', color: '#4b5563', margin: 0 };
  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#0f172a',
    color: '#fff',
    padding: '0.75rem 2rem',
    borderRadius: 9999,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h1 style={headingStyle}>Make your security deposit work for you</h1>
        <p style={paragraphStyle}>From the day you move in, your money will grow with you</p>
      </div>

      <button style={buttonStyle}>
        Learn More
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-app-background text-app-foreground">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <HeroLeft />

        {/* Right Chart Visualization */}
        <div className="flex items-center justify-center">
          <Image
            src="/assets/Growing-chart-skyline.png"
            alt="Growing chart skyline"
            className="w-full max-w-md"
            width={400}
            height={300}
            priority
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-app-background border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative w-64 h-96 bg-stone-800 rounded-3xl shadow-lg border-8 border-black p-2">
              <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm text-stone-400 mb-4">Your Dashboard</div>
                  <div className="space-y-4">
                    <div className="h-2 bg-stone-200 rounded w-24 mx-auto"></div>
                    <div className="h-2 bg-stone-200 rounded w-32 mx-auto"></div>
                    <div className="h-2 bg-stone-200 rounded w-28 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Features List */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-stone-900">
              Set up your security deposit through us to start investing
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <ChevronRight className="text-stone-900 flex-shrink-0 mt-1" />
                <p className="text-stone-700">
                  Never choose again between putting down a deposit and starting investing
                </p>
              </div>
              
              <div className="flex gap-4">
                <ChevronRight className="text-stone-900 flex-shrink-0 mt-1" />
                <p className="text-stone-700">
                  Renting can become as good of an asset as buying property
                </p>
              </div>
              
              <div className="flex gap-4">
                <ChevronRight className="text-stone-900 flex-shrink-0 mt-1" />
                <p className="text-stone-700">
                  Learn to invest the second you start renting without any more work
                </p>
              </div>
              
              <div className="flex gap-4">
                <ChevronRight className="text-stone-900 flex-shrink-0 mt-1" />
                <p className="text-stone-700">
                  Moving in and between apartments becomes 10 times easier
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 mt-20">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="text-white font-bold">RASCACIELOS</div>
            <div>
              <h3 className="font-semibold text-white mb-3">FOR RENTERS</h3>
              <p className="text-sm hover:text-white cursor-pointer">OVERVIEW</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">INVESTORS</h3>
              <p className="text-sm hover:text-white cursor-pointer">JOIN US</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">COMPANY</h3>
              <p className="text-sm hover:text-white cursor-pointer">ABOUT US</p>
            </div>
          </div>
          
          <div className="border-t border-stone-700 pt-8 flex justify-between items-center text-sm">
            <p>COPYRIGHT © RASCACIELOS 2025</p>
            <div className="flex gap-4">
              <button className="hover:text-white transition">PRIVACY POLICY</button>
              <button className="hover:text-white transition">TERMS OF SERVICE</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}