'use server';

import postgres from "postgres";
import { Game } from "./definitions";

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}
const sql = postgres(process.env.DATABASE_URL, { ssl: 'verify-full' });

// Function to insert a new game into the database
export async function insertGame(game: Partial<Game>) {
    try {
      // Dynamically construct the SQL query to include only provided fields
      const result = await sql`
        INSERT INTO games ${sql(game)}
        RETURNING id
      `;
      return result[0].id;
    } catch (error) {
      console.error("Error inserting game:", error);
      throw error;
    }
  }
