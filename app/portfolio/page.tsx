'use client';

// Import components for optimized rendering
import MetricsSummaryStandalone from '../components/metrics-summary-standalone';
import IntegratedPortfolioGallery from '../components/integrated-portfolio-gallery';

/**
 * Portfolio Page Component
 * 
 * Uses static metrics data for instant rendering of metrics summary
 * and a simplified portfolio gallery with direct filtering.
 */
export default function PortfolioPage() {
  return (
    <div className="pt-16 pb-16">
      <section className="section">
        <div className="container max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Portfolio</h1>
          
          {/* Investment Philosophy */}
          <p className="text-lg text-text-tertiary mb-8 max-w-3xl">
            I have advised and invested in ambitious teams building innovative products who focus on unit economics optimized business models since 2019.
          </p>
          
          {/* Metrics load instantly with static data */}
          <div className="mb-12">
            <MetricsSummaryStandalone />
          </div>
          
          {/* Use the simplified, direct integrated portfolio gallery */}
          <div className="mt-8">
            <IntegratedPortfolioGallery />
          </div>
        </div>
      </section>
    </div>
  );
}