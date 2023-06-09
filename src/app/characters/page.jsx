import axios from "axios";
import Link from 'next/link';


const fetchData = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');

      return response.data.results;

    } catch (error) {
      console.error('Error fetching data:', error);
    }
};

const Characters = async () => {

    const characters = await fetchData();


    return (
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow flex items-center justify-center">
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-5 gap-8 my-12">
                        {
                            characters.map((character, index) => (
                                <Link className='flex flex-wrap gap-12' key={index} href={`/characters/${character.id}`}>
                                    <div className='card bg-slate-50 w-60 h-64 flex flex-col items-center justify-center'>
                                        <img src={character.image} alt={character.name} />
                                        <h2 className='text-xl font-bold'>{character.name}</h2>
                                    </div>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </main>
            </div>
    );
}

export default Characters;