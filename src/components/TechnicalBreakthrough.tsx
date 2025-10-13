'use client';

import { Shield, GitPullRequest, Repeat } from 'lucide-react';
import { SiJira, SiGithub, SiGitlab, SiOpenai, SiAnthropic, SiGooglegemini, SiJest, SiVitest, SiPytest } from 'react-icons/si';

export default function TechnicalBreakthrough() {
  return (
    <section className="max-w-7xl mx-auto border-x border-brand/10">
      {/* Full-width heading */}
      <div className="p-8 lg:p-12 border-b border-brand/10">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-center">
          How does it <span className="text-brand bg-brand/10 px-2 py-1 rounded">work?</span>
        </h2>
      </div>

      <div className="border-b border-brand/10">
        {/* Pipeline stages - Full width */}
        <div className="max-w-4xl mx-auto p-8 lg:p-16 space-y-8">
          {/* Stage 1 */}
          <div className="relative">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-[#0052CC]/10 flex items-center justify-center border border-[#0052CC]/20 hover:scale-110 transition-transform">
                  <SiJira className="w-7 h-7 text-[#0052CC]" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-white/90 flex items-center justify-center border border-gray-300 hover:scale-110 transition-transform">
                  <SiGithub className="w-7 h-7 text-[#181717]" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-[#FC6D26]/10 flex items-center justify-center border border-[#FC6D26]/20 hover:scale-110 transition-transform">
                  <SiGitlab className="w-7 h-7 text-[#FC6D26]" />
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="text-2xl font-bold text-foreground">Issue Detection</div>
                <div className="text-base text-muted-foreground leading-relaxed">
                  Monitors GitHub/Jira/GitLab for new issues. Real-time connection to your backlog.
                </div>
              </div>
            </div>
            <div className="absolute left-6 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-brand/40 to-transparent" />
          </div>

          {/* Stage 2 */}
          <div className="relative">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-brand/20 flex items-center justify-center border border-brand/30 hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-brand" />
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="text-2xl font-bold text-foreground">Safety Classification</div>
                <div className="text-base text-muted-foreground leading-relaxed">
                  AI classifier scores complexity and risk. Only safe tasks proceed autonomously.
                </div>
              </div>
            </div>
            <div className="absolute left-6 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-brand/40 to-transparent" />
          </div>

          {/* Stage 3 - Highlighted */}
          <div className="relative bg-gradient-to-br from-brand/10 to-brand/5 border-2 border-brand/30 rounded-2xl p-6 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-[#10A37F]/20 flex items-center justify-center border border-[#10A37F]/30 hover:scale-110 transition-transform">
                  <SiOpenai className="w-7 h-7 text-[#10A37F]" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-[#D97757]/20 flex items-center justify-center border border-[#D97757]/30 hover:scale-110 transition-transform">
                  <SiAnthropic className="w-7 h-7 text-[#D97757]" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-[#4285F4]/20 flex items-center justify-center border border-[#4285F4]/30 hover:scale-110 transition-transform">
                  <SiGooglegemini className="w-7 h-7 text-[#4285F4]" />
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="text-2xl font-bold text-foreground flex items-center gap-3">
                  Model Selection
                  <span className="text-sm font-semibold text-brand bg-brand/20 px-3 py-1 rounded-full">Key Feature</span>
                </div>
                <div className="text-base text-muted-foreground leading-relaxed">
                  <span className="text-brand font-semibold">Provider-agnostic:</span> Automatically picks optimal LLM (GPT-4, Claude, Gemini) per task type.
                </div>
              </div>
            </div>
            <div className="absolute left-6 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-brand/40 to-transparent" />
          </div>

          {/* Stage 4 */}
          <div className="relative">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-[#C21325]/10 flex items-center justify-center border border-[#C21325]/20 hover:scale-110 transition-transform">
                  <SiJest className="w-7 h-7 text-[#C21325]" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-[#729B1B]/10 flex items-center justify-center border border-[#729B1B]/20 hover:scale-110 transition-transform">
                  <SiVitest className="w-7 h-7 text-[#729B1B]" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-[#0A9EDC]/10 flex items-center justify-center border border-[#0A9EDC]/20 hover:scale-110 transition-transform">
                  <SiPytest className="w-7 h-7 text-[#0A9EDC]" />
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="text-2xl font-bold text-foreground">Auto-Test & Validate</div>
                <div className="text-base text-muted-foreground leading-relaxed">
                  Runs Jest, Vitest, Pytest test suites. Validates code quality. 95% pass rate.
                </div>
              </div>
            </div>
            <div className="absolute left-6 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-brand/40 to-transparent" />
          </div>

          {/* Stage 5 */}
          <div className="relative">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-brand/20 flex items-center justify-center border border-brand/30 hover:scale-110 transition-transform">
                  <GitPullRequest className="w-7 h-7 text-brand" />
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="text-2xl font-bold text-foreground">PR Creation & Review</div>
                <div className="text-base text-muted-foreground leading-relaxed">
                  Creates pull request with full context. Escalates complex cases to human review.
                </div>
              </div>
            </div>
          </div>

          {/* Time comparison badge */}
          <div className="pt-6 mt-6 border-t border-brand/20">
            <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-brand/5 to-transparent rounded-lg p-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">12 min</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">With AI</div>
              </div>
              <div className="text-2xl text-muted-foreground">vs</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">4 hours</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Manual</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
