// app/admin/components/FetchGamesButton.tsx
'use client';

import { useState } from 'react';
import { Game } from '../lib/definitions';
import { insertGame } from '../lib/data_submit';

const newGame: Partial<Game> = {
  title: "TestPushGame",
  namespace: "test",
  description: "A test game",
};

export default function FetchGamesButton() {
  const [status, setStatus] = useState<string>('');

  const handleInsertGame = async () => {
    try {
      const newGameId = await insertGame(newGame);
      setStatus(`New game inserted with ID: ${newGameId}`);
      console.log("New game inserted with ID:", newGameId);
    } catch (error) {
      setStatus('Failed to insert game');
      console.error("Failed to insert game:", error);
    }
  };

  return (
    <div className=''>
      <button className='bg-blue-500 p-4 rounded-lg shadow-md text-white' onClick={handleInsertGame}>Insert New Game</button>
      {status && <p>{status}</p>}
    </div>
  );
}
