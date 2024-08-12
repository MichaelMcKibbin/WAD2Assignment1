import React from "react";
import ActorsListTemplate from "../components/templateMovieActorsPage";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getMovieActors } from "../api/tmdb-api";
import { useParams } from "react-router-dom";

const MovieActorsPage = () => {
  const { id } = useParams();
  const { data, isLoading, error, isError } = useQuery(
    ["actor", { id: id }],
    getMovieActors
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data.cast;

  // Redundant, but necessary to avoid app crashing.
  const favorites = actors.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  return (
    <React.Fragment>
      {actors ? (
        <React.Fragment>
          <ActorsListTemplate
            title={`Cast of ${id}`}
            actors={actors}
            action={(actor) => {
              return <AddToFavoritesIcon actor={actor} />;
            }}
          />
        </React.Fragment>
      ) : (
        <p>Loading....</p>
      )}
    </React.Fragment>
  );
};
export default MovieActorsPage;
