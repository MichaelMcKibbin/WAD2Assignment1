import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMoviesStaredIn } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import MovieCard from "../components/movieCard";

const ActorsCreditsPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    ["actorMovieCredits", { id }],
    () => getActorsCredits(id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const movieCredits = data.cast;

  return (
    <PageTemplate
      title="Movies stared in "
      movies={movieCredits}
      action={(movie) => <>{/* Add your action icons or components here */}</>}
    >
      {movieCredits.map((credit) => (
        <MovieCard key={credit.id} movie={credit} />
      ))}
    </PageTemplate>
  );
};

export default ActorsCreditsPage;
