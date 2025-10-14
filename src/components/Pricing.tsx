export default function Pricing() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto border-x border-brand/10">
      {/* Pricing heading */}
      <div className="p-8 lg:p-12 border-b border-brand/10">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-center">
          Pricing <span className="text-brand bg-brand/10 px-2 py-1 rounded">Model</span>
        </h2>
      </div>

      <div className="border-b border-brand/10 bg-gradient-to-b from-transparent via-black/[0.02] to-transparent">
        {/* Two Tier Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Open Source - BYOK */}
          <div className="p-8 lg:p-12 bg-black/[0.01] hover:bg-black/[0.02] transition-all border-r border-brand/20">
            <div className="text-center mb-6">
              <div className="inline-block mb-4">
                <span className="text-sm font-bold text-brand uppercase tracking-wider bg-brand/10 px-3 py-1 rounded">
                  Open Source
                </span>
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-6xl font-bold text-brand">MIT</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                License • Bring Your Own Key
              </p>
            </div>

            <ul className="space-y-3 mb-6 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Full ADI source code</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Self-hosted on your infrastructure</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Use your own LLM API key</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Support for multiple LLM providers</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Community support</span>
              </li>
            </ul>
          </div>

          {/* Managed Cloud */}
          <div className="p-8 lg:p-12 bg-brand/[0.03] hover:bg-brand/[0.05] transition-all">
            <div className="text-center mb-6">
              <div className="inline-block mb-4">
                <span className="text-sm font-bold text-brand uppercase tracking-wider bg-brand/20 px-3 py-1 rounded">
                  Managed Cloud
                </span>
              </div>
              <div className="mb-4">
                <div className="text-sm text-muted-foreground mb-2">Pay-as-you-go</div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-brand">$0.025</span>
                  <span className="text-xl text-muted-foreground">/1K tokens</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                We handle infrastructure & API
              </p>
            </div>

            <ul className="space-y-3 mb-6 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Premium models & optimized agents</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Early access to new features</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Managed runners & infrastructure</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No API key management</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Priority execution queue</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Email support</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Usage analytics & cost tracking</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Metrics */}
        <div className="border-t border-brand/10 p-8 lg:p-12 bg-gradient-to-br from-brand/[0.03] to-transparent">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Business Model
              </h3>

              {/* Dual Revenue Streams */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
                <div className="border border-brand/10 rounded-lg p-6 bg-black/[0.02]">
                  <div className="text-sm font-bold text-brand uppercase tracking-wider mb-4">
                    Open Source Strategy
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Revenue model</span>
                      <span className="font-semibold">$0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">User acquisition cost</span>
                      <span className="font-semibold">~$0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Value driver</span>
                      <span className="font-semibold text-right">Community<br/>adoption</span>
                    </div>
                    <div className="border-t border-brand/10 pt-3 mt-3">
                      <p className="text-xs text-muted-foreground">
                        Builds brand, gathers feedback, creates conversion funnel to managed cloud
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-brand/10 rounded-lg p-6 bg-black/[0.02]">
                  <div className="text-sm font-bold text-brand uppercase tracking-wider mb-4">
                    Managed Cloud Revenue
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Avg tokens/user/month</span>
                      <span className="font-semibold">1-5M tokens</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Revenue @ 2.5M tokens</span>
                      <span className="font-semibold">~$62.50/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">COGS @ 2.5M tokens</span>
                      <span className="font-semibold">~$30/mo</span>
                    </div>
                    <div className="flex justify-between border-t border-brand/10 pt-3">
                      <span className="text-foreground font-bold">Gross margin</span>
                      <span className="text-brand font-bold">~52%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="border-t border-brand/10 pt-8">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-6 text-center">
                  Unit Economics (Managed Cloud)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-3xl mx-auto">
                  <div>
                    <div className="text-3xl font-bold text-brand mb-2">~$32</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Net margin/user/mo</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-brand mb-2">&lt;$100</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">CAC target</div>
                    <div className="text-xs text-muted-foreground mt-1">(OSS → Cloud funnel)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-brand mb-2">$375-1.5K</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">LTV (6-24mo)</div>
                  </div>
                </div>
              </div>

              {/* Path to Scale */}
              <div className="mt-8 text-center">
                <div className="inline-block border border-brand/10 rounded-lg px-6 py-4 bg-black/[0.01]">
                  <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-semibold">
                    Path to $1M ARR
                  </div>
                  <div className="text-2xl font-bold text-brand">~1,350 paying users</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    at $62.50 ARPU (2.5M tokens/month avg)
                  </div>
                </div>
              </div>

        </div>
      </div>
    </section>
  );
}
