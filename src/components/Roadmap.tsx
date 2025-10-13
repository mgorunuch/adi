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
        <div className="max-w-4xl mx-auto px-12 lg:px-16 pb-12 lg:pb-16">
          <div className="border-l-4 border-brand pl-6 space-y-4">
            <div className="text-sm font-semibold text-brand uppercase tracking-wider">
              Growth Loop
            </div>
            <div className="flex items-center flex-wrap gap-2 text-base text-muted-foreground">
              <span>Usage</span>
              <span className="text-brand">→</span>
              <span>PRs</span>
              <span className="text-brand">→</span>
              <span>Visibility</span>
              <span className="text-brand">→</span>
              <span>Teams</span>
              <span className="text-brand">→</span>
              <span>Features</span>
              <span className="text-brand text-xl">↻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
