import React, { useState } from "react";
import { useQuery } from "react-query";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import Pagination from "@mui/material/Pagination";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import RemoveFromFavoritesIcon from "../components/cardIcons/removeFromFavorites";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import RemoveFromPlaylistIcon from "../components/cardIcons/removeFromPlaylist";
import MovieReviewIcon from "../components/cardIcons/writeReview";

const LatestMovie = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  const { data, error, isLoading, isError } = useQuery(
    ["discover", currentPage],
    () => getMovies(currentPage)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const { movies, totalPages } = data;

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <PageTemplate
        title="Discover Movies"
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
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
    </>
  );
};

export default LatestMovie;
