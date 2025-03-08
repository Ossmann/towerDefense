import Navbar from '../components/Topbar/Topbar';
import FetchGamesButton from './FetchGamesButton';
import { fetchGame } from '../lib/data';
import { Game } from '../lib/definitions';

export default async function Admin() {
    const games = await fetchGame();

    return (
      <div className='relative h-screen'>
        
        <div className='hidden sm:mb-200 md:block fixed top-0 left-0 right-0 z-20'>
          <Navbar />
        </div>
  
        <div className='p-60'>
        <FetchGamesButton />
        </div>

        <div className='p-4'>
        <h2 className="text-2xl font-bold mb-4">Game List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {games.map((game: Game) => (
              <div key={game.id} className="border p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                <img src={game.image} alt={game.title} className="w-full h-40 object-cover mb-2 rounded" />
                <p className="text-sm mb-2">{game.description}</p>
                <p><strong>Category:</strong> {game.category.join(', ')}</p>
                <p><strong>Orientation:</strong> {game.orientation}</p>
                <p><strong>Quality Score:</strong> {game.quality_score}</p>
                <p><strong>Published:</strong> {new Date(game.date_published).toLocaleDateString()}</p>
                <a href={game.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Play Game</a>
              </div>
            ))}
          </div>
        </div>
    
        {/* Empty bottom space */}
        <div className='p-8'></div>
      </div>
    );
  }