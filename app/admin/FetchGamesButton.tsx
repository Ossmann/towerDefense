// app/admin/components/FetchGamesButton.tsx
'use client';

import { useState } from 'react';

export default function FetchGamesButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ success?: boolean; totalGames?: number; error?: any } | null>(null);

  const handleFetchGames = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    setResult(null);
    
    try {
      const response = await fetch('/api/fetch-games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ success: false, error: 'Failed to fetch games' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleFetchGames}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {isLoading ? 'Fetching Games...' : '2Fetch All Games'}
      </button>
      
      {result && (
        <div className="mt-4 p-4 border rounded">
          {result.success ? (
            <p className="text-green-600">Successfully processed {result.totalGames} games!</p>
          ) : (
            <p className="text-red-600">Error: {JSON.stringify(result.error)}</p>
          )}
        </div>
      )}
    </div>
  );
}