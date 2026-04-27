import React from "react";

export default function Home() {
  const agents = [
    {
      name: "Search Agent",
      description: "Autonomously scrape and aggregate global scholarship data.",
      icon: "🔍",
    },
    {
      name: "Matching Agent",
      description: "AI-driven NLP compatibility scoring for student profiles.",
      icon: "⚡",
    },
    {
      name: "Notification Agent",
      description: "Personalized deadline alerts via Email, SMS, and Push.",
      icon: "🔔",
    },
    {
      name: "Guidance Agent",
      description: "Generative AI assistance for essays and application prep.",
      icon: "✍️",
    },
    {
      name: "Verification Agent",
      description: "Automated credential and document authenticity checks.",
      icon: "✅",
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950 text-slate-50 flex flex-col items-center">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 w-full max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          System Initialization Active
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-purple-400">
          Scholara AI
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Your Intelligent Multi-Agent Scholarship Matchmaker. We bridge the gap between ambitious students and global educational opportunities using an advanced AI swarm architecture.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transform hover:-translate-y-1">
            Get Started
          </button>
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-md">
            View Documentation
          </button>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Core Architecture: The Agent Swarm</h2>
          <p className="text-slate-400">Five specialized sub-agents working in harmony</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <div
              key={agent.name}
              className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group ${
                index === 3 ? "lg:col-start-2 lg:-translate-x-1/2" : ""
              } ${index === 4 ? "lg:col-start-3 lg:-translate-x-1/2" : ""}`}
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{agent.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{agent.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{agent.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
