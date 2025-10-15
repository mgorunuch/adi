import { FaCode, FaBullhorn, FaCog, FaCheckCircle, FaRocket } from 'react-icons/fa';

export default function FundingAsk() {
  const useOfFunds = [
    {
      category: 'Product Development',
      percentage: 50,
      amount: '$500K-1M',
      icon: FaCode,
      color: '#8b5cf6',
      items: [
        'Hire 2-3 senior engineers',
        'GitHub, Jira, Linear integrations',
        'Batch processing & team mode',
        'Enterprise features (SSO, audit logs, private deploy)'
      ]
    },
    {
      category: 'Go-to-Market',
      percentage: 30,
      amount: '$300K-600K',
      icon: FaBullhorn,
      color: '#3b82f6',
      items: [
        'Hire marketing/growth lead',
        'Major open-source launch campaign',
        'Developer relations & community',
        'Conference presence & content'
      ]
    },
    {
      category: 'Operations',
      percentage: 20,
      amount: '$200K-400K',
      icon: FaCog,
      color: '#10b981',
      items: [
        '12-18 month runway',
        'Premium infrastructure & hosting',
        'Legal, compliance & SOC2',
        'Tools, services & hiring costs'
      ]
    }
  ];

  const milestones = [
    {
      title: 'GitHub Launch',
      target: '10K stars',
      timeline: 'Q4 2025',
      status: 'upcoming'
    },
    {
      title: 'Scale Onboarding',
      target: '1,000 teams',
      timeline: 'Q1 2026',
      status: 'upcoming'
    },
    {
      title: 'Revenue Milestone',
      target: '$100K MRR',
      timeline: 'Q2 2026',
      status: 'upcoming'
    },
    {
      title: 'PMF + Profitability',
      target: 'Path validated',
      timeline: 'Q3-Q4 2026',
      status: 'upcoming'
    }
  ];

  return (
    <section id="funding-ask" className="max-w-7xl mx-auto border-x border-brand/10">
      {/* Heading */}
      <div className="p-6 sm:p-8 lg:p-12 border-b border-brand/10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-center">
          The <span className="text-brand bg-brand/10 px-2 py-1 rounded">Ask</span>
        </h2>
      </div>

      {/* Funding Amount */}
      <div className="border-b border-brand/10 bg-gradient-to-b from-brand/[0.03] to-transparent">
        <div className="p-6 sm:p-8 lg:p-12 text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-brand uppercase tracking-wider bg-brand/10 px-3 py-1 rounded">
              Raising Now
            </span>
          </div>
          <div className="flex items-baseline justify-center gap-3 mb-4">
            <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-brand">$1-2M</span>
          </div>
          <div className="text-lg sm:text-xl text-muted-foreground mb-2">
            Pre-Seed Round
          </div>
          <div className="text-sm text-muted-foreground max-w-2xl mx-auto">
            12-18 month runway to PMF validation, $100K MRR, and profitability path
          </div>
        </div>
      </div>

      {/* Use of Funds */}
      <div className="border-b border-brand/10">
        <div className="p-6 sm:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            Use of Funds
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useOfFunds.map((fund) => {
              const Icon = fund.icon;
              return (
                <div
                  key={fund.category}
                  className="border border-brand/20 rounded-lg p-6 bg-black/[0.01] hover:bg-black/[0.02] transition-colors"
                >
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="inline-block p-3 rounded-lg bg-brand/10 mb-3">
                        <Icon style={{ color: fund.color }} className="text-2xl" />
                      </div>
                      <div className="text-lg font-bold text-foreground mb-2">
                        {fund.category}
                      </div>
                      <div className="flex items-baseline gap-2">
                        <div className="text-3xl font-bold text-brand">
                          {fund.percentage}%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {fund.amount}
                        </div>
                      </div>
                    </div>

                    {/* Items */}
                    <ul className="space-y-2 text-sm">
                      {fund.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 text-brand flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Next Raise */}
      <div className="border-b border-brand/10 bg-gradient-to-b from-transparent to-brand/[0.02]">
        <div className="p-6 sm:p-8 lg:p-12 text-center">
          <div className="inline-block mb-4">
            <FaRocket className="text-brand text-3xl mx-auto mb-2" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
            Next Raise: Seed
          </h3>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div>
              <div className="font-bold text-brand text-xl mb-1">$15-25M</div>
              <div className="text-xs">Target valuation</div>
            </div>
            <div className="w-px h-12 bg-brand/20" />
            <div>
              <div className="font-bold text-brand text-xl mb-1">$100K MRR</div>
              <div className="text-xs">At milestone</div>
            </div>
            <div className="w-px h-12 bg-brand/20" />
            <div>
              <div className="font-bold text-brand text-xl mb-1">12-18 mo</div>
              <div className="text-xs">Timeline</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
