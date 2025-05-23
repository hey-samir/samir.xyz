'use client';

interface MetricCardProps {
  label: string;
  value: string | number;
}

/**
 * Reusable MetricCard component for displaying portfolio metrics
 */
export default function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="metric-card">
      <div className="text-xs sm:text-sm text-white/70 mb-1">{label}</div>
      <div className="text-xl sm:text-2xl font-medium text-white">{value}</div>
    </div>
  );
}