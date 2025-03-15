import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import "../styles/HomePage.css"; // Ensure this file exists for styling

// ✅ Define the Movie Type
type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

const HomePage: React.FC = () => {
  // ✅ Ensure movies state has the correct type
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (!searchQuery) return;

    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${searchQuery}&apikey=8e358fc7`
        );
        
        const data = await response.json();
        if (data.Search) setMovies(data.Search);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return (
    <div className="home-container">
      <h1>🎬 Movie Finder</h1>
      <SearchBar onSearch={setSearchQuery} />
      
      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie: Movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p className="no-results">No movies found. Try another search!</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
