import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../components/spinner";
import PageTemplate from "../components/templateMovieListPage";
import { getSimilarMovies, getMovie } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import RemoveFromPlaylistIcon from "../components/cardIcons/removeFromPlaylist";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import RemoveFromFavoritesIcon from "../components/cardIcons/removeFromFavorites";
import MovieReviewIcon from "../components/cardIcons/writeReview";

const SimilarMoviesPage = () => {
  const { id } = useParams();
  const {
    data: similar,
    error,
    isLoading,
    isError,
  } = useQuery(["similar", { id: id }], getSimilarMovies);
  const { data: movie, isLoading: isMovieLoading } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isError) return <h1>{error.message}</h1>;
  if (isLoading || isMovieLoading) return <Spinner />;

  const movies = similar.results;

  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  const playlist = movies.filter((m) => m.playlist);
  localStorage.setItem("playlist", JSON.stringify(playlist));

  return (
    <>
      {similar ? (
        <>
          <PageTemplate
            title={`Similar to ${movie.title}`}
            movies={movies}
            action={(movie) => {
              return (
                <>
                  {movie.favorite ? (
                    <RemoveFromFavoritesIcon movie={movie} />
                  ) : (
                    <AddToFavoritesIcon movie={movie} />
                  )}
                  {movie.playlist ? (
                    <RemoveFromPlaylistIcon movie={movie} />
                  ) : (
                    <AddToPlaylistIcon movie={movie} />
                  )}
                  <MovieReviewIcon movie={movie} />
                </>
              );
            }}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
export default SimilarMoviesPage;
