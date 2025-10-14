'use client';

import { FaGithub, FaJira, FaGitlab } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Hero() {
  const sourcePlatforms = [
    { name: 'Jira issue', icon: FaJira, color: '#0052CC', bgColor: 'bg-[#0052CC]/10' },
    { name: 'GitLab issue', icon: FaGitlab, color: '#FC6D26', bgColor: 'bg-[#FC6D26]/10' },
    { name: 'GitHub issue', icon: FaGithub, color: '#FFFFFF', bgColor: 'bg-white/10' }
  ];

  const targetPlatforms = [
    { name: 'GitLab MR', icon: FaGitlab, color: '#FC6D26', bgColor: 'bg-[#FC6D26]/10' },
    { name: 'GitHub PR', icon: FaGithub, color: '#FFFFFF', bgColor: 'bg-white/10' }
  ];

  const [sourceIndex, setSourceIndex] = useState(0);
  const [targetIndex, setTargetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSourceIndex((prev) => (prev + 1) % sourcePlatforms.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTargetIndex((prev) => (prev + 1) % targetPlatforms.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentSource = sourcePlatforms[sourceIndex];
  const currentTarget = targetPlatforms[targetIndex];
  const SourceIcon = currentSource.icon;
  const TargetIcon = currentTarget.icon;

  return (
    <section className="max-w-7xl mx-auto border-x border-brand/10">
      <div className="grid lg:grid-cols-2 border-b border-brand/10">
        {/* Left: Copy */}
        <div className="p-12 lg:p-16 space-y-6 border-r border-brand/10">
          <div className="inline-block px-3 py-1 border border-brand/20 rounded-full text-sm">
            First production test: Oct 9
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <div className="mb-2">
              <span>From </span>
              <div className="inline-block relative h-[60px] min-w-[280px] align-middle">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={sourceIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`absolute top-0 left-0 flex items-center gap-3 px-4 py-3 ${currentSource.bgColor}`}
                  >
                    <SourceIcon style={{ color: currentSource.color }} className="text-2xl flex-shrink-0" />
                    <span className="font-bold whitespace-nowrap text-3xl">{currentSource.name}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div>
              <span>to </span>
              <div className="inline-block relative h-[60px] min-w-[280px] align-middle">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={targetIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`absolute top-0 left-0 flex items-center gap-3 px-4 py-3 ${currentTarget.bgColor}`}
                  >
                    <TargetIcon style={{ color: currentTarget.color }} className="text-2xl flex-shrink-0" />
                    <span className="font-bold whitespace-nowrap text-3xl">{currentTarget.name}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
