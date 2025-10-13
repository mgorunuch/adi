export default function WhyNow() {
  const cards = [
    {
      icon: '🧠',
      title: 'AI Just Got Good',
      metric: '95%',
      metricLabel: 'Success Rate',
      period: '2024-2025',
      trend: 'up'
    },
    {
      icon: '👥',
      title: 'Dev Shortage Crisis',
      metric: '2.4M',
      metricLabel: 'Open Roles',
      period: "Can't hire fast",
      trend: 'up'
    },
    {
      icon: '📊',
      title: 'Backlog Emergency',
      metric: '35%',
      metricLabel: 'YoY Growth',
      period: 'Teams drowning',
      trend: 'up'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto border-x border-brand/10">
      <div className="p-12 lg:p-16 border-b border-brand/10">
        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-brand/20 rounded-lg p-8 bg-black/5 hover:border-brand/40 transition-all"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{card.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-6">{card.title}</h3>

              {/* Graph Placeholder */}
              <div className="mb-4 h-20 flex items-end justify-center gap-1">
                {[40, 55, 65, 70, 85, 95].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-brand rounded-t transition-all hover:bg-brand/80"
                    style={{
                      height: `${height}%`,
                      opacity: 0.3 + (i * 0.12)
                    }}
                  ></div>
                ))}
                <div className="text-brand text-2xl ml-1">↗</div>
              </div>

              {/* Metric */}
              <div className="text-3xl font-bold text-brand mb-1">{card.metric}</div>
              <div className="text-sm text-muted-foreground mb-3">{card.metricLabel}</div>

              {/* Period */}
              <div className="text-sm font-medium">{card.period}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center border border-brand/20 rounded-lg p-8 bg-black/5">
          <div className="text-2xl font-bold">
            12-18 month window before GitHub ships this
          </div>
        </div>
      </div>
    </section>
  );
}
