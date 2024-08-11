import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import Grid from "@mui/material/Grid";
import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";

export default function ActorCard({ actors, action }) {
  console.log("Actor ID:", actors?.id); // Add this line to log the actor's ID
  return (
    <Card
      sx={{
        maxWidth: 400,
        backgroundColor: "#c1d8e3",
        border: "1px solid #057aa1",
        borderRadius: "0.8rem",
        transition: "transform 0.25s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
        boxShadow: "2px 4px 6px #497f91",
      }}
      variant="outlined"
      //raised={true}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "#042736",
          fontSize: "20pt",
          padding: "0.1rem",
        }}
      >
        {actors.name}
      </Typography>
      <CardMedia
        sx={{
          height: 500,
          borderTop: "2px solid #ffffff",
          borderBottom: "2px solid #ffffff",
          zIndex: "100",
        }}
        image={
          actors.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actors.profile_path}`
            : img
        }
        alt={actors.name}
      />

      <CardContent>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <CardActions>
            {actors && (
              <Link to={`/actors/${actors?.id}`}>
                <Button
                  variant="outlined"
                  size="medium"
                  color="primary"
                  sx={{
                    color: "grey",
                    border: "2px solid grey",
                    fontWeight: "bold",
                  }}
                >
                  About {actors.name}
                </Button>
              </Link>
            )}
          </CardActions>
        </Grid>
      </CardContent>
    </Card>
  );
}
