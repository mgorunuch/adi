import { FaUsers, FaDollarSign, FaChartLine } from 'react-icons/fa';

export default function GrowthProjections() {
  const userGrowth = [
    { quarter: 'Q4 2025', totalTeams: 100, paidTeams: 0, mrr: '$0', status: 'Beta' },
    { quarter: 'Q1 2026', totalTeams: 500, paidTeams: 50, mrr: '$3K', status: 'Launch' },
    { quarter: 'Q2 2026', totalTeams: 1500, paidTeams: 200, mrr: '$12.5K', status: 'Growth' },
    { quarter: 'Q3 2026', totalTeams: 3500, paidTeams: 600, mrr: '$37K', status: 'Scale' },
    { quarter: 'Q4 2026', totalTeams: 7000, paidTeams: 2100, mrr: '$130K', status: 'Scale' }
  ];

  const revenueMilestones = [
    { year: '2026', arr: '$500K-750K', teams: '2,100 paying', description: 'Product-market fit validation' },
    { year: '2027', arr: '$2.5M', teams: '~4,000 paying', description: 'Breakthrough to $1M ARR mid-year' },
    { year: '2028', arr: '$8M', teams: '~10,000 paying', description: 'Enterprise expansion phase' }
  ];

  return (
    <section id="growth-projections" className="max-w-7xl mx-auto border-x border-brand/10">
      {/* Heading */}
      <div className="p-6 sm:p-8 lg:p-12 border-b border-brand/10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-center">
          Growth <span className="text-brand bg-brand/10 px-2 py-1 rounded">Trajectory</span>
        </h2>
      </div>

      {/* User Growth Timeline & Revenue Milestones */}
      <div className="border-b border-brand/10 bg-gradient-to-b from-transparent via-black/[0.02] to-transparent">
        <div className="p-6 sm:p-8 lg:p-12">
          {/* Desktop: Table Layout */}
          <div className="hidden md:block overflow-x-auto mb-8">
            <table className="w-full border border-brand/20 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-brand/10 border-b border-brand/20">
                  <th className="text-left p-4 text-sm font-bold text-foreground uppercase tracking-wider">Quarter</th>
                  <th className="text-right p-4 text-sm font-bold text-foreground uppercase tracking-wider">Total Teams</th>
                  <th className="text-right p-4 text-sm font-bold text-foreground uppercase tracking-wider">Paid Teams</th>
                  <th className="text-right p-4 text-sm font-bold text-foreground uppercase tracking-wider">MRR</th>
                  <th className="text-right p-4 text-sm font-bold text-foreground uppercase tracking-wider">Stage</th>
                </tr>
              </thead>
              <tbody>
                {userGrowth.map((row, idx) => (
                  <tr
                    key={row.quarter}
                    className={`border-b border-brand/10 hover:bg-brand/[0.02] transition-colors ${
                      idx === userGrowth.length - 1 ? 'bg-brand/[0.05]' : ''
                    }`}
                  >
                    <td className="p-4 font-semibold text-foreground">{row.quarter}</td>
                    <td className="p-4 text-right text-muted-foreground">{row.totalTeams.toLocaleString()}</td>
                    <td className="p-4 text-right font-bold text-brand">{row.paidTeams.toLocaleString()}</td>
                    <td className="p-4 text-right font-bold text-foreground">{row.mrr}</td>
                    <td className="p-4 text-right">
                      <span className="inline-block px-2 py-1 bg-brand/10 text-brand text-xs font-bold rounded">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: Card Layout */}
          <div className="md:hidden space-y-4 mb-8">
            {userGrowth.map((row, idx) => (
              <div
                key={row.quarter}
                className={`border border-brand/20 rounded-lg p-4 ${
                  idx === userGrowth.length - 1 ? 'bg-brand/[0.05] border-brand' : 'bg-black/[0.01]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-lg font-bold text-foreground">{row.quarter}</div>
                  <span className="inline-block px-2 py-1 bg-brand/10 text-brand text-xs font-bold rounded">
                    {row.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Total Teams</div>
                    <div className="text-lg font-semibold text-foreground">{row.totalTeams.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Paid Teams</div>
                    <div className="text-lg font-bold text-brand">{row.paidTeams.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">MRR</div>
                    <div className="text-lg font-bold text-foreground">{row.mrr}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Revenue Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {revenueMilestones.map((milestone, idx) => (
              <div
                key={milestone.year}
                className="border border-brand/20 rounded-lg p-6 bg-black/[0.01] hover:bg-brand/[0.02] transition-colors text-center"
              >
                <div className="mb-4">
                  <div className="text-sm font-bold text-brand uppercase tracking-wider mb-2">
                    {milestone.year}
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {milestone.arr}
                  </div>
                  <div className="text-sm text-muted-foreground font-semibold">
                    {milestone.teams}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {milestone.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Growth Assumptions */}
      <div className="border-b border-brand/10 bg-gradient-to-b from-transparent to-brand/[0.02]">
        <div className="p-6 sm:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
            Key Assumptions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-block p-3 rounded-lg bg-brand/10 mb-3">
                <FaUsers className="text-brand text-2xl" />
              </div>
              <div className="text-2xl font-bold text-brand mb-2">30%</div>
              <div className="text-sm text-muted-foreground">Free to paid conversion</div>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 rounded-lg bg-brand/10 mb-3">
                <FaDollarSign className="text-brand text-2xl" />
              </div>
              <div className="text-2xl font-bold text-brand mb-2">$62.50</div>
              <div className="text-sm text-muted-foreground">ARPU (2.5M tokens/mo)</div>
            </div>
            <div className="text-center">
              <div className="inline-block p-3 rounded-lg bg-brand/10 mb-3">
                <FaChartLine className="text-brand text-2xl" />
              </div>
              <div className="text-2xl font-bold text-brand mb-2">25-30%</div>
              <div className="text-sm text-muted-foreground">Annual growth rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
