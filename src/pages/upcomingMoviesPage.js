import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import { getUpcoming } from "../api/tmdb-api";
import { useQuery } from "react-query";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import RemoveFromPlaylistIcon from "../components/cardIcons/removeFromPlaylist";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import RemoveFromFavoritesIcon from "../components/cardIcons/removeFromFavorites";
import MovieReviewIcon from "../components/cardIcons/writeReview";

// Custom hook for fetching upcoming movies
const useUpcomingMovies = () => {
  return useQuery("upcoming", getUpcoming);
};

const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useUpcomingMovies();

  // Handle loading state
  if (isLoading) {
    return <Spinner />;
  }

  // Handle error state
  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Coming soon, to a theater near you..."
      movies={movies}
      action={(movie) => (
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
      )}
    />
  );
};

export default UpcomingMoviesPage;
