import React from "react";
import Card from "@mui/material/Card";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { CardContent } from "@mui/material";

const useStyles = makeStyles({
  card: {
    maxWidth: "300px",
    borderRadius: "1.5rem !important",
    margin: "1.25rem",
    backgroundColor: "beige",
  },
  title: {
    fontSize: "1.25rem !important",
    fontFamily: "'Inter', sans-serif;",
    fontWeight: "600 !important",
    paddingLeft: "1.25rem",
    paddingTop: "1.125rem",
  },
  subtitle: {
    fontSize: "0.875rem !important",
    fontFamily: "'Inter', sans-serif;",
    fontWeight: "300 !important",
    paddingLeft: "1.25rem",
    paddingTop: "0.063rem",
  },
  job: {
    fontSize: "0.75rem !important",
    fontFamily: "'Inter', sans-serif;",
    fontWeight: "600 !important",
    color: "#808191",
    paddingLeft: "1.25rem",
    marginTop: "0.188rem !important",
  },
  date: {
    fontSize: "0.75rem !important",
    fontFamily: "'Inter', sans-serif;",
    fontWeight: "300 !important",
    color: "#808191",
    paddingLeft: "1.25rem",
    marginTop: "0.188rem !important",
  },
  grade: {
    fontSize: "0.875rem !important",
    fontFamily: "'Inter', sans-serif;",
    fontWeight: "600 !important",
    color: "rgba(17, 20, 45, 0.7)",
    paddingLeft: "1.25rem",
    marginTop: "0.313rem !important",
  },
  imagewrapper: {
    width: "13.5rem",
    height: "8.125rem",
    borderRadius: "5px",
    marginTop: "1.063rem",
    marginBottom: "0.563rem !important",
    marginLeft: "2.625rem",
  },
  image: {
    width: "11.5 !important",
    objectFit: "contain ",
    paddingBottom: "0.625rem",
  },
  link: {
    fontSize: "0.75rem !important",
    fontFamily: "'Inter', sans-serif;",
    fontWeight: "600 !important",
    color: "#808191",
    paddingLeft: "1.25rem",
    paddingRight: "1.375rem",
    marginTop: "1.813rem !important",
    // marginBottom: "1rem !important",
  },
  desc: {
    fontSize: "0.625rem !important",
    lineHeight: "1.084rem !important",
    fontFamily: "'Inter', sans-serif;",
    fontWeight: "300 !important",
    color: "background: rgba(0, 0, 0, 1)",
    paddingLeft: "1.25rem",
    paddingRight: "1.375rem",
    marginBottom: "1rem !important",
    textAlign: "center",
  },
});

const DivCard = ({
  title,
  subtitle,
  job,
  date,
  marks,
  link,
  grade,
  degisnation,
  desc,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <CardContent>
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
        {grade ? (
          <Typography variant="h3" className={classes.grade}>
            {marks}
            <span
              style={{ marginLeft: "0.438rem", color: "rgba(4, 223, 0, 1)" }}
            >
              {grade}
            </span>
          </Typography>
        ) : null}
        <Typography variant="h4" className={classes.date}>
          {degisnation}
        </Typography>
      </CardContent>
      <Typography variant="h3" className={classes.desc}>
        {desc}
      </Typography>
    </div>
  );
};

export default DivCard;
