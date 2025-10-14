import { FaUsers, FaRocket, FaBuilding } from 'react-icons/fa';

export default function TargetCustomers() {
  const segments = [
    {
      icon: FaUsers,
      title: 'Indie Devs & Small Teams',
      teamSize: '1-10 developers',
      pain: 'Backlog grows faster than we can ship',
      solution: 'ADI handles low-priority bugs & tech debt',
      tier: 'Open Source (BYOK)',
      color: '#10b981'
    },
    {
      icon: FaRocket,
      title: 'Startups',
      teamSize: '10-50 developers',
      pain: 'Need 2x velocity without hiring',
      solution: 'ADI ships features autonomously 24/7',
      tier: 'Managed Cloud (Starter)',
      color: '#3b82f6'
    },
    {
      icon: FaBuilding,
      title: 'Enterprise',
      teamSize: '50+ developers',
      pain: 'Thousands of legacy issues piling up',
      solution: 'ADI tackles entire backlogs systematically',
      tier: 'Managed Cloud (Scale)',
      color: '#8b5cf6'
    }
  ];

  return (
    <section id="target-customers" className="max-w-7xl mx-auto border-x border-brand/10">
      {/* Heading */}
      <div className="p-6 sm:p-8 lg:p-12 border-b border-brand/10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-center">
          Who We're <span className="text-brand bg-brand/10 px-2 py-1 rounded">Building For</span>
        </h2>
      </div>

      {/* Customer Segments */}
      <div className="border-b border-brand/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {segments.map((segment, idx) => {
            const Icon = segment.icon;
            return (
              <div
                key={segment.title}
                className={`p-6 sm:p-8 lg:p-12 bg-black/[0.01] hover:bg-black/[0.03] transition-colors ${
                  idx < segments.length - 1 ? 'md:border-r border-b md:border-b-0 border-brand/10' : ''
                }`}
              >
                <div className="flex flex-col h-full">
                  {/* Icon & Title */}
                  <div className="mb-6">
                    <div className="inline-block p-3 rounded-lg bg-brand/10 mb-4">
                      <Icon style={{ color: segment.color }} className="text-2xl sm:text-3xl" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{segment.title}</h3>
                    <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                      {segment.teamSize}
                    </div>
                  </div>

                  {/* Pain Point */}
                  <div className="mb-4">
                    <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                      Pain Point
                    </div>
                    <div className="text-sm text-foreground">
                      "{segment.pain}"
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2">
                      How ADI Helps
                    </div>
                    <div className="text-sm text-foreground">
                      {segment.solution}
                    </div>
                  </div>

                  {/* Tier */}
                  <div className="mt-auto pt-4 border-t border-brand/10">
                    <div className="text-xs font-bold text-brand uppercase tracking-wider">
                      {segment.tier}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
