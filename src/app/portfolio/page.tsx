// Version 12.0.1 - Enhanced Portfolio Page with purple accents and dark theme
import StatsSection from '../../components/stats-section';
import PortfolioCards from '../../components/portfolio-cards';
import RootLayout from '../../components/root-layout';

export default function Portfolio() {
  return (
    <RootLayout>
      <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Portfolio
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I have advised and invested in ambitious teams building innovative products who focus on unit economics optimized business models since 2019.
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="mb-16">
          <StatsSection />
        </div>
        
        {/* Portfolio Cards */}
        <div className="mb-12">
          <PortfolioCards />
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="/profile" 
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium 
                      hover:from-purple-500 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-purple-800/30"
          >
            Back to Profile
          </a>
        </div>
      </div>
    </RootLayout>
  );
}