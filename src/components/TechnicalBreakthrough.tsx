'use client';

import { Shield, GitPullRequest, Repeat } from 'lucide-react';
import { SiJira, SiGithub, SiGitlab, SiOpenai, SiAnthropic, SiGooglegemini, SiJest, SiVitest, SiPytest } from 'react-icons/si';

export default function TechnicalBreakthrough() {
  return (
    <section id="technical-breakthrough" className="max-w-7xl mx-auto border-x border-brand/10">
      {/* Full-width heading */}
      <div className="p-8 lg:p-12 border-b border-brand/10">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-center">
          How does it <span className="text-brand bg-brand/10 px-2 py-1 rounded">work?</span>
        </h2>
      </div>

      <div className="border-b border-brand/10 bg-gradient-to-b from-transparent via-black/[0.02] to-transparent">
        {/* Pipeline stages - Full width */}
        <div className="max-w-4xl mx-auto p-12 lg:p-16 space-y-10">
          {/* Stage 1 */}
          <div className="relative flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl font-bold text-muted-foreground">
              1
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-4">
                <SiJira className="w-8 h-8 text-[#0052CC] hover:scale-110 transition-transform" />
                <SiGithub className="w-8 h-8 text-[#181717] hover:scale-110 transition-transform" />
                <SiGitlab className="w-8 h-8 text-[#FC6D26] hover:scale-110 transition-transform" />
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-foreground">Issue Detection</div>
                <div className="text-base text-muted-foreground leading-relaxed">
                  Monitors GitHub/Jira/GitLab for new issues. Real-time connection to your backlog.
                </div>
              </div>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="relative flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl font-bold text-muted-foreground">
              2
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-4">
                <Shield className="w-8 h-8 text-brand hover:scale-110 transition-transform" />
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-foreground">Safety Classification</div>
                <div className="text-base text-muted-foreground leading-relaxed">
                  AI classifier scores complexity and risk. Only safe tasks proceed autonomously.
                </div>
              </div>
            </div>
          </div>

          {/* Stage 3 - Highlighted */}
          <div className="relative flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl font-bold text-brand">
              3
            </div>
            <div className="flex-1 border-l-4 border-brand pl-6 space-y-3">
              <div className="flex items-center gap-4">
                <SiOpenai className="w-8 h-8 text-[#10A37F] hover:scale-110 transition-transform" />
                <SiAnthropic className="w-8 h-8 text-[#D97757] hover:scale-110 transition-transform" />
                <SiGooglegemini className="w-8 h-8 text-[#4285F4] hover:scale-110 transition-transform" />
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-foreground flex items-center gap-3">
                  Model Selection
                </div>
                <div className="text-base text-muted-foreground leading-relaxed">
                  <span className="text-brand font-semibold">Provider-agnostic:</span> Automatically picks optimal LLM (GPT-4, Claude, Gemini) per task type.
                </div>
              </div>
            </div>
          </div>

          {/* Stage 4 */}
          <div className="relative flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl font-bold text-muted-foreground">
              4
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-4">
                <SiJest className="w-8 h-8 text-[#C21325] hover:scale-110 transition-transform" />
                <SiVitest className="w-8 h-8 text-[#729B1B] hover:scale-110 transition-transform" />
                <SiPytest className="w-8 h-8 text-[#0A9EDC] hover:scale-110 transition-transform" />
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-foreground">Auto-Test & Validate</div>
                <div className="text-base text-muted-foreground leading-relaxed">
                  Runs Jest, Vitest, Pytest test suites. Validates code quality. 95% pass rate.
                </div>
              </div>
            </div>
          </div>

          {/* Stage 5 */}
          <div className="relative flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl font-bold text-muted-foreground">
              5
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-4">
                <GitPullRequest className="w-8 h-8 text-brand hover:scale-110 transition-transform" />
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-foreground">PR Creation & Review</div>
                <div className="text-base text-muted-foreground leading-relaxed">
                  Creates pull request with full context. Escalates complex cases to human review.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
