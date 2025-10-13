'use client';

export default function ProductWalkthrough() {
  return (
    <section className="max-w-7xl mx-auto border-x border-brand/10">
      <div className="p-12 lg:p-16 border-b border-brand/10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Watch it work</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Stage 1: Resolving 40% of backlog automatically
          </p>
        </div>

        {/* Before/After Split */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Before */}
          <div className="border border-brand/20 rounded-lg overflow-hidden">
            <div className="bg-black/5 border-b border-brand/20 px-4 py-2">
              <div className="text-sm font-bold">BEFORE</div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">Backlog: 240 items</div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 bg-black/5 rounded border-l-4 border-red-500">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Fix responsive layout bug</div>
                    <div className="text-xs text-muted-foreground">Open 8 months</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-black/5 rounded border-l-4 border-yellow-500">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Update deprecated API calls</div>
                    <div className="text-xs text-muted-foreground">Open 5 months</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-black/5 rounded border-l-4 border-red-500">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Add loading spinner to form</div>
                    <div className="text-xs text-muted-foreground">Open 11 months</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-brand/10">
                <div className="text-lg font-bold text-muted-foreground">6mo avg age</div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="border border-brand/20 rounded-lg overflow-hidden">
            <div className="bg-black/5 border-b border-brand/20 px-4 py-2">
              <div className="text-sm font-bold">AFTER</div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">Backlog: 148 items</div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded border-l-4 border-green-500">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">✓ Fix responsive layout bug</div>
                    <div className="text-xs text-green-600">Merged 2 days ago</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded border-l-4 border-green-500">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">✓ Update deprecated API calls</div>
                    <div className="text-xs text-green-600">Merged 1 week ago</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded border-l-4 border-green-500">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">✓ Add loading spinner to form</div>
                    <div className="text-xs text-green-600">Merged 3 days ago</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-brand/10">
                <div className="text-lg font-bold text-green-600">2mo avg age</div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="border border-brand/20 rounded-lg overflow-hidden bg-black/5">
          <div className="aspect-video flex items-center justify-center">
            <video
              className="w-full h-full"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/demo-video.mp4" type="video/mp4" />
              <div className="text-center p-8">
                <div className="text-2xl mb-2">📹</div>
                <div className="text-muted-foreground">60-second product demo</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Watch AI resolve 3 tasks in real-time
                </div>
              </div>
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
