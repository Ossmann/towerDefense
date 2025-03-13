'use server';

import postgres from 'postgres';
import { Game } from './definitions';
import { FetchedGame } from './definitions';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}
const sql = postgres(process.env.DATABASE_URL, { ssl: 'verify-full' });

// fetch the games for overview page sorted by quality, 20 at a time
export async function fetchGames(page: number) {
  try {
    console.log('Attempting to fetch games from database...');
    
    // Calculate OFFSET dynamically
    const offset = (page - 1) * 20;

    // Use parameterized query to avoid SQL injection
    const data = await sql<Game[]>`
      SELECT * FROM games
      ORDER BY quality_score DESC
      LIMIT 20 OFFSET ${offset};
    `;
    
    return data;
  } catch (error) {
    console.error('Database Error:', error);

    if (typeof error === 'object' && error !== null && 'code' in error) {
      console.error('Error code:', error.code);
    }
    // Log the environment variable (be cautious with sensitive data)
    console.log('POSTGRES_URL:', process.env.POSTGRES_URL?.replace(/:[^:]*@/, ':****@'));
    throw new Error(`Failed to fetch Game: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// fetch single game based on ID
export async function fetchGame(id: string): Promise<FetchedGame> {
  try {
    const result = await sql<FetchedGame[]>`
      SELECT * FROM games 
      WHERE id = ${id}
    `;

    if (result.length === 0) {
      throw new Error('Game not found');
    }

    return result[0];
  } catch (error) {
    console.error('Error fetching game:', error);
    throw new Error('Failed to fetch game');
  }
}

//get games from the search bar
export async function searchGames(query: string): Promise<FetchedGame[]> {
  try {
    const data = await sql<Game[]>`
      SELECT * FROM games
      WHERE title ILIKE '%' || ${query} || '%'
      ORDER BY quality_score DESC;
    `;

    return data;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw new Error('Failed to fetch games');
  }
}
