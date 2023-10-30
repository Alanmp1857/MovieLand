import { useEffect, useState } from "react";
import axios from "axios";
import { MOVIES_API_BY_SEARCH } from "../utils/constants";

const MovieCard = () => {
    const [movies, setMovies] = useState([]);

    // const imdbID = "tt1285016";

    useEffect(() => {
        const searchQuery = "John Wick";

        axios
            .get(MOVIES_API_BY_SEARCH + searchQuery)
            .then((json) => {
                if (json.data && json.data.Search) {
                    setMovies(json.data.Search);
                }
                console.log(json);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <ul className="flex flex-wrap justify-between">
                {movies.map((movie) => (
                    <li className="m-2 p-2" key={movie.imdbID}>
                        <h2>{movie.Title}</h2>
                        <p>Year: {movie.Year}</p>
                        <p>Type: {movie.Type}</p>
                        <img className="w-40" src={movie.Poster} alt={movie.Title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCard;
