export default function CompetitiveLandscape() {
  const quadrants = [
    {
      title: 'Single Task + Autonomous',
      position: 'top-left',
      items: [
        { name: 'Kudo', description: 'Testing automation' },
        { name: 'SonarQube', description: 'Code quality analysis' }
      ]
    },
    {
      title: 'Full Platform + Autonomous',
      position: 'top-right',
      items: [
        { name: 'YOU', highlight: true, description: 'End-to-end development agent' }
      ],
      isEmpty: false,
      highlight: true
    },
    {
      title: 'Single Task + Assisted',
      position: 'bottom-left',
      items: []
    },
    {
      title: 'Full Platform + Assisted',
      position: 'bottom-right',
      items: [
        { name: 'GitHub Copilot', description: 'AI pair programmer' },
        { name: 'Cursor', description: 'AI code editor' }
      ]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto border-x border-brand/10">
      {/* Competitive Landscape heading */}
      <div className="p-8 lg:p-12 border-b border-brand/10">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-center">
          Competitive <span className="text-brand bg-brand/10 px-2 py-1 rounded">Landscape</span>
        </h2>
      </div>

      <div className="border-b border-brand/10 bg-gradient-to-b from-transparent via-black/[0.02] to-transparent">
        <div className="p-8 lg:p-12">
          <div className="max-w-5xl mx-auto">
            {/* Axis Labels */}
            <div className="flex justify-center mb-6">
              <div className="text-xs font-bold text-brand uppercase tracking-wider">
                ← Single Task <span className="mx-8 text-muted-foreground">to</span> Full Platform →
              </div>
            </div>

            {/* 2x2 Grid */}
            <div className="grid grid-cols-2 gap-0 border border-brand/20">
              {/* Top Left Quadrant */}
              <div className="border-r border-b border-brand/20 p-8 bg-black/[0.01] hover:bg-black/[0.03] transition-colors">
                <div className="h-full flex flex-col">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-6">
                    Autonomous • Single Task
                  </div>
                  <div className="space-y-3">
                    {quadrants[0].items.map((item, idx) => (
                      <div key={idx} className="group">
                        <div className="text-sm font-semibold text-foreground mb-1">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Right Quadrant - HIGHLIGHT */}
              <div className="border-b border-brand/20 p-8 bg-brand/[0.03] hover:bg-brand/[0.05] transition-colors relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <svg className="w-6 h-6 text-brand/20" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="h-full flex flex-col">
                  <div className="text-xs font-bold text-brand uppercase tracking-wider mb-6">
                    Autonomous • Full Platform
                  </div>
                  <div className="space-y-4">
                    {quadrants[1].items.map((item, idx) => (
                      <div key={idx} className="group">
                        <div className="inline-block">
                          <div className="bg-brand text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg mb-2">
                            {item.name}
                          </div>
                          <div className="text-sm text-foreground font-medium">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-brand/20">
                    <div className="text-xs font-semibold text-brand">
                      ✓ The only solution in this quadrant
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Left Quadrant - EMPTY */}
              <div className="border-r border-brand/20 p-8 bg-black/[0.01] hover:bg-black/[0.02] transition-colors">
                <div className="h-full flex flex-col">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-6">
                    Assisted • Single Task
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl text-muted-foreground/20 mb-2">—</div>
                      <div className="text-xs text-muted-foreground italic">No major players</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Right Quadrant */}
              <div className="p-8 bg-black/[0.01] hover:bg-black/[0.03] transition-colors">
                <div className="h-full flex flex-col">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-6">
                    Assisted • Full Platform
                  </div>
                  <div className="space-y-3">
                    {quadrants[3].items.map((item, idx) => (
                      <div key={idx} className="group">
                        <div className="text-sm font-semibold text-foreground mb-1">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Axis Label */}
            <div className="flex justify-center mt-6">
              <div className="text-xs font-bold text-brand uppercase tracking-wider">
                ↑ Autonomous <span className="mx-8 text-muted-foreground">to</span> Assisted ↓
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
