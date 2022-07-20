import React from "react";
import { Slide } from "react-slideshow-image";
import { Box } from "@chakra-ui/react";
import "react-slideshow-image/dist/styles.css";
import "../Home/Carousel.css";

const slideImages = [
  "https://images-static.nykaa.com/uploads/96039c37-f304-4b5a-afaf-42da418c7344.gif?tr=w-2400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/bcf8e6b6-085e-4790-bb46-bb98d484de50.gif?tr=w-2400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/420e5dfe-1e4c-48db-8169-fb677365db43.jpg?tr=w-2400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/64ce2e5a-dbca-4065-a90d-f22aff6787a7.jpg?tr=w-2400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/8d78575e-72d8-4ad9-943b-50601678d510.gif?tr=w-2400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/13f4f223-4928-435c-87ab-1f933b0b0a78.jpg?tr=w-2400,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/0e92263a-4a47-4006-8bb0-721e4dbe9b8d.gif?tr=w-2400,cm-pad_resize",
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};
const Carousel = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((url, index) => (
          <Box
            className="each-slide"
            key={index}
            height={"300px"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
            display="flex"
            align-items="center"
            justify-content="center"
            background-size="cover"
          />
        ))}
      </Slide>
    </div>
  );
};

export default Carousel;
