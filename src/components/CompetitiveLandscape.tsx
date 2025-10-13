export default function CompetitiveLandscape() {
  const competitors = [
    { name: 'YOU', x: 30, y: 80, highlight: true, description: 'Only autonomous, full-platform agent' },
    { name: 'Kudo', x: 20, y: 30, highlight: false, description: 'Testing only' },
    { name: 'SonarQube', x: 15, y: 25, highlight: false, description: 'Code quality' },
    { name: 'Copilot', x: 75, y: 25, highlight: false, description: 'Human-assisted' },
    { name: 'Cursor', x: 70, y: 20, highlight: false, description: 'Human-assisted' }
  ];

  return (
    <section className="max-w-7xl mx-auto border-x border-brand/10">
      <div className="p-12 lg:p-16 border-b border-brand/10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Competitive Landscape</h2>
        </div>

        {/* 2x2 Matrix */}
        <div className="border border-brand/20 rounded-lg bg-black/5 p-8 relative" style={{ height: '600px' }}>
          {/* Vertical Axis */}
          <div className="absolute left-8 top-8 bottom-8 flex flex-col justify-between items-center">
            <div className="text-sm font-bold text-muted-foreground transform -rotate-90 whitespace-nowrap" style={{ transformOrigin: 'center' }}>
              AUTONOMOUS ↑
            </div>
            <div className="text-sm font-bold text-muted-foreground transform -rotate-90 whitespace-nowrap" style={{ transformOrigin: 'center' }}>
              ASSISTED ↓
            </div>
          </div>

          {/* Horizontal Axis */}
          <div className="absolute left-8 right-8 bottom-8 flex justify-between items-center">
            <div className="text-sm font-bold text-muted-foreground whitespace-nowrap">
              SINGLE TASK ←
            </div>
            <div className="text-sm font-bold text-muted-foreground whitespace-nowrap">
              → FULL PLATFORM
            </div>
          </div>

          {/* Grid */}
          <div className="absolute left-24 right-24 top-16 bottom-24 border-l-2 border-b-2 border-brand/20">
            {/* Horizontal Center Line */}
            <div className="absolute left-0 right-0 top-1/2 border-t border-brand/10"></div>
            {/* Vertical Center Line */}
            <div className="absolute top-0 bottom-0 left-1/2 border-l border-brand/10"></div>

            {/* Plot competitors */}
            {competitors.map((competitor, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `${competitor.x}%`,
                  bottom: `${competitor.y}%`,
                  transform: 'translate(-50%, 50%)'
                }}
              >
                {competitor.highlight ? (
                  <div className="relative">
                    {/* Highlight circle */}
                    <div className="absolute -inset-6 bg-brand/10 rounded-full animate-pulse"></div>
                    <div className="relative bg-brand text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg">
                      {competitor.name}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-background border border-brand/20 rounded px-3 py-1 text-sm whitespace-nowrap font-medium">
                      {competitor.description}
                    </div>
                  </div>
                ) : (
                  <div className="relative group">
                    <div className="bg-black/10 border border-brand/20 px-4 py-2 rounded font-medium hover:bg-black/20 hover:border-brand/40 transition-all cursor-pointer">
                      {competitor.name} ●
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-background border border-brand/20 rounded px-3 py-1 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {competitor.description}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Empty quadrant label */}
          <div className="absolute right-32 top-24 text-sm text-muted-foreground italic">
            Empty quadrant
          </div>
        </div>

        {/* Callout */}
        <div className="mt-8 text-center">
          <div className="inline-block border border-brand/20 rounded-lg px-6 py-3 bg-brand/5">
            <div className="text-sm font-medium">
              <span className="text-brand font-bold">Only autonomous, full-platform agent</span> in the market
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
