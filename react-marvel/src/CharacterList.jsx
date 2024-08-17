import {useState, useEffect} from 'react';
import axios from 'axios';
import './CharacterList.css';
import {Link} from 'react-router-dom';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?limit=4&ts=1&apikey=b97ba94173991a29c43d20160bc378b1&hash=c73d1dea3fa3833da7dd6b35c9b160b0`);
                console.log(response.data.data.results);
                setCharacters(response.data.data.results);
        }   catch(error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchCharacters();
    },[]);

    return (
        <div>
            <h3>Characters</h3>
            <div className="grid-container">
                {characters.map(character => (
                    <div key={character.id} className="grid-item">
                        <img 
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                        width="200" 
                        alt={character.name} 
                        className="thumbnail"/>
                        <p>{character.name}</p>
                        <Link to={`/characters/${character.id}`}>
                            View Details
                        </Link>
                    </div>
            ))}
            </div>
        </div>
    );
};

export default CharacterList;