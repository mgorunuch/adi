'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 0, manual: 0, ai: 0 },
  { month: 3, manual: 3, ai: 55 },
  { month: 6, manual: 7, ai: 115 },
  { month: 9, manual: 10, ai: 175 },
  { month: 12, manual: 13, ai: 215 },
  { month: 15, manual: 15, ai: 235 },
  { month: 18, manual: 20, ai: 240 },
];

export default function UnfairInsight() {

  return (
    <section id="unfair-insight" className="max-w-7xl mx-auto border-x border-brand/10">
      {/* Full-width heading */}
      <div className="p-8 lg:p-12 border-b border-brand/10">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-center">
          60% of your backlog is{' '}
          <span className="text-brand bg-brand/10 px-2 py-1 rounded">AI-solvable</span> today
        </h2>
      </div>

      <div className="grid lg:grid-cols-[58%_42%] border-b border-brand/10 min-h-[600px]">
        {/* Left: Chart */}
        <div className="p-8 lg:p-12 bg-gradient-to-br from-black/5 to-black/10 flex items-center justify-center border-r border-brand/10">
          <div className="w-full h-[450px]">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-foreground">Issues Resolved (Cumulative)</h3>
              <p className="text-sm text-muted-foreground">Over 18 months</p>
            </div>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <defs>
                  <linearGradient id="gapGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis
                  dataKey="month"
                  stroke="rgba(255,255,255,0.5)"
                  label={{ value: 'Months', position: 'insideBottom', offset: -10, fill: 'rgba(255,255,255,0.5)' }}
                  tick={{ fill: 'rgba(255,255,255,0.6)' }}
                />
                <YAxis
                  stroke="rgba(255,255,255,0.5)"
                  label={{ value: 'Issues Resolved', angle: -90, position: 'insideLeft', fill: 'rgba(255,255,255,0.5)' }}
                  tick={{ fill: 'rgba(255,255,255,0.6)' }}
                  domain={[0, 250]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.9)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    padding: '12px'
                  }}
                  labelStyle={{ color: 'rgba(255,255,255,0.9)', marginBottom: '8px' }}
                  itemStyle={{ color: 'rgba(255,255,255,0.9)' }}
                />
                <Legend
                  wrapperStyle={{ paddingTop: '10px' }}
                  iconType="line"
                />
                {/* Gap area between manual and AI */}
                <defs>
                  <clipPath id="gapClip">
                    <rect x="0" y="0" width="100%" height="100%" />
                  </clipPath>
                </defs>
                <Line
                  type="monotone"
                  dataKey="manual"
                  stroke="#60a5fa"
                  strokeWidth={4}
                  dot={{ fill: '#60a5fa', r: 5 }}
                  activeDot={{ r: 7 }}
                  name="Manual Workflow"
                />
                <Line
                  type="monotone"
                  dataKey="ai"
                  stroke="#22c55e"
                  strokeWidth={4}
                  dot={{ fill: '#22c55e', r: 5 }}
                  activeDot={{ r: 7 }}
                  name="AI-Assisted Workflow"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="text-center mt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 border-l-4 border-brand">
                <div className="w-3 h-3 bg-brand animate-pulse" />
                <span className="text-sm font-semibold text-brand">12× more issues resolved with AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="p-8 lg:p-12 xl:p-16 flex flex-col justify-center space-y-8">
          {/* Research data */}
          <div className="space-y-4">
            <div className="inline-block border-l-4 border-brand pl-3 text-xs font-semibold text-brand uppercase tracking-wide">
              IEEE DataPort Study, 2024
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Analysis of <span className="text-foreground font-semibold">22 software projects</span> with{' '}
              <span className="text-foreground font-semibold">1,680 backlog items</span> shows consistent patterns
            </p>
          </div>

          {/* Backlog breakdown */}
          <div className="space-y-4">
            <div className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Backlog Composition
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-16 text-2xl font-bold text-brand">60%</div>
                <div className="flex-1">
                  <div className="text-base font-medium text-foreground">Trivial fixes</div>
                  <div className="text-sm text-muted-foreground">Small bugs, typos, minor refactors, config updates</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-16 text-2xl font-bold text-muted-foreground">25%</div>
                <div className="flex-1">
                  <div className="text-base font-medium text-foreground">Medium complexity</div>
                  <div className="text-sm text-muted-foreground">Feature enhancements, multi-file changes</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-16 text-2xl font-bold text-muted-foreground">15%</div>
                <div className="flex-1">
                  <div className="text-base font-medium text-foreground">Complex/architectural</div>
                  <div className="text-sm text-muted-foreground">Requires design decisions, major refactoring</div>
                </div>
              </div>
            </div>
          </div>

          {/* Time metrics */}
          <div className="border-l-4 border-brand pl-5 space-y-3">
            <div className="text-sm font-semibold text-brand uppercase tracking-wider">
              Industry Time Metrics
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-foreground">6-8</div>
                <div className="text-sm text-muted-foreground">stories per sprint</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">10-15m</div>
                <div className="text-sm text-muted-foreground">avg trivial fix time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">50-150</div>
                <div className="text-sm text-muted-foreground">optimal backlog size</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">typical backlog size</div>
              </div>
            </div>
          </div>

          {/* Source citation */}
          <div className="pt-2 text-xs text-muted-foreground">
            Sources: IEEE DataPort (Gaona-Cuevas et al.), State of Agile Report, Mike Cohn velocity benchmarks
          </div>
        </div>
      </div>
    </section>
  );
}
