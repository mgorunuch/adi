export default function EarlySignal() {
  return (
    <section className="max-w-7xl mx-auto border-x border-brand/10">
      <div className="p-12 lg:p-16 border-b border-brand/10">
        {/* Big Numbers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Tasks Resolved */}
          <div className="border border-brand/20 rounded-lg p-8 text-center bg-black/5">
            <div className="text-5xl font-bold text-brand mb-2">340</div>
            <div className="text-sm text-muted-foreground">Tasks Resolved</div>
          </div>

          {/* Time Saved */}
          <div className="border border-brand/20 rounded-lg p-8 text-center bg-black/5">
            <div className="text-5xl font-bold text-brand mb-2">1,200hrs</div>
            <div className="text-sm text-muted-foreground">Time Saved</div>
          </div>

          {/* Approval Rate */}
          <div className="border border-brand/20 rounded-lg p-8 text-center bg-black/5">
            <div className="text-5xl font-bold text-brand mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Approval Rate</div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="border border-brand/20 rounded-lg p-8 bg-black/5 mb-12">
          <div className="text-lg font-bold mb-6">Backlog Reduction per Beta Team</div>

          <div className="space-y-4">
            {/* Team A */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Team A</span>
                <span className="text-sm font-bold text-brand">-38%</span>
              </div>
              <div className="w-full bg-black/10 rounded-full h-6 overflow-hidden">
                <div
                  className="bg-brand h-full rounded-full transition-all duration-1000"
                  style={{ width: '38%' }}
                ></div>
              </div>
            </div>

            {/* Team B */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Team B</span>
                <span className="text-sm font-bold text-brand">-52%</span>
              </div>
              <div className="w-full bg-black/10 rounded-full h-6 overflow-hidden">
                <div
                  className="bg-brand h-full rounded-full transition-all duration-1000"
                  style={{ width: '52%' }}
                ></div>
              </div>
            </div>

            {/* Team C */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Team C</span>
                <span className="text-sm font-bold text-brand">-29%</span>
              </div>
              <div className="w-full bg-black/10 rounded-full h-6 overflow-hidden">
                <div
                  className="bg-brand h-full rounded-full transition-all duration-1000"
                  style={{ width: '29%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="border border-brand/20 rounded-lg p-8 bg-black/5 text-center">
          <blockquote className="text-2xl lg:text-3xl font-bold mb-4">
            &quot;Finally fixed all the stuff that embarrassed us&quot;
          </blockquote>
          <cite className="text-sm text-muted-foreground not-italic">
            — CTO, Series B Startup
          </cite>
        </div>
      </div>
    </section>
  );
}
