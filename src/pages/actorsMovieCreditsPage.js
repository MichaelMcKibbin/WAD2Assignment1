import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getActorMovieCredits } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import MovieCard from "../components/movieCard";

const ActorsMovieCreditsPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    ["actorMovieCredits", { id }],
    () => getActorMovieCredits(id)
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
      title="Actor Movie Credits"
      movies={movieCredits}
      action={(movie) => <>{/* Add your action icons or components here */}</>}
    >
      {movieCredits.map((credit) => (
        <MovieCard key={credit.id} movie={credit} />
      ))}
    </PageTemplate>
  );
};

export default ActorsMovieCreditsPage;
