import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

export function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <div className="relative">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tokens, pools, or projects..."
            className="w-full bg-gray-900/90 backdrop-blur-xl text-white pl-12 pr-10 py-4 rounded-xl border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}