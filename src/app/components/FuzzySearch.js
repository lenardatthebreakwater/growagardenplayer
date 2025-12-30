'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FuzzySearch({ posts }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Fuzzy search algorithm
  const fuzzyMatch = (text, query) => {
    const textLower = text.toLowerCase();
    const queryLower = query.toLowerCase();
    
    let score = 0;
    let queryIndex = 0;
    let previousMatchIndex = -1;
    
    for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
      if (textLower[i] === queryLower[queryIndex]) {
        score += 1;
        
        // Bonus for consecutive matches
        if (previousMatchIndex === i - 1) {
          score += 5;
        }
        
        // Bonus for matches at word boundaries
        if (i === 0 || textLower[i - 1] === ' ') {
          score += 8;
        }
        
        previousMatchIndex = i;
        queryIndex++;
      }
    }
    
    // Return 0 if not all query characters were matched
    if (queryIndex !== queryLower.length) {
      return 0;
    }
    
    return score;
  };

  // Search posts with fuzzy matching
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredPosts([]);
      return;
    }

    const results = posts
      .map(post => ({
        post,
        score: fuzzyMatch(post.title, searchQuery) + 
               fuzzyMatch(post.category, searchQuery) * 0.5
      }))
      .filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(result => result.post);

    setFilteredPosts(results);
  }, [searchQuery, posts]);

  // Close search on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close search on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleOpenSearch = () => {
    setIsOpen(true);
  };

  const handleCloseSearch = () => {
    setIsOpen(false);
    setSearchQuery('');
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      {/* Search Button */}
      <button
        onClick={handleOpenSearch}
        className="text-gray-600 hover:text-[#2B5E3A] text-sm font-medium flex items-center gap-1"
        aria-label="Open search"
      >
        Search <span aria-hidden="true">🔍</span>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4">
          <div
            ref={searchRef}
            className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden"
          >
            {/* Search Input */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles... (try fuzzy search like 'xp pts' for XP Pets)"
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CBA5A] focus:border-transparent"
                  aria-label="Search articles"
                />
                <button
                  onClick={handleCloseSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Close search"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Search Results */}
            <div className="overflow-y-auto max-h-[calc(80vh-100px)]">
              {searchQuery.trim() && filteredPosts.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  <p className="text-lg">No articles found</p>
                  <p className="text-sm mt-2">Try different keywords or check your spelling</p>
                </div>
              )}

              {searchQuery.trim() && filteredPosts.length > 0 && (
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-3 px-2">
                    Found {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
                  </p>
                  <div className="space-y-2">
                    {filteredPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/posts/${post.slug}`}
                        onClick={handleCloseSearch}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                      >
                        <div className="flex gap-3">
                          <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              sizes="80px"
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-[#2B5E3A] text-sm mb-1 line-clamp-2">
                              {post.title}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                                {post.category}
                              </span>
                              <span>•</span>
                              <time dateTime={post.date}>{formatDate(post.date)}</time>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {!searchQuery.trim() && (
                <div className="p-8 text-center text-gray-500">
                  <p className="text-lg mb-2">Start typing to search</p>
                  <p className="text-sm">Search by title, category, or keywords</p>
                </div>
              )}
            </div>

            {/* Keyboard Shortcuts Hint */}
            <div className="p-3 border-t border-gray-200 bg-gray-50">
              <p className="text-xs text-gray-500 text-center">
                Press <kbd className="px-2 py-0.5 bg-white border border-gray-300 rounded text-xs">ESC</kbd> to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}