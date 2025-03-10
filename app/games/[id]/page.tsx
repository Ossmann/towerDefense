import IframeEmbed from '../../components/Iframe';
import { FetchedGame } from '../../lib/definitions';
import { fetchGame } from '../../lib/data_fetch';
import Navbar from '../../components/Topbar/Topbar'
import MobileNav from '../../components/Topbar/MobileNav'


async function getGameDetails(id: string): Promise<FetchedGame> {
  return await fetchGame(id); // Directly return the result
}

export default async function GamePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Destructure after awaiting
  const game = await getGameDetails(id);
  const gameWidth = game.width.toString();
  const gameHeight = game.height.toString();

  return (
    <div>
      <div className='hidden md:block'>
      <Navbar />
      </div>
      <div className='block md:hidden'>
      <MobileNav />
      </div>
      <div className="mx-auto p-12 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{game.title}</h1>
        <p className="hidden md-block text-gray-700 text-sm mb-4">{game.description}</p>
        <div className="flex justify-center items-center mb-4">

        <div className="hidden md:block">
          <IframeEmbed 
            url={game.url} 
            width={gameWidth}
            height={gameHeight} 
          />
        </div>
        {/* //Mobile iframe for the game */}
        <div className="block md:hidden w-full max-w-screen overflow-hidden">
          <IframeEmbed 
            url={game.url} 
            width="100%" 
            height="100%" 
            className="w-full aspect-video" 
          />
        </div>
        </div>
        <p className="text-sm text-gray-600 mb-2">
        {game.category.map((category, index) => (
            <span
              key={index}
              className="inline-block bg-cyan-400 text-white rounded-full px-2 py-1 mx-1"
            >
              {category}
            </span>
          ))}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          {game.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-blue-800 text-white rounded-full px-2 py-1 mx-1"
            >
              {tag}
            </span>
          ))}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Instructions:</span> {game.instructions}
        </p>
      </div>
    </div>
  );
}
