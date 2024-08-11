//import React from "react";
import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
//import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarTwoToneIcon from "@mui/icons-material/StarHalfTwoTone";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { StarHalf, StarHalfTwoTone } from "@mui/icons-material";
import StarsTwoToneIcon from "@mui/icons-material/StarsTwoTone";
import customFavoriteIcon from "../../images/customFavoriteIcon24.png"; // custom icon

export default function MovieCard({ movie, action }) {
  const { favorites, addToFavorites } = useContext(MoviesContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false;
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };
  //
  const { playlist, addToPlaylist } = useContext(MoviesContext);
  if (playlist.find((id) => id === movie.id)) {
    movie.playlist = true;
  } else {
    movie.playlist = false;
  }

  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    addToPlaylist(movie);
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        border: "1px solid #057aa1",
        borderRadius: "0.8rem",
        transition: "transform 0.25s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
        backgroundColor: "#c1d8e3",
        boxShadow: "0 0 10px rgba(20, 40, 60, 0.2)",
        "& .MuiCardContent-root": {
          color: "black",
          "& h2": { color: "purple" },
        },
      }}
      variant="outlined"
      //raised={true}
    >
      <CardHeader
        // TODO Is there a fix for the background color on two color icon? part of background is grey. Perhaps a custom icen instead.

        avatar={
          movie.favorite && movie.playlist ? (
            <Avatar>
              <img
                src={customFavoriteIcon}
                alt="FavPlay Icon"
                style={{
                  width: "24px", // Adjust the width and height as needed
                  height: "24px",
                }}
              />
            </Avatar>
          ) : movie.favorite ? (
            <Avatar sx={{ backgroundColor: "red" }}>
              <FavoriteIcon />
            </Avatar>
          ) : movie.playlist ? (
            <Avatar sx={{ backgroundColor: "green" }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/movies/${movie.id}`}></Link>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
