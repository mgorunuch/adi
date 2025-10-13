export default function Roadmap() {
  const stages = [
    {
      title: 'STAGE 1',
      subtitle: '(Now Shipping)',
      icon: '🧹',
      role: 'Junior Dev',
      capabilities: ['Backlog cleanup', 'Debt reduction', 'Safe changes'],
      tam: '$400M TAM'
    },
    {
      title: 'STAGE 2',
      subtitle: '(6-12mo)',
      icon: '🔨',
      role: 'Mid-Level Dev',
      capabilities: ['Ship features', 'Full stack', 'Auto QA'],
      tam: '$2.1B TAM'
    },
    {
      title: 'STAGE 3',
      subtitle: '(18-24mo)',
      icon: '🏭',
      role: 'Full Team',
      capabilities: ['Architecture', 'Multi-service', 'Optimization'],
      tam: '$8B TAM'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto border-x border-brand/10">
      <div className="p-12 lg:p-16 border-b border-brand/10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Built to expand</h2>
          <p className="text-lg text-muted-foreground">Start trusted, end essential</p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-brand/20" style={{ zIndex: 0 }}></div>

          {stages.map((stage, index) => (
            <div key={index} className="relative" style={{ zIndex: 1 }}>
              <div className="border border-brand/20 rounded-lg p-6 bg-background hover:border-brand/40 transition-all">
                {/* Header */}
                <div className="text-center mb-4">
                  <div className="text-sm font-bold text-brand">{stage.title}</div>
                  <div className="text-xs text-muted-foreground">{stage.subtitle}</div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center text-4xl bg-black/5 border border-brand/20 rounded-full">
                    {stage.icon}
                  </div>
                </div>

                {/* Role */}
                <div className="text-center mb-4">
                  <div className="text-xl font-bold">{stage.role}</div>
                </div>

                {/* Capabilities */}
                <ul className="space-y-2 mb-4">
                  {stage.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-brand mt-0.5">•</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>

                {/* TAM */}
                <div className="text-center pt-4 border-t border-brand/10">
                  <div className="text-lg font-bold text-brand">{stage.tam}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Viral Growth Arrow */}
        <div className="border border-brand/20 rounded-lg p-6 bg-black/5">
          <div className="text-center mb-4">
            <div className="text-sm font-bold mb-2">Viral Growth Loop</div>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2 text-sm">
            <span className="font-medium">More usage</span>
            <span className="text-brand">→</span>
            <span className="font-medium">More PRs</span>
            <span className="text-brand">→</span>
            <span className="font-medium">More visibility</span>
            <span className="text-brand">→</span>
            <span className="font-medium">More teams</span>
            <span className="text-brand">→</span>
            <span className="font-medium">Expand features</span>
            <span className="text-brand text-xl">↻</span>
          </div>
        </div>
      </div>
    </section>
  );
}
