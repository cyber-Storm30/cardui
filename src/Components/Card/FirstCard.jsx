import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardContent } from "@mui/material";
import { useStyles } from "./Styles";

const FirstCard = ({
  title,
  subtitle,
  job,
  date,
  marks,
  grade,
  degisnation,
  desc,
}) => {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 300 }} className={classes.card}>
      <CardActionArea>
        <div className={classes.top}>
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
          {grade && (
            <Typography variant="h3" className={classes.grade}>
              {marks}
              <span
                style={{ marginLeft: "0.438rem", color: "rgba(4, 223, 0, 1)" }}
              >
                {grade}
              </span>
            </Typography>
          )}
          <Typography variant="h4" className={classes.date}>
            {degisnation}
          </Typography>
        </div>
      </CardActionArea>
      {desc && (
        <div className={classes.descwrap}>
          <Typography variant="h3" className={classes.desc}>
            {desc}
          </Typography>
        </div>
      )}
    </Card>
  );
};

export default FirstCard;
