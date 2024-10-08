import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import { useNavigate } from "react-router-dom";

const MovieHeader = (props) => {
  const movie = props.movie;
  const navigate = useNavigate();

  return (
    <Paper
      elevation={10}
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        padding: 1.5,
        margin: 0,
      }}
    >
      <IconButton aria-label="go back" onClick={() => navigate(-1)}>
        <ArrowCircleLeftIcon color="primary" fontSize="large" />
        Back
      </IconButton>

      <Typography variant="h4" component="h3">
        {movie.title}
        <a href={movie.homepage}>
          <LanguageIcon color="primary" />
        </a>
        <br />
        <span sx={{ fontSize: "1.5rem" }}>{`   "${movie.tagline}"`} </span>
      </Typography>

      <IconButton aria-label="go forward" onClick={() => navigate(+1)}>
        <ArrowCircleRightIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
