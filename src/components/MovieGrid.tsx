import React from "react";
import MovieCard from "./MovieCard";

interface MovieGridProps {
  movies: Array<{
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
  }>;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieGrid;
