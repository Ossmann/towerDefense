'use client'

// pages/sports-games.tsx
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Define TypeScript interfaces for the API response
interface GameItem {
  id: string;
  title: string;
  namespace: string;
  description: string;
  category: string;
  orientation: string;
  quality_score: number;
  width: number;
  height: number;
  date_modified: string;
  date_published: string;
  banner_image: string;
  image: string;
  url: string;
}

interface GameFeed {
  version: string;
  title: string;
  home_page_url: string;
  feed_url: string;
  next_url: string;
  first_page_url: string;
  last_page_url: string;
  modified: string;
  items: GameItem[];
}

export default function SportsGames() {
  const [allGames, setAllGames] = useState<GameItem[]>([]);
  const [filteredGames, setFilteredGames] = useState<GameItem[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  // List of categories that are considered "sports"
  // You may need to adjust this based on the actual categories in the API
  const sportsCategories = ['sports', 'basketball', 'football', 'soccer', 'tennis', 'golf', 'racing'];

  // Function to check if a game is a sports game
  const isSportsGame = (game: GameItem): boolean => {
    // Option 1: Check if category is exactly "sports"
    // return game.category.toLowerCase() === 'sports';
    
    // Option 2: Check if category is in our sports categories list
    return sportsCategories.includes(game.category.toLowerCase());
    
  };

  // Function to fetch games from the API - CLIENT-SIDE FILTERING APPROACH
  const fetchGames = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      const data: GameFeed = await response.json();
      
      // Store all games
      setAllGames(data.items);
      
      // Filter for sports games
      const sportsGames = data.items.filter(isSportsGame);
      setFilteredGames(sportsGames);
      
      setNextPageUrl(data.next_url || null);
      setLoading(false);
    } catch (err) {
      setError((err as Error).message);
      setLoading(false);
    }
  };

  // Function to fetch games with API filtering (if supported)
  const fetchGamesWithApiFilter = async (page: number) => {
    setLoading(true);
    try {
      // Add category parameter if the API supports it
      // Note: You need to check the API documentation to confirm if this is supported
      // This is a guess based on common API patterns
      const url = `https://feeds.gamepix.com/v2/json?sid=12411&pagination=12&page=${page}&category=sports`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      const data: GameFeed = await response.json();
      
      setFilteredGames(data.items);
      setNextPageUrl(data.next_url || null);
      setLoading(false);
    } catch (err) {
      setError((err as Error).message);
      setLoading(false);
    }
  };

  // Load games on component mount
  useEffect(() => {
    // Option 1: Client-side filtering
    fetchGames('https://feeds.gamepix.com/v2/json?sid=12411&pagination=12&page=1');
    
    // Option 2: API filtering (if supported)
    // fetchGamesWithApiFilter(1);
  }, []);

  // Function to load the next page
  const loadNextPage = () => {
    if (nextPageUrl) {
      // Option 1: Client-side filtering
      fetchGames(nextPageUrl);
      
      // Option 2: API filtering
      // fetchGamesWithApiFilter(currentPage + 1);
      
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to load the previous page
  const loadPreviousPage = () => {
    if (currentPage > 1) {
      // Option 1: Client-side filtering
      const prevPageUrl = `https://feeds.gamepix.com/v2/json?sid=12411&pagination=12&page=${currentPage - 1}`;
      fetchGames(prevPageUrl);
      
      // Option 2: API filtering
      // fetchGamesWithApiFilter(currentPage - 1);
      
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to truncate description text
  const truncateDescription = (text: string, maxLength: number = 100) => {
    // Remove HTML tags if present
    const plainText = text.replace(/<[^>]*>/g, '');
    
    if (plainText.length <= maxLength) return plainText;
    return plainText.slice(0, maxLength) + '...';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Sports Games - GamePix</title>
        <meta name="description" content="Browse and play sports games from GamePix" />
      </Head>

      <h1 className="text-3xl font-bold mb-8 text-center">Sports Games</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          Error: {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          {filteredGames.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-lg text-gray-600">No sports games found on this page.</p>
              <button 
                onClick={loadNextPage} 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                disabled={!nextPageUrl}
              >
                Check Next Page
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredGames.map((game) => (
                  <div key={game.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-40 w-full">
                      <Image 
                        src={game.banner_image} 
                        alt={game.title}
                        layout="fill"
                        objectFit="cover"
                        unoptimized // Using unoptimized because these are external images
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
                      <p className="text-gray-600 text-sm mb-3">{truncateDescription(game.description)}</p>
                      <div className="flex justify-between items-center mb-3">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {game.category}
                        </span>
                        <span className="text-yellow-500 text-sm">
                          {Math.round(game.quality_score * 100) / 100} ★
                        </span>
                      </div>
                      <a 
                        href={game.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded transition-colors duration-300"
                      >
                        Play Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={loadPreviousPage}
                  disabled={currentPage <= 1}
                  className={`px-4 py-2 rounded ${
                    currentPage <= 1 
                      ? 'bg-gray-300 cursor-not-allowed' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  Previous Page
                </button>
                <span className="py-2">Page {currentPage}</span>
                <button
                  onClick={loadNextPage}
                  disabled={!nextPageUrl}
                  className={`px-4 py-2 rounded ${
                    !nextPageUrl 
                      ? 'bg-gray-300 cursor-not-allowed' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  Next Page
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}