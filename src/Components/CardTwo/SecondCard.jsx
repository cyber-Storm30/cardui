import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, CardContent } from "@mui/material";
import { useStyles } from "./Styles1";

const SecondCard = ({ title, subtitle, job, date, photo, link }) => {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 300 }} className={classes.card}>
      <CardActionArea>
        <Typography variant="h1" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="h3" className={classes.subtitle}>
          {subtitle}
        </Typography>
        <Typography variant="h4" className={classes.job}>
          {job}
        </Typography>
        <Typography variant="h4" className={classes.date}>
          {date}
        </Typography>
        {photo ? (
          <div className={classes.imagewrapper}>
            <img className={classes.image} src={photo} />
          </div>
        ) : (
          <div className={classes.linkwrap}>
            <Typography variant="h3" className={classes.link}>
              <span style={{ color: "black" }}>Link: </span>
              {link}
            </Typography>
          </div>
        )}
      </CardActionArea>
    </Card>
  );
};

export default SecondCard;
