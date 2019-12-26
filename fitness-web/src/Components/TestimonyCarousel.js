import React from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption

} from 'reactstrap'

const images = [
    {
        src:'https://images.unsplash.com/photo-1517344687790-7338f238f7f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
        alttext:'Slide1',
        testimony:'Testing Content-1'
    },
    {
        src:'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1335&q=80',
        alttext:'Slide4',
        testimony:'Testing Content-4'
    },
    {
        src:'https://images.unsplash.com/photo-1537907235743-0617671463d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        alttext:'Slide4',
        testimony:'Testing Content-4'
    },
    {
        src:'https://morehouseathletics.com/images/2019/9/7/Morehouse_EWC_Score_Graphic.jpg?width=1920&quality=80&format=jpg',
        alttext:'Slide4',
        testimony:'Testing Content-4'
    },
    {
        src:'https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        alttext:'Slide4',
        testimony:'Testing Content-4'
    }
  ];

function TestimonyCarousel(props) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

    const next =()=>
    {
        if(animating) return;
        const nextIndex = activeIndex === images.length-1 ? 0 : activeIndex+1;
        setActiveIndex(nextIndex);
    }
    const previous=()=>
    {
        if(animating) return;
        const nextIndex = activeIndex === 0 ? images.length-1 : activeIndex-1;
        setActiveIndex(nextIndex);
    }
    const goToIndex = (newIndex)=>
    {
        if(animating) return;
        setActiveIndex(newIndex);
    }

    const slides = images.map((image) =>
    {
        return(
            <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={image.src}
      >
                <img src={image.src} alt ={image.alttext}></img>
                <CarouselCaption captionText={image.testimony}></CarouselCaption>
            </CarouselItem>
        );
    }
    );

    return (
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
           <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex}>
               {slides}
           </CarouselIndicators>
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}></CarouselControl>
        <CarouselControl direction="next" directionText="next" onClickHandler={next}></CarouselControl>

       </Carousel>
    )
}

export default TestimonyCarousel
