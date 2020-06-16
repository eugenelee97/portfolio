import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography, Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    background: " linear-gradient(217deg, #F0C1DF, #FCEEDF, #F8CACA)",
    padding: theme.spacing(8),
    margin: "0 auto"
  },
  title: {
    marginBottom: "20px",
    display: "flex",
    alignItems: "center"
  },
  img: {
    width: "50px"
  },
  project: {
    marginLeft: "10px",
    fontWeight: "bold",
    fontSize: "28px"
  }
}));

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 520,
      min: 0
    },
    items: 1,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 520
    },
    items: 2,
    partialVisibilityGutter: 30
  }
};

const Projects = ({ list }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.title}>
        <img className={classes.img} src="./projectLogo.png" alt="" />

        <Typography className={classes.project}>Projects</Typography>
      </Container>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-padding-bottom"
        dotListClass=""
        draggable
        focusOnSelect
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {Object.values(list).map(item => {
          return (
            <div>
              <ProjectCard {...item} key={item.id} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Projects;