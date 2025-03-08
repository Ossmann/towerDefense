'use server';

import postgres from 'postgres';
import { Game } from './definitions';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}
const sql = postgres(process.env.DATABASE_URL, { ssl: 'verify-full' });

export async function fetchGames() {
  try {
    console.log('Attempting to fetch games from database...');
    const data = await sql<Game[]>`SELECT * FROM games`;

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
