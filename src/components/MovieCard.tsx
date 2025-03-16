import React, { useEffect, useState } from "react";
import "../styles/MovieCard.css";

interface MovieProps {
  movie: {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
  };
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  const [rating, setRating] = useState<string | null>(null);

  // Fetch IMDb rating
  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=8e358fc7`);
        const data = await response.json();
        if (data.imdbRating) {
          setRating(data.imdbRating);
        } else {
          setRating("N/A");
        }
      } catch (error) {
        console.error("Error fetching rating:", error);
        setRating("N/A");
      }
    };
    fetchRating();
  }, [movie.imdbID]);

  return (
    <div className="movie-card">
      <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" rel="noopener noreferrer">
        <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      </a>
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <p><strong>IMDb Rating:</strong> {rating}</p>
    </div>
  );
};

export default MovieCard;
