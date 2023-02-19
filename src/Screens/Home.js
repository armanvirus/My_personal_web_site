import React from "react";
import {useState, useEffect, useRef} from "react";
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight'
import {gsap} from "gsap";
import { TextPlugin} from "gsap/TextPlugin";
import useMediaQuery from "@mui/material/useMediaQuery"


function Home() {
  const [pageR,setPageR] = useState('low');
  const [pageL,setPageL] = useState('high');
  const [det , setDet]   = useState('hideIt');
  const leftRef = useRef();
  const rightRef = useRef();
  const isDesktop = useMediaQuery('(min-width:700px)');
  
  // const rightPage = (e)=>{
  //   setPageR("high")
  //   setPageL("lowl")
  //   setDet("HomeRightRight");
  //   gsap.to(rightRef.current,{width:"80vw", zIndex:3})
  //   gsap.to(leftRef.current,{width:"20vw", zIndex:1})
    
  // }

  // const leftPage = (e)=>{
  //   setPageR("low")
  //   setPageL("high")
  //   setDet("hideIt") 
  //   gsap.to(leftRef.current,{width:"80vw", zIndex:3})
  //   gsap.to(rightRef.current,{width:"20vw", zIndex:1})
  // }


  useEffect(()=>{
        const timeline = gsap.timeline();
        if(isDesktop){
          timeline.from(leftRef.current,{opacity:0, delay:1})
        .from(rightRef.current,{opacity:0,})
        }


  },[''])
  return (
    <div className="Home">
    {/* <div style={style.left} ref={leftRef} onMouseEnter={ isDesktop ? leftPage : ()=>{return null}} className={pageL}>
    <HomeLeft/>
    </div> */}

    <div>
    <HomeRight />
    </div>
      </div>
  );
}

const style = {
  left:{
    background:"rgba(22,36,0, 0.7)",
    with:"100vw"
  }
}
export default Home;