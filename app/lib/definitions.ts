

export type Game = {
    id: number;
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
  