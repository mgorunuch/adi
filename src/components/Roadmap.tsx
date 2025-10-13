export default function Roadmap() {
  const timeline = [
    { year: '2025', quarter: 'Q3' },
    { year: '', quarter: 'Q4' },
    { year: '2026', quarter: 'Q1' },
    { year: '', quarter: 'Q2' },
    { year: '', quarter: 'Q3' },
    { year: '', quarter: 'Q4' },
    { year: '2027', quarter: 'Q1' },
    { year: '', quarter: 'Q2' }
  ];

  const milestones = [
    {
      position: 0,
      title: 'Junior Dev',
      capabilities: 'Backlog cleanup, tech debt, safe changes',
      tam: '$400M',
      active: true
    },
    {
      position: 2,
      title: 'Mid-Level Dev',
      capabilities: 'Feature delivery, full-stack, auto QA',
      tam: '$2.1B',
      active: false
    },
    {
      position: 5,
      title: 'Full Team',
      capabilities: 'Architecture, multi-service, optimization',
      tam: '$8B',
      active: false
    }
  ];

  return (
    <section className="max-w-7xl mx-auto border-x border-brand/10">
      {/* Full-width heading */}
      <div className="p-8 lg:p-12 border-b border-brand/10">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-center">
          Built to <span className="text-brand bg-brand/10 px-2 py-1 rounded">expand</span>
        </h2>
        <p className="text-center text-lg text-muted-foreground mt-4">Start trusted, end essential</p>
      </div>

      <div className="border-b border-brand/10 bg-gradient-to-b from-transparent via-black/[0.02] to-transparent">
        <div className="p-12 lg:p-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[200px_1fr] gap-12">
              {/* Left: Timeline */}
              <div className="grid grid-cols-[1fr_auto_auto] gap-4">
                {/* Year labels (left) */}
                <div className="pt-3 text-right">
                  {timeline.map((item, index) => {
                    const hasMilestone = milestones.some(m => m.position === index);
                    return (
                      <div key={index} className="h-24 flex items-center justify-end">
                        <div className={`text-sm font-medium ${hasMilestone ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {item.year}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Vertical Timeline */}
                <div className="relative pt-3">
                  <div className="absolute left-1/2 -ml-px top-3 bottom-0 w-px bg-gradient-to-b from-brand via-brand/40 to-brand/10"></div>

                  {timeline.map((item, index) => {
                    const hasMilestone = milestones.some(m => m.position === index);
                    const milestone = milestones.find(m => m.position === index);
                    return (
                      <div key={index} className="relative h-24 flex items-center justify-center">
                        {hasMilestone && (
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center ${milestone?.active ? 'bg-brand ring-4 ring-brand/20' : 'bg-background border-2 border-brand/60'}`}>
                            {milestone?.active && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Quarter labels (right) */}
                <div className="pt-3">
                  {timeline.map((item, index) => {
                    const hasMilestone = milestones.some(m => m.position === index);
                    return (
                      <div key={index} className="h-24 flex items-center">
                        <div className={`text-sm font-medium ${hasMilestone ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {item.quarter}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Milestone Content */}
              <div className="relative pt-3">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="absolute space-y-2"
                    style={{ top: `${milestone.position * 96 + 44}px` }}
                  >
                    <div className="text-xl font-bold text-foreground">
                      {milestone.title}
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {milestone.capabilities}
                    </div>
                    <div className="text-sm font-bold text-brand">
                      TAM {milestone.tam}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Growth Loop */}
        <div className="max-w-5xl mx-auto px-12 lg:px-16 pb-12 lg:pb-16">
          <div className="space-y-8">
            <div className="text-sm font-semibold text-brand uppercase tracking-wider text-center">
              Growth Loop
            </div>

            {/* Circular Flow Chart with SVG */}
            <div className="relative w-full max-w-lg mx-auto" style={{ height: '400px' }}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                {/* Circular path with arrows */}
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" fill="rgb(168, 85, 247)" />
                  </marker>
                </defs>

                {/* Circle path */}
                {[
                  { angle: -90 },
                  { angle: -18 },
                  { angle: 54 },
                  { angle: 126 },
                  { angle: 198 }
                ].map((node, index, arr) => {
                  const radius = 130;
                  const cx = 200;
                  const cy = 200;

                  const x1 = cx + radius * Math.cos((node.angle * Math.PI) / 180);
                  const y1 = cy + radius * Math.sin((node.angle * Math.PI) / 180);

                  const nextAngle = arr[(index + 1) % arr.length].angle;
                  const x2 = cx + radius * Math.cos((nextAngle * Math.PI) / 180);
                  const y2 = cy + radius * Math.sin((nextAngle * Math.PI) / 180);

                  const midAngle = (node.angle + nextAngle) / 2;
                  const controlRadius = radius * 1.0;
                  const controlX = cx + controlRadius * Math.cos((midAngle * Math.PI) / 180);
                  const controlY = cy + controlRadius * Math.sin((midAngle * Math.PI) / 180);

                  return (
                    <path
                      key={index}
                      d={`M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`}
                      stroke="rgb(168, 85, 247)"
                      strokeWidth="2"
                      fill="none"
                      markerEnd="url(#arrowhead)"
                      opacity="0.4"
                    />
                  );
                })}

                {/* Center circle */}
                <circle cx="200" cy="200" r="40" fill="rgb(168, 85, 247)" fillOpacity="0.1" stroke="rgb(168, 85, 247)" strokeWidth="2" />
              </svg>

              {/* Center Loop Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl text-brand">↻</span>
              </div>

              {/* Nodes positioned in circle */}
              {[
                { label: 'Usage', angle: -90 },
                { label: 'PRs', angle: -18 },
                { label: 'Visibility', angle: 54 },
                { label: 'Teams', angle: 126 },
                { label: 'Features', angle: 198 }
              ].map((node) => {
                const radius = 130;
                const x = 200 + radius * Math.cos((node.angle * Math.PI) / 180);
                const y = 200 + radius * Math.sin((node.angle * Math.PI) / 180);

                return (
                  <div
                    key={node.label}
                    className="absolute"
                    style={{
                      left: `${(x / 400) * 100}%`,
                      top: `${(y / 400) * 100}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="px-4 py-2 bg-background border-2 border-brand/40 rounded-lg shadow-lg">
                      <div className="text-sm font-semibold text-foreground whitespace-nowrap">
                        {node.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
