import React from 'react';

interface ScholarshipProps {
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  eligibility: string;
  link: string;
}

export default function ScholarshipCard({
  title, provider, amount, deadline, eligibility, link
}: ScholarshipProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#111827] p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{title}</h3>
        <p className="text-blue-400 font-medium mb-4 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          {provider}
        </p>
        
        <div className="space-y-3 mb-6 flex-grow">
          <div className="flex items-start text-gray-300">
            <svg className="w-5 h-5 mr-2 mt-0.5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <span className="font-semibold block text-sm text-gray-400">Amount</span>
              <span className="text-white font-medium">{amount}</span>
            </div>
          </div>
          <div className="flex items-start text-gray-300">
            <svg className="w-5 h-5 mr-2 mt-0.5 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div>
              <span className="font-semibold block text-sm text-gray-400">Deadline</span>
              <span className="text-white font-medium">{deadline}</span>
            </div>
          </div>
          <div className="flex items-start text-gray-300">
            <svg className="w-5 h-5 mr-2 mt-0.5 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <span className="font-semibold block text-sm text-gray-400">Eligibility</span>
              <span className="text-sm text-gray-300 line-clamp-3">{eligibility}</span>
            </div>
          </div>
        </div>

        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
        >
          View Details
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
