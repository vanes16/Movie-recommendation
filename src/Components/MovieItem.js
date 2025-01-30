import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/MovieItem.css";
import { DataMovie } from "./Data";
import { Link } from "react-router-dom";

const MovieRecommendation = () => {
  const [defaultImage] = useState({});
  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="Container">
      <h2 className="Title">Movie</h2>
      <Slider {...settings}>
        {DataMovie.map((item) => (
          <Link to="/MovieMedia">
            <div className="card">
              <div className="card-top">
                <img
                  src={
                    defaultImage[item.title] === item.title
                      ? defaultImage.linkDefault
                      : item.linkImg
                  }
                  alt=""
                />
                <h1 className="category">{item.title}</h1>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};
export default MovieRecommendation;
