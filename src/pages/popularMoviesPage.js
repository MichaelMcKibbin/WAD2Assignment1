// import React from "react";
// import PageTemplate from "../components/templateMovieListPage";
// import { getPopularMovies } from "../api/tmdb-api";
// import Spinner from "../components/spinner";
// import { useQuery } from "react-query";
// import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
// import RemoveFromFavoritesIcon from "../components/cardIcons/removeFromFavorites";
// import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
// import RemoveFromPlaylistIcon from "../components/cardIcons/removeFromPlaylist";
// import MovieReviewIcon from "../components/cardIcons/writeReview";

// const PopularMoviesPage = (props) => {
//   // const {data, error, isLoading, isError } = useQuery('popular', getPopularMovies)
//   const [page, setPage] = React.useState(1);
//   const { data, error, isLoading, isError } = useQuery(
//     ["popular", page],
//     () => getPopularMovies(page),
//     { keepPreviousData: true }
//   );
//   //  );

//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }

//   const popularMovies = data.results;

//   // // Redundant, but necessary to avoid app crashing.
//   // const favorites = movie.filter((m) => m.favorite);
//   // localStorage.setItem("favorites", JSON.stringify(favorites));
//   // const addToFavorites = (movieId) => true;

//   // const playlist = movie.filter((m) => m.playlist);
//   // localStorage.setItem("playlist", JSON.stringify(playlist));
//   // const addToPlaylist = (movieId) => true;

//   return (
//     <PageTemplate
//       title="Popular Movies"
//       movies={popularMovies}
//       page={page}
//       setPage={setPage}
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
// export default PopularMoviesPage;
//
//===========
// Testing: Fault with image id in api call.
// = = = = = =
//

// const PopularMoviesPage = (props) => {
//   const { data, error, isLoading, isError } = useQuery(
//     "popular",
//     getPopularMovies
//   );

//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }

//   const movie = data.results;

//   // Redundant, but necessary to avoid app crashing.
//   const favorites = movie.filter((m) => m.favorite);
//   localStorage.setItem("favorites", JSON.stringify(favorites));
//   const addToFavorites = (movieId) => true;

//   const playlist = movie.filter((m) => m.playlist);
//   localStorage.setItem("playlist", JSON.stringify(playlist));
//   const addToPlaylist = (movieId) => true;

//   return (
//     <PageTemplate
//       title="Popular Movies"
//       movies={movie}
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

// export default PopularMoviesPage;

import React from "react";
import { useQuery } from "react-query";
import { getPopularMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import MovieCard from "../components/movieCard";

const PopularMoviesPage = () => {
  const { data, isLoading, isError, error } = useQuery(
    "popularMovies",
    getPopularMovies
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Popular Movies"
      movies={movies}
      action={(movie) => <>{/* Add your action icons or components here */}</>}
    >
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          title={movie.title}
          poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
      ))}
    </PageTemplate>
  );
};

export default PopularMoviesPage;
