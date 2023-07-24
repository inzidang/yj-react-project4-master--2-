import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MultiCarousel({ children, itemNum = 2 }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: itemNum,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: itemNum,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: itemNum,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      arrows={false}
      swipeable={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
    >
      {children}
    </Carousel>
  );
}
