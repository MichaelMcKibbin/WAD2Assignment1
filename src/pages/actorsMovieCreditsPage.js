import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getActorMovieCredits, getActorName } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import MovieCard from "../components/movieCard";

const ActorsMovieCreditsPage = () => {
  const { id } = useParams();
  const {
    data: actorMovieCredits,
    isLoading,
    isError,
    error,
  } = useQuery(["actorMovieCredits", id], () => getActorMovieCredits(id));
  const { data: actorName, isLoading: isLoadingName } = useQuery(
    ["actorName", id],
    () => getActorName(id)
  );

  if (isLoading || isLoadingName) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const movieCredits = actorMovieCredits.cast;

  return (
    <PageTemplate
      title={`Movies starring ${actorName}`}
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
// movies stared in...

// const ActorsMovieCreditsPage = () => {
//   const { id } = useParams();
//   const { data, isLoading, isError, error } = useQuery(
//     ["actorMovieCredits", { id }],
//     () => getActorMovieCredits(id)
//   );

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error: {error.message}</div>;
//   }

//   const movieCredits = data.cast;
//   // movies stared in...
//   return (
//     <PageTemplate
//       title="Stared in"
//       movies={movieCredits}
//       action={(movie) => <>{/* Add your action icons or components here */}</>}
//     >
//       {movieCredits.map((credit) => (
//         <MovieCard key={credit.id} movie={credit} />
//       ))}
//     </PageTemplate>
//   );
// };

// export default ActorsMovieCreditsPage;
