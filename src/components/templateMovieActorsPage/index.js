import React, { useState } from "react";
import MovieActorList from "../movieActorList";
import Grid from "@mui/material/Grid";

function MovieActorsListPageTemplate({ actors, name, action }) {
  const [nameFilter, setNameFilter] = useState("");

  let displayedMovieActors = actors.filter((m) => {
    return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  });

  // for testing
  //return <h2>Actors List Page</h2>;
  //
  return (
    <Grid container sx={{ padding: "20px" }}>
      <Grid item xs={12}></Grid>
      <Grid item container spacing={5}>
        <MovieActorList
          action={action}
          actors={displayedMovieActors}
        ></MovieActorList>
      </Grid>
    </Grid>
  );
}
export default MovieActorsListPageTemplate;
