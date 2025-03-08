'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Game } from '../lib/definitions';
import { fetchGames } from '../lib/data_fetch';


// Games Grid Component
function GamesGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        setLoading(true);
        const data = await fetchGames();
        setGames(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching games:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      }
    };
  
    loadGames();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Sports Games Collection</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games?.map((game) => (
          <div 
            key={game.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src={game.banner_image}
                alt={game.title}
                width={512}
                height={384}
                className="transition-transform duration-300 hover:scale-105 object-cover"
              />
            </div>
            
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 truncate">{game.title}</h2>
              
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {game.description.length > 120 
                  ? `${game.description.substring(0, 120)}...` 
                  : game.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {game.tags?.map((tag, index) => (
                    <span 
                        key={index} 
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                    ))}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-1">
                    {game.category?.map((cat, index) => (
                    <span 
                        key={index}
                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                    >
                        {cat}
                    </span>
                    ))}
                </div>
                
                <Link 
                    href={game.url} 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Play Now
                </Link>
                </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Page component
export default function GamesMonetize() {
  return <GamesGrid />;
}