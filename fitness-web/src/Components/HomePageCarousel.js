import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import { images } from "../Data/Utilities";

function HomePageCarousel() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Gallery
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage
          objectFit="contain"
          key={image}
          src={image}
        ></GalleryImage>
      ))}
    </Gallery>
  );
}

export default HomePageCarousel;
