export default function Hero() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-brand/10">
      <div className="grid lg:grid-cols-2 border-b border-brand/10">
        {/* Left: Copy */}
        <div className="p-12 lg:p-16 space-y-6 border-r border-brand/10">
          <div className="inline-block px-3 py-1 border border-brand/20 rounded-full text-sm">
            First production test: Oct 9
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            From GitHub issue to <span className="text-brand">merged PR</span>
          </h1>

          <p className="text-xl text-muted-foreground">
            Autonomous AI agent that codes, tests, and ships features.
          </p>

          <div className="pt-4">
            <div className="text-sm text-muted-foreground mb-2">Now</div>
            <div className="text-3xl font-bold">2 companies testing production backlogs</div>
          </div>
        </div>

        {/* Right: Video */}
        <div className="flex items-center justify-center bg-black/5 w-full h-full">
          <div className="relative w-full h-full">
            <div className="border border-brand/20 overflow-hidden bg-black/20 w-full h-full">
              <video
                className="w-full h-full"
                controls
                preload="metadata"
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute -bottom-3 -right-3 px-4 py-2 bg-brand/10 border border-brand/20 rounded-lg text-sm font-mono">
              Live Demo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
