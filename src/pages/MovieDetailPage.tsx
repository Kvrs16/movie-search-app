import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovies } from "../api/omdbApi";

const MovieDetailPage: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const result = await fetchMovies(id || "");
      setMovie(result);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading movie details...</p>;

  return (
    <div className="movie-detail">
      <img src={movie.Poster} alt={movie.Title} />
      <h1>{movie.Title}</h1>
      <p>{movie.Year}</p>
      <p>{movie.Plot}</p>
    </div>
  );
};

export default MovieDetailPage;
