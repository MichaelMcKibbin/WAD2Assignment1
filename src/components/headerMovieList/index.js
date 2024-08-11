import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Header = (props) => {
  const title = props.title;
  const navigate = useNavigate();
  return (
    <Paper
      elevation={10}
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 1.5,
      }}
    >
      <Button
        variant="outlined"
        onClick={() => navigate(-1)}
        aria-label="go back"
        startIcon={<ArrowBackIcon />}
      ></Button>

      {/* <IconButton
        variant="outlined"
        aria-label="go back"
        onClick={() => navigate(-1)}
      >
        <ArrowCircleLeftIcon color="primary" fontSize="large" />
        BACK
      </IconButton> */}
      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      <Button
        variant="outlined"
        aria-label="go forward"
        onClick={() => navigate(+1)}
        startIcon={<ArrowForwardIcon />}
      ></Button>
      {/* <IconButton
        variant="outlined"
        aria-label="go forward"
        onClick={() => navigate(+1)}
      >
        <ArrowCircleRightIcon color="primary" fontSize="large" />
        ssss
      </IconButton> */}
    </Paper>
  );
};

export default Header;
