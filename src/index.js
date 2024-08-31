import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import SiteHeader from "./components/siteHeader";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import LatestMoviesPage from "./pages/latestMoviesPage";
import PlaylistMoviesPage from "./pages/playlistMoviesPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import MovieActorsPage from "./pages/movieActorsPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import MoviesContextProvider from "./contexts/moviesContext";
import LoginOrSignupPage from "./pages/authenticationPage";
import Box from "@mui/material/Box";
import reportWebVitals from "./reportWebVitals";
import ActorsDetailsPage from "./pages/actorsDetailsPage";
import ActorsMovieCreditsPage from "./pages/actorsMovieCreditsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});
function App() {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        overflowY: "hidden",
        padding: "1%",
        transform: "translateX(-0.5rem),translateY(-2rem) ",
        backgroundColor: "rgba(50, 10, 10, 0.05)",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div>
            <section>
              <Routes>
                {" "}
                {/* <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Form />} />
                <Route path="/login" element={<Form />} /> */}
              </Routes>
            </section>
          </div>
          <SiteHeader />
          <MoviesContextProvider>
            <Routes>
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route
                path="/movies/favorites"
                element={<FavoriteMoviesPage />}
              />
              <Route path="/movies/playlist" element={<PlaylistMoviesPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/latest" element={<LatestMoviesPage />} />
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/movies/toprated" element={<TopRatedMoviesPage />} />
              <Route path="/movies/popular" element={<PopularMoviesPage />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route
                path="/movies/similar/:id"
                element={<SimilarMoviesPage />}
              />
              <Route path="/actors/credits/:id" element={<MovieActorsPage />} />
              <Route path="/actors/:id" element={<ActorsDetailsPage />} />
              <Route
                path="/actors/:id/actors-movies/"
                element={<ActorsMovieCreditsPage />}
              />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/authentication" element={<LoginOrSignupPage />} />

              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </MoviesContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Box>
  );
}

// const rootElement = createRoot(document.getElementById("root"));
// rootElement.render(<App />);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
