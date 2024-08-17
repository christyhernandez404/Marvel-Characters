import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';


function CharacterDetail() {
    const {id} = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);


 
    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=d33c0b97e209d2bad157f9fe7fd76b8f&hash=6f81279c9d2690cf7280ef207a3dc7bb`);
                console.log(response.data);
                setCharacter(response.data.data.results[0]);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching character:", error);
            }
        };

        fetchCharacter();
    }, [id]);

    if(loading){
        return <h3>Loading Characters...</h3>
    }

    return (
        <div>
            <br/>
            <Link to={'/characters'}>Go Back to Characters</Link>
            <br/>

            <div>
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    width="200" alt={character.name}/>

                <h3>{character.name}</h3>
                <h4>Description</h4>


                {character.description && (
                    <div>
                        <p>{character.description}</p>
                        
                    </div>

                )}
                <div>
                    <h4>Comics</h4>
                    <ul>
                        {character.comics.items.map((comic) => (
                            <li key={comic.resourceURI}>
                                {comic.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CharacterDetail;