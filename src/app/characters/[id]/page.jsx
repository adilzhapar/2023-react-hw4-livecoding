import axios from 'axios';
import Link from 'next/link';

const fetchCharacter = async (id) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

        return response.data;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


const CharacterPage = async ({ params }) => {
    const { id } = params;
    const character = await fetchCharacter(id);


    const { name, status, species, gender, origin, location, image } = character;

    return (
        <div className="flex min-h-screen">

            <main className='flex-grow flex items-center justify-center gap-12'>
                {parseInt(id) - 1 > 0
                    ? <Link className='card bg-slate-50 p-4 font-bold' href={`/characters/${parseInt(id) - 1}`}>&#8249;</Link>
                    : null
                }

                <div className="card bg-slate-50 flex flex-col items-center justify-center w-2/5 my-20 p-4">

                    <div className="flex items-center justify-center mb-4">
                        <img src={image} alt={name} className="rounded-full w-32 h-32" />
                        <div className="ml-4">
                            <h2 className="text-2xl font-bold">{name}</h2>
                            <p className="text-gray-600">{species}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-bold mb-2">Details:</h3>
                            <p>
                                <span className="font-bold">Status:</span> {status}
                            </p>
                            <p>
                                <span className="font-bold">Gender:</span> {gender}
                            </p>
                            <p>
                                <span className="font-bold">Origin:</span> {origin.name}
                            </p>
                            <p>
                                <span className="font-bold">Location:</span> {location.name}
                            </p>
                        </div>

                    </div>

                </div>
                <Link className='card bg-slate-50 p-4 font-bold' href={`/characters/${parseInt(id) + 1}`}>&#8250;</Link>
            </main>
        </div>
    )


}

export default CharacterPage;





// params = {
//     id: 1,
//     name: 'Rick Sanchez',
//     status: 'Alive',
// }

// const name = params.name;
// const status = params.status;

// Better:
// const {id, name, status} = params;