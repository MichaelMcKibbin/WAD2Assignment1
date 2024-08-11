// import React, { useState, useEffect } from "react";
// import PageTemplate from "../components/templateMovieListPage";
// import Spinner from "../components/spinner";
// import { getMovies, getLatest, topRatedMovies } from "../api/tmdb-api";
// import { useQuery } from "react-query";
// import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
// import RemoveFromFavoritesIcon from "../components/cardIcons/removeFromFavorites";
// import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
// import RemoveFromPlaylistIcon from "../components/cardIcons/removeFromPlaylist";
// import MovieReviewIcon from "../components/cardIcons/writeReview";

// // use caching for data
// const LatestMoviesPage = (props) => {
//   const { data, error, isLoading, isError } = useQuery("latest", getLatest);

//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }
//   const movies = data.results;

//   // Redundant, but necessary to avoid app crashing.
//   const favorites = movies.filter((m) => m.favorite);
//   localStorage.setItem("favorites", JSON.stringify(favorites));
//   const addToFavorites = (movieId) => true;

//   const playlist = movies.filter((m) => m.playlist);
//   localStorage.setItem("playlist", JSON.stringify(playlist));
//   const addToPlaylist = (movieId) => true;

//   return (
//     <PageTemplate
//       title="Latest Releases"
//       movies={movies}
//       action={(movie) => {
//         return (
//           <>
//             {movie.favorite ? (
//               <RemoveFromFavoritesIcon movie={movie} />
//             ) : (
//               <AddToFavoritesIcon movie={movie} />
//             )}
//             {movie.playlist ? (
//               <RemoveFromPlaylistIcon movie={movie} />
//             ) : (
//               <AddToPlaylistIcon movie={movie} />
//             )}
//             <MovieReviewIcon movie={movie} />
//           </>
//         );
//       }}
//     />
//   );
// };
// export default LatestMoviesPage;
import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getTopRatedMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { useQuery } from "react-query";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import RemoveFromFavoritesIcon from "../components/cardIcons/removeFromFavorites";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import RemoveFromPlaylistIcon from "../components/cardIcons/removeFromPlaylist";
import MovieReviewIcon from "../components/cardIcons/writeReview";
import LatestMovie from "./homePage";

const LatestMoviePage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "latest",
    getTopRatedMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movie = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movie.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  const addToFavorites = (movieId) => true;

  const playlist = movie.filter((m) => m.playlist);
  localStorage.setItem("playlist", JSON.stringify(playlist));
  const addToPlaylist = (movieId) => true;

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movie}
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
  );
};

export default LatestMoviePage;
