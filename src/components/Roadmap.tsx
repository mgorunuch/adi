import React from 'react';

export default function Roadmap() {
  const timeline = [
    { year: '2024', quarter: 'Q3', label: 'Q3 2024' },
    { year: '', quarter: 'Oct', label: 'Oct 2024' },
    { year: '', quarter: 'Q4', label: 'Q4 2024' },
    { year: '2025', quarter: 'Q1', label: 'Q1 2025' },
    { year: '', quarter: 'Q2', label: 'Q2 2025' },
    { year: '', quarter: '→', label: 'Continuous Growth' }
  ];

  const marketingMilestones = [
    {
      position: 0,
      title: 'Problem Discovery',
      capabilities: '20+ dev teams interviewed',
      status: 'complete',
      date: 'Q3 2024'
    },
    {
      position: 1,
      title: 'Private Beta',
      capabilities: '2 companies, 50+ issues automated',
      status: 'current',
      date: 'Oct 2024'
    },
    {
      position: 2,
      title: 'GitHub Launch',
      capabilities: 'Open source, HackerNews, Reddit',
      status: 'upcoming',
      date: 'Q4 2024'
    },
    {
      position: 3,
      title: 'Paid Launch',
      capabilities: '$50/mo hosted, first 100 customers',
      status: 'upcoming',
      date: 'Q1 2025'
    },
    {
      position: 4,
      title: 'Enterprise',
      capabilities: 'Custom pricing, SOC2',
      status: 'upcoming',
      date: 'Q2 2025'
    },
    {
      position: 5,
      title: 'Growth',
      capabilities: 'Integrations marketplace',
      status: 'upcoming',
      date: '2025+'
    }
  ];

  const productMilestones = [
    {
      position: 0,
      title: 'MVP',
      capabilities: 'GitLab sync, single issue',
      status: 'complete',
      date: 'Q3 2024'
    },
    {
      position: 1,
      title: 'Bidirectional MR',
      capabilities: 'Auto PR, code review, merge',
      status: 'current',
      date: 'Oct 2024'
    },
    {
      position: 2,
      title: 'Batch Processing',
      capabilities: '10+ issues parallel',
      status: 'upcoming',
      date: 'Q4 2024'
    },
    {
      position: 3,
      title: 'Team Mode',
      capabilities: 'Agent per dev, coordination',
      status: 'upcoming',
      date: 'Q1 2025'
    },
    {
      position: 4,
      title: 'Enterprise',
      capabilities: 'SSO, audit logs, private deploy',
      status: 'upcoming',
      date: 'Q2 2025'
    },
    {
      position: 5,
      title: 'Platform',
      capabilities: 'GitHub, Jira, Linear support',
      status: 'upcoming',
      date: '2025+'
    }
  ];

  return (
    <section id="roadmap" className="max-w-7xl mx-auto border-x border-brand/10">
      {/* Built to expand heading */}
      <div className="p-6 sm:p-8 lg:p-12 border-b border-brand/10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-center">
          Built to <span className="text-brand bg-brand/10 px-2 py-1 rounded">expand</span>
        </h2>
      </div>

      <div className="border-b border-brand/10 bg-gradient-to-b from-transparent via-black/[0.02] to-transparent">
        <div className="p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="w-full mx-auto">
            {/* Desktop Layout */}
            <div className="hidden md:block">
              {/* One big grid */}
              <div className="grid grid-cols-[1fr_auto_auto_auto_1fr] gap-x-4 gap-y-8">
                {/* Headers */}
                <div className="text-sm font-bold text-brand tracking-wider text-right mb-4">MARKETING</div>
                <div></div>
                <div className="relative"></div>
                <div></div>
                <div className="text-sm font-bold text-brand tracking-wider mb-4">PRODUCT</div>

                {/* Timeline Rows */}
                {timeline.map((timeItem, timeIndex) => {
                  const marketing = marketingMilestones.find(m => m.position === timeIndex);
                  const product = productMilestones.find(m => m.position === timeIndex);
                  const milestone = marketing || product;
                  const hasMilestone = !!milestone;

                  return (
                    <React.Fragment key={timeIndex}>
                      {/* Left: Marketing Milestone */}
                      <div className="text-right space-y-2 flex flex-col justify-center">
                        {marketing && (
                          <>
                            <div className="flex items-center justify-end gap-3">
                              {marketing.status === 'current' && (
                                <div className="inline-block px-2 py-1 bg-brand text-white text-xs font-bold rounded animate-pulse">
                                  We are here →
                                </div>
                              )}
                              {marketing.status === 'complete' && (
                                <div className="inline-block px-2 py-1 bg-green-500/20 text-green-500 text-xs font-bold rounded">
                                  ✓ Complete
                                </div>
                              )}
                              <div className="text-xl font-bold text-foreground">
                                {marketing.title}
                              </div>
                            </div>
                            <div className="text-xs text-muted-foreground font-semibold">
                              {marketing.date}
                            </div>
                            <div className="text-sm text-muted-foreground leading-relaxed">
                              {marketing.capabilities}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Year */}
                      <div className="flex items-center justify-end">
                        <div className={`text-sm font-medium ${hasMilestone ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {timeItem.year}
                        </div>
                      </div>

                      {/* Center: Timeline Dot */}
                      <div className="relative flex items-center justify-center">
                        {/* Vertical line segment that extends into gaps */}
                        <div className="absolute left-1/2 -ml-px -top-4 -bottom-4 w-px bg-brand/40 -z-10"></div>
                        {hasMilestone && (
                          <div className="relative z-10">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                              milestone?.status === 'complete' ? 'bg-green-500' :
                              milestone?.status === 'current' ? 'bg-brand ring-4 ring-brand/20 animate-pulse' :
                              'bg-background border-2 border-brand/60'
                            }`}>
                              {milestone?.status === 'complete' && (
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                              {milestone?.status === 'current' && (
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Quarter */}
                      <div className="flex items-center">
                        <div className={`text-sm font-medium ${hasMilestone ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {timeItem.quarter}
                        </div>
                      </div>

                      {/* Right: Product Milestone */}
                      <div className="space-y-2 flex flex-col justify-center">
                        {product && (
                          <>
                            <div className="flex items-center gap-3">
                              <div className="text-xl font-bold text-foreground">
                                {product.title}
                              </div>
                              {product.status === 'current' && (
                                <div className="inline-block px-2 py-1 bg-brand text-white text-xs font-bold rounded animate-pulse">
                                  ← We are here
                                </div>
                              )}
                              {product.status === 'complete' && (
                                <div className="inline-block px-2 py-1 bg-green-500/20 text-green-500 text-xs font-bold rounded">
                                  ✓ Complete
                                </div>
                              )}
                            </div>
                            <div className="text-xs text-muted-foreground font-semibold">
                              {product.date}
                            </div>
                            <div className="text-sm text-muted-foreground leading-relaxed">
                              {product.capabilities}
                            </div>
                          </>
                        )}
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Mobile Layout - Simplified cards */}
            <div className="md:hidden space-y-8">
              {timeline.map((timeItem, timeIndex) => {
                const marketing = marketingMilestones.find(m => m.position === timeIndex);
                const product = productMilestones.find(m => m.position === timeIndex);

                if (!marketing && !product) return null;

                return (
                  <div key={timeIndex} className="space-y-4">
                    <div className="text-center">
                      <div className="text-sm font-bold text-brand">{timeItem.label}</div>
                    </div>

                    {/* Marketing Card */}
                    {marketing && (
                      <div className={`border rounded-lg p-6 ${
                        marketing.status === 'current' ? 'border-brand bg-brand/5' :
                        marketing.status === 'complete' ? 'border-green-500/50 bg-green-500/5' :
                        'border-brand/20 bg-black/[0.01]'
                      }`}>
                        <div className="mb-2">
                          <div className="text-xs text-brand font-bold mb-2">MARKETING</div>
                          <div className="flex items-start gap-4">
                            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                              marketing.status === 'complete' ? 'bg-green-500' :
                              marketing.status === 'current' ? 'bg-brand ring-4 ring-brand/20 animate-pulse' :
                              'bg-background border-2 border-brand/60'
                            }`}>
                              {marketing.status === 'complete' && (
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                              {marketing.status === 'current' && (
                                <div className="w-3 h-3 rounded-full bg-white"></div>
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="text-xl font-bold text-foreground mb-2">
                                {marketing.title}
                              </div>
                              {marketing.status === 'current' && (
                                <div className="inline-block px-2 py-1 bg-brand text-white text-xs font-bold rounded mb-2">
                                  ← We are here
                                </div>
                              )}
                              {marketing.status === 'complete' && (
                                <div className="inline-block px-2 py-1 bg-green-500/20 text-green-500 text-xs font-bold rounded mb-2">
                                  ✓ Complete
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground leading-relaxed">
                          {marketing.capabilities}
                        </div>
                      </div>
                    )}

                    {/* Product Card */}
                    {product && (
                      <div className={`border rounded-lg p-6 ${
                        product.status === 'current' ? 'border-brand bg-brand/5' :
                        product.status === 'complete' ? 'border-green-500/50 bg-green-500/5' :
                        'border-brand/20 bg-black/[0.01]'
                      }`}>
                        <div className="mb-2">
                          <div className="text-xs text-brand font-bold mb-2">PRODUCT</div>
                          <div className="flex items-start gap-4">
                            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                              product.status === 'complete' ? 'bg-green-500' :
                              product.status === 'current' ? 'bg-brand ring-4 ring-brand/20 animate-pulse' :
                              'bg-background border-2 border-brand/60'
                            }`}>
                              {product.status === 'complete' && (
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                              {product.status === 'current' && (
                                <div className="w-3 h-3 rounded-full bg-white"></div>
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="text-xl font-bold text-foreground mb-2">
                                {product.title}
                              </div>
                              {product.status === 'current' && (
                                <div className="inline-block px-2 py-1 bg-brand text-white text-xs font-bold rounded mb-2">
                                  ← We are here
                                </div>
                              )}
                              {product.status === 'complete' && (
                                <div className="inline-block px-2 py-1 bg-green-500/20 text-green-500 text-xs font-bold rounded mb-2">
                                  ✓ Complete
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground leading-relaxed">
                          {product.capabilities}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Growth Loop section */}
        <div className="border-t border-brand/10">
          <div className="p-6 sm:p-8 lg:p-12 border-b border-brand/10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-center">
              Growth <span className="text-brand bg-brand/10 px-2 py-1 rounded">Loop</span>
            </h2>
          </div>

              {/* Enhanced grid layout with icons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-b border-brand/10">
                {[
                  {
                    label: 'Usage',
                    subtitle: 'Teams adopt',
                    icon: (
                      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )
                  },
                  {
                    label: 'PRs',
                    subtitle: 'More merges',
                    icon: (
                      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    )
                  },
                  {
                    label: 'Visibility',
                    subtitle: 'Word spreads',
                    icon: (
                      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    )
                  },
                  {
                    label: 'Teams',
                    subtitle: 'More join',
                    icon: (
                      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )
                  },
                  {
                    label: 'Features',
                    subtitle: 'Ship faster',
                    icon: (
                      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )
                  },
                  {
                    label: 'Repeat',
                    subtitle: '',
                    icon: (
                      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    )
                  }
                ].map((node, index, arr) => (
                  <div
                    key={node.label}
                    className={`p-6 sm:p-8 lg:p-12 hover:bg-brand/10 transition-colors
                      ${index < 4 ? 'border-b border-brand/10' : ''}
                      ${index % 2 === 0 ? 'border-r border-brand/10' : ''}
                      sm:${index < 3 ? 'border-b' : 'border-b-0'} sm:border-brand/10
                      sm:${index % 3 !== 2 ? 'border-r' : 'border-r-0'}
                      lg:border-b-0 lg:${index < arr.length - 1 ? 'border-r' : 'border-r-0'}
                    `}
                  >
                    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                      <div className="text-brand/70">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16">
                          {node.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-1 sm:mb-2">{node.label}</div>
                        <div className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-tight">{node.subtitle}</div>
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
