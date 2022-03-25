import React, { useState } from "react";
import "../styles/slideshow.css";
import { SlideshowData } from "./SlideshowData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import uuid from "react-uuid";

const Slideshow = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null; //if no data in SlideshowData then return null
  }

  return (
    <>
      <div className="slideshow-title">
        <br />
        <h2>👨‍🍳 Review the steps to cook the perfect grilled cheese! 👩‍🍳</h2>
        <h3>Use the Left and Right arrows :</h3>
      </div>
      <section className="slideshow-pictures">
        <FaArrowAltCircleLeft className="arrow-left" onClick={prevSlide} />
        <FaArrowAltCircleRight className="arrow-right" onClick={nextSlide} />
        {SlideshowData.map((chadsThisItem, index) => {
          return (
            <>
              {index === current && (
                <img
                  src={chadsThisItem.image}
                  alt="grilled cheese"
                  className="image"
                />
              )}
            </>
          );
        })}
      </section>
    </>
  );
};

export default Slideshow;
