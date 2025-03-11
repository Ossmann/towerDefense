

export type Game = {
    id: string;
    title: string;
    namespace: string;
    description: string;
    category: string[];
    orientation: string;
    quality_score: number;
    width: number;
    height: number;
    date_modified: Date;
    date_published: Date;
    banner_image: string;
    image: string;
    url: string;
    instructions: string;
    tags: string[];
  }

  export type FetchedGame = {
    id: string;
    title: string;
    description: string;
    category: string[];
    orientation: string;
    width: number;
    height: number;
    banner_image: string;
    image: string;
    url: string;
    instructions: string;
    tags: string[];
  }
  
  export type GameMonetize = {
    id: string;
    title: string;
    description: string;
    category: string;
    thumb: string;
    width: string;
    height: string;
    instructions: string;
    url: string;
    tags: string;
  }

  export type GamePixFeed = {
    version: string;
    title: string;
    home_page_url: string;
    feed_url: string;
    next_url: string;
    first_page_url: string;
    last_page_url: string;
    modified: string;
    items: GamePixItem[];
};

  export type GamePixItem = {
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