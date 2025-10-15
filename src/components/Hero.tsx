'use client';

import { FaGithub, FaJira, FaGitlab } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaRobot, FaCheckCircle, FaDollarSign } from 'react-icons/fa';

function WorkflowAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const issues = [
    { id: 'TASK-101', selected: true },
    { id: 'TASK-102', selected: false },
    { id: 'TASK-103', selected: true },
    { id: 'TASK-104', selected: false },
    { id: 'TASK-105', selected: true },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-4 gap-4 items-center">
        {/* Jira Issues */}
        <div className="flex flex-col gap-2">
          <div className="text-xs text-muted-foreground mb-1 text-center">Jira Issues</div>
          {issues.map((issue, idx) => (
            <motion.div
              key={issue.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: step >= 0 ? 1 : 0,
                x: step >= 0 ? 0 : -20,
                scale: issue.selected && step >= 1 ? 1.1 : 1,
                borderColor: issue.selected ? '#0052CC' : '#333'
              }}
              transition={{ delay: idx * 0.1 }}
              className={`p-2 rounded border text-xs flex items-center gap-2 ${
                issue.selected ? 'bg-[#0052CC]/20 border-[#0052CC]' : 'bg-gray-800/50 border-gray-700'
              }`}
            >
              <FaJira className={issue.selected ? 'text-[#0052CC]' : 'text-gray-500'} size={12} />
              <span className="text-[10px]">{issue.id}</span>
              {issue.selected && step >= 1 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto"
                >
                  <FaCheckCircle className="text-[#0052CC]" size={10} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Arrow 1: Jira → Agent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: step >= 1 ? 1 : 0, scaleX: step >= 1 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center origin-left"
        >
          <div className="w-full h-0.5 bg-gradient-to-r from-[#0052CC] to-purple-500" />
          <div className="w-0 h-0 border-l-8 border-l-purple-500 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
        </motion.div>

        {/* AI Agent */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: step >= 1 ? 1 : 0,
            scale: step >= 1 ? 1 : 0,
            rotate: step >= 2 ? [0, 5, -5, 0] : 0
          }}
          transition={{ duration: 0.5, rotate: { repeat: Infinity, duration: 2 } }}
          className="flex flex-col items-center gap-2"
        >
          <div className="text-xs text-muted-foreground">AI Agent</div>
          <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/50">
            <FaRobot className="text-purple-400" size={32} />
          </div>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] text-center text-green-400"
            >
              Processing...
            </motion.div>
          )}
        </motion.div>

        {/* MR & Profit */}
        <div className="flex flex-col gap-4">
          {/* MR */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: step >= 2 ? 1 : 0, x: step >= 2 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 p-2 rounded border border-[#FC6D26]/50 bg-[#FC6D26]/10"
          >
            <FaGitlab className="text-[#FC6D26]" size={16} />
            <div className="flex flex-col">
              <span className="text-xs font-bold">MR Created</span>
              <span className="text-[10px] text-muted-foreground">3 issues</span>
            </div>
          </motion.div>

          {/* Profit */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: step >= 3 ? 1 : 0,
              scale: step >= 3 ? 1 : 0,
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 p-2 rounded border border-green-500/50 bg-green-500/10"
          >
            <FaDollarSign className="text-green-400" size={16} />
            <span className="text-xs font-bold text-green-400">Profit!</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

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
        <div className="p-6 sm:p-8 md:p-12 lg:p-16 space-y-4 sm:space-y-6 lg:border-r border-brand/10">
          <div className="inline-block px-3 py-1 border border-brand/20 rounded-full text-xs sm:text-sm">
            First production test: Oct 9
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <div className="mb-2">
              <span>From </span>
              <div className="inline-block relative h-[50px] sm:h-[60px] min-w-[220px] sm:min-w-[280px] align-middle">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={sourceIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`absolute top-0 left-0 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 ${currentSource.bgColor}`}
                  >
                    <SourceIcon style={{ color: currentSource.color }} className="text-xl sm:text-2xl flex-shrink-0" />
                    <span className="font-bold whitespace-nowrap text-xl sm:text-2xl md:text-3xl">{currentSource.name}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div>
              <span>to </span>
              <div className="inline-block relative h-[50px] sm:h-[60px] min-w-[220px] sm:min-w-[280px] align-middle">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={targetIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`absolute top-0 left-0 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 ${currentTarget.bgColor}`}
                  >
                    <TargetIcon style={{ color: currentTarget.color }} className="text-xl sm:text-2xl flex-shrink-0" />
                    <span className="font-bold whitespace-nowrap text-xl sm:text-2xl md:text-3xl">{currentTarget.name}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Autonomous AI agent that codes, tests, and ships features.
          </p>

          <div className="pt-2 sm:pt-4">
            <div className="text-xs sm:text-sm text-muted-foreground mb-2">Now</div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold">2 companies testing production backlogs</div>
            <div className="mt-4 pt-4 border-t border-brand/20">
              <div className="text-xs sm:text-sm text-muted-foreground mb-2">Vision (2026)</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold">7,000 teams · $750K ARR</div>
            </div>
          </div>
        </div>

        {/* Right: Workflow Animation */}
        <div className="flex items-center justify-center bg-black/5 w-full min-h-[300px] sm:min-h-[400px] lg:min-h-0 p-8">
          <WorkflowAnimation />
        </div>
      </div>
    </section>
  );
}
