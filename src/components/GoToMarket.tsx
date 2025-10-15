import { FaGithub, FaRocket, FaStore, FaBullhorn } from 'react-icons/fa';

export default function GoToMarket() {
  const phases = [
    {
      title: 'Now (Oct 2025)',
      subtitle: 'Private Beta',
      description: '2 companies testing production backlogs. Proving autonomous workflow.',
      status: 'current'
    },
    {
      title: 'Q4 2025',
      subtitle: 'Public Beta + Open Source Launch',
      description: 'GitHub public release. Community building. Beta waitlist opens.',
      status: 'upcoming'
    },
    {
      title: 'Q1 2026',
      subtitle: 'Managed Cloud GA',
      description: 'Usage-based pricing live. Integration marketplace listings.',
      status: 'upcoming'
    },
    {
      title: 'Q2 2026',
      subtitle: 'Enterprise Ready',
      description: 'SSO, audit logs, SLAs. Dedicated support.',
      status: 'upcoming'
    }
  ];

  const channels = [
    {
      icon: FaGithub,
      title: 'Open Source First',
      description: 'GitHub → Stars → Contributors → Cloud conversions',
      color: '#FFFFFF'
    },
    {
      icon: FaBullhorn,
      title: 'Developer Communities',
      description: 'HackerNews, Reddit, Dev.to. Conference talks & demos.',
      color: '#FF6B6B'
    },
    {
      icon: FaStore,
      title: 'Integration Marketplaces',
      description: 'Jira Marketplace. GitLab/GitHub Apps.',
      color: '#4ECDC4'
    },
    {
      icon: FaRocket,
      title: 'Content & Evangelism',
      description: 'Blog posts, YouTube demos. Case studies & testimonials.',
      color: '#FFE66D'
    }
  ];

  return (
    <section id="go-to-market" className="max-w-7xl mx-auto border-x border-brand/10">
      {/* Heading */}
      <div className="p-6 sm:p-8 lg:p-12 border-b border-brand/10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-center">
          Launch <span className="text-brand bg-brand/10 px-2 py-1 rounded">Strategy</span>
        </h2>
      </div>

      {/* Launch Phases Timeline */}
      <div className="border-b border-brand/10 bg-gradient-to-b from-transparent via-black/[0.02] to-transparent">
        <div className="p-6 sm:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">
            Launch Phases
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {phases.map((phase, idx) => (
              <div
                key={phase.title}
                className={`p-4 sm:p-6 border rounded-lg ${
                  phase.status === 'current'
                    ? 'border-brand bg-brand/5 ring-2 ring-brand/20'
                    : 'border-brand/20 bg-black/[0.01] hover:bg-black/[0.02]'
                } transition-all`}
              >
                <div className="mb-3">
                  {phase.status === 'current' && (
                    <div className="inline-block px-2 py-1 bg-brand text-white text-xs font-bold rounded mb-2 animate-pulse">
                      ← Now
                    </div>
                  )}
                  <div className="text-sm font-bold text-brand mb-1">{phase.title}</div>
                  <div className="text-lg font-bold text-foreground">{phase.subtitle}</div>
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {phase.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Distribution Channels */}
      <div className="border-b border-brand/10">
        <div className="p-6 sm:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">
            Distribution Channels
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-brand/20">
            {channels.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.title}
                  className={`p-6 sm:p-8 bg-black/[0.01] hover:bg-black/[0.03] transition-colors ${
                    idx < 2 ? 'border-b sm:border-b-0' : ''
                  } ${
                    idx % 2 === 0 ? 'sm:border-r' : ''
                  } ${
                    idx < 2 ? 'lg:border-b-0 lg:border-r' : ''
                  } ${
                    idx === 2 ? 'lg:border-r border-b lg:border-b-0' : ''
                  } border-brand/20`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-lg bg-brand/10">
                      <Icon style={{ color: channel.color }} className="text-2xl sm:text-3xl" />
                    </div>
                    <div className="text-base sm:text-lg font-bold text-foreground mb-2">
                      {channel.title}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {channel.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
