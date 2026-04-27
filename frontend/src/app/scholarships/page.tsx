"use client";

import React, { useState } from 'react';
import ScholarshipCard from '@/components/ScholarshipCard';

interface Scholarship {
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  eligibility: string;
  link: string;
}

export default function ScholarshipsPage() {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('latest international scholarships for university students');

  const fetchScholarships = async () => {
    setLoading(true);
    setError('');
    try {
      // In production this would point to the deployed backend
      const response = await fetch(`http://localhost:8000/api/scholarships/search?query=${encodeURIComponent(query)}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch scholarships');
      }
      
      const data = await response.json();
      setScholarships(data);
    } catch (err) {
      console.error(err);
      setError('Could not fetch scholarships. Please make sure the backend is running and you have set your OpenAI API key.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0B0F19] to-[#0B0F19] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Live Scholarship Search
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Our AI Search Agent scours the web in real-time to find the latest scholarships matching your criteria.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. latest STEM scholarships in UK"
              className="w-full md:w-2/3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button 
              onClick={fetchScholarships}
              disabled={loading}
              className={`w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all ${loading ? 'bg-blue-600/50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]'}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Searching...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search Latest
                </>
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-6 rounded-xl text-center mb-12 max-w-3xl mx-auto">
            {error}
          </div>
        )}

        {scholarships.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <ScholarshipCard key={index} {...scholarship} />
            ))}
          </div>
        ) : !loading && !error && (
          <div className="text-center text-gray-500 mt-20">
            <svg className="w-24 h-24 mx-auto mb-6 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="text-xl">Click "Search Latest" to find opportunities worldwide.</p>
          </div>
        )}
      </div>
    </div>
  );
}
