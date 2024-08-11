import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [playlist, setPlaylist] = useState([]);
  const [page, setPage] = useState({});

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)) {
      newFavorites = [...favorites, movie.id];
    } else {
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites);
  };
  const addToPlaylist = (movie) => {
    let newPlaylist = [];
    if (!playlist.includes(movie.id)) {
      newPlaylist = [...playlist, movie.id];
    } else {
      newPlaylist = [...playlist];
    }
    setPlaylist(newPlaylist);
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };
  //console.log(myReviews);

  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter((mId) => mId !== movie.id));
  };
  const removeFromPlaylist = (movie) => {
    setPlaylist(playlist.filter((mId) => mId !== movie.id));
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        playlist,
        addToPlaylist,
        removeFromPlaylist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

// = = =
// TODO - errors with firebase imports and props.children
// Trying to save the favorites list and playlist to firebase database
// = = =

// //import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
// import { auth } from "../firebase-config";
// import { getUserData } from "../firebase-utils";

// export const MoviesContext = React.createContext(null);

// const MoviesContextProvider = (props) => {
//   const [favorites, setFavorites] = useState([]);
//   const [myReviews, setMyReviews] = useState({});
//   const [playlist, setPlaylist] = useState([]);
//   const [page, setPage] = useState({});

//   const addToFavorites = (movie) => {
//     let newFavorites = [];
//     if (!favorites.includes(movie.id)) {
//       newFavorites = [...favorites, movie.id];
//     } else {
//       newFavorites = [...favorites];
//     }
//     setFavorites(newFavorites);
//   };
//   const addToPlaylist = (movie) => {
//     let newPlaylist = [];
//     if (!playlist.includes(movie.id)) {
//       newPlaylist = [...playlist, movie.id];
//     } else {
//       newPlaylist = [...playlist];
//     }
//     setPlaylist(newPlaylist);
//   };

//   const addReview = (movie, review) => {
//     setMyReviews({ ...myReviews, [movie.id]: review });
//   };
//   //console.log(myReviews);

//   // We will use this function in a later section
//   const removeFromFavorites = (movie) => {
//     setFavorites(favorites.filter((mId) => mId !== movie.id));
//   };
//   const removeFromPlaylist = (movie) => {
//     setPlaylist(playlist.filter((mId) => mId !== movie.id));
//   };

//   return (
//     <MoviesContext.Provider
//       value={{
//         favorites,
//         addToFavorites,
//         removeFromFavorites,
//         addReview,
//         playlist,
//         addToPlaylist,
//         removeFromPlaylist,
//       }}
//     >
//       {props.children}
//     </MoviesContext.Provider>
//   );
// };
// // save the favorites list and playlist to firebase database

// const UserDataComponent = () => {
//   const [favorites, setFavorites] = useState([]);
//   const [playlist, setPlaylist] = useState([]);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (auth.currentUser) {
//         const { favorites, playlist } = await getUserData();
//         setFavorites(favorites);
//         setPlaylist(playlist);
//       }
//     };

//     fetchUserData();
//   }, []);

//   return (
//     <MoviesContext.Provider
//       value={{
//         favorites,
//         setFavorites,
//         // Other context values...
//       }}
//     >
//       {props.children}
//     </MoviesContext.Provider>
//   );
// };

// export default UserDataComponent;
// export { MoviesContextProvider };
