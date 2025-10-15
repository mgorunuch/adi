import { FaGlobeEurope, FaChartLine, FaUsers, FaRocket } from 'react-icons/fa';

export default function MarketOpportunity() {
  const markets = [
    {
      title: 'TAM',
      subtitle: 'Total Addressable Market',
      value: '$47.3B',
      timeframe: 'by 2034',
      description: 'Global AI coding tools market',
      details: '82% of 28M+ developers worldwide already using AI tools',
      icon: FaGlobeEurope,
      color: '#8b5cf6'
    },
    {
      title: 'SAM',
      subtitle: 'Serviceable Addressable Market',
      value: '$15B',
      timeframe: 'by 2030',
      description: 'EU + US enterprise dev teams',
      details: 'Target: SMBs & Enterprises with 10-500 developers',
      icon: FaChartLine,
      color: '#3b82f6'
    },
    {
      title: 'SOM',
      subtitle: 'Serviceable Obtainable Market',
      value: '$150M',
      timeframe: '1% market share',
      description: 'Year 1-3 realistic capture',
      details: 'Open-source-first GTM, 2,000 teams initial target',
      icon: FaRocket,
      color: '#10b981'
    }
  ];

  const geographyFocus = [
    {
      region: 'European Union',
      status: 'Primary Target',
      value: '3.5M ICT specialists',
      reason: 'Nearshoring hub, strong developer ecosystem',
      color: '#3b82f6'
    },
    {
      region: 'United States',
      status: 'Secondary Target',
      value: 'High-value market',
      reason: 'Premium pricing, GitHub ecosystem leverage',
      color: '#10b981'
    }
  ];

  return (
    <section id="market-opportunity" className="max-w-7xl mx-auto border-x border-brand/10">
      {/* Heading */}
      <div className="p-6 sm:p-8 lg:p-12 border-b border-brand/10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-center">
          Market <span className="text-brand bg-brand/10 px-2 py-1 rounded">Opportunity</span>
        </h2>
      </div>

      {/* TAM/SAM/SOM Grid */}
      <div className="border-b border-brand/10 bg-gradient-to-b from-transparent via-black/[0.02] to-transparent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {markets.map((market, idx) => {
            const Icon = market.icon;
            return (
              <div
                key={market.title}
                className={`p-6 sm:p-8 lg:p-12 bg-black/[0.01] hover:bg-black/[0.03] transition-colors ${
                  idx < markets.length - 1 ? 'md:border-r border-b md:border-b-0 border-brand/10' : ''
                }`}
              >
                <div className="flex flex-col h-full">
                  {/* Icon & Header */}
                  <div className="mb-6">
                    <div className="inline-block p-3 rounded-lg bg-brand/10 mb-4">
                      <Icon style={{ color: market.color }} className="text-2xl sm:text-3xl" />
                    </div>
                    <div className="mb-2">
                      <div className="text-xs font-bold text-brand uppercase tracking-wider mb-1">
                        {market.title}
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">
                        {market.subtitle}
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <div className="text-3xl sm:text-4xl font-bold text-foreground">
                        {market.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {market.timeframe}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    <div className="text-base font-semibold text-foreground">
                      {market.description}
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {market.details}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Target Geography */}
      <div className="border-b border-brand/10">
        <div className="p-6 sm:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            Geographic Focus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {geographyFocus.map((geo) => (
              <div
                key={geo.region}
                className="border border-brand/20 rounded-lg p-6 bg-black/[0.01] hover:bg-black/[0.02] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-3 h-3 rounded-full mt-1.5"
                    style={{ backgroundColor: geo.color }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-lg font-bold text-foreground">
                        {geo.region}
                      </div>
                      <div className="inline-block px-2 py-1 bg-brand/10 text-brand text-xs font-bold rounded">
                        {geo.status}
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-2">
                      {geo.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {geo.reason}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
