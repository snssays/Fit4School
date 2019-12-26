import React from 'react'
import {Gallery, GalleryImage} from 'react-gesture-gallery'
const images = [
    "https://images.unsplash.com/photo-1517344687790-7338f238f7f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1335&q=80",
    "https://images.unsplash.com/photo-1537907235743-0617671463d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://morehouseathletics.com/images/2019/9/7/Morehouse_EWC_Score_Graphic.jpg?width=1920&quality=80&format=jpg",
    "https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  ];

const style = {
    //height:'100vh',
   width:'100vw'
}

const textstyle ={
    'z-index':'2'
}


function StoryCarousal() 
{ const [index, setIndex] = React.useState(0);

React.useEffect(
    ()=>{
        const interval = setInterval(
            ()=>{
                if(index=== images.length -1)
                {
                    setIndex(0);
                }
                else
                {
                    setIndex(index+1)
                }
            }
        ,3500)
        return()=> clearInterval(interval);
    }
, [index])

return (
    <Gallery
    index ={index}
    onRequestChange={i=>{
    setIndex(i)}}
    >
      { images.map(image=>(
          <div>
           <GalleryImage objectFit="contain" key={image} src={image}>
           <p style={textstyle}> I am in side the Image Tada..!</p>
           </GalleryImage>
           </div>
           
      )) }
       
    </Gallery>       
)
}

export default StoryCarousal
