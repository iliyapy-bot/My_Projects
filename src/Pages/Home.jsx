import { Link } from 'react-router-dom';
import MovieCard from '../Card/MovieCard';
import { searchmovies, getPopularMovies } from '../services/api';
import React, { useState, useEffect } from 'react';

function Home() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);

    function handleSearch(event) {
        setSearchInput(event.target.value);
    }

    const handleButton = async (e) => {
        e.preventDefault();
        if (!searchInput.trim()) return;
        if (loading) return;

        setLoading(true);
        try {
            const searchResults = await searchmovies(searchInput);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("Failed to search movies");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="HomeDiv">
            <div className='SearchWrapper'>
                <header>
                    <div className='links'>
                        <Link className='link' to="/">Home</Link>
                        <Link className='link' to="favorite">Favorite</Link>
                    </div>
                    <div>
                        <Link className='SiteName' to="/">RadMovie</Link>
                    </div>
                </header>
                <main className='HomeMain'>
                    <div className='SearchDiv'>
                        <input
                            value={searchInput}
                            onChange={handleSearch}
                            placeholder='Search for your movie...'
                            type="text"
                        />
                        <button onClick={handleButton} className='Search-button'>search</button>
                    </div>

                    <div className='MovieSection'>
                        <div className='movieTitleDiv'>
                            <h2 className='MovieSectionTitle'>Movies</h2>
                        </div>

                        <div className='movies'>
                            {movies.map((movie) => (
                                <MovieCard movie={movie} key={movie.id} />
                            ))}
                        </div>
                        {error && <p>{error}</p>}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;
