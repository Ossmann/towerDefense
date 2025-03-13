import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 text-center">
      <input
        type="text"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
        placeholder="Search games..."
        className="md:w-1/3 w-full p-2 border rounded mr-4"
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">Search</button>
    </form>
  );
}
