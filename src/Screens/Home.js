import React from "react";
import {useState, useEffect, useRef} from "react";
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight'
import {gsap} from "gsap";
import { TextPlugin} from "gsap/TextPlugin"


function Home() {
  const [pageR,setPageR] = useState('low');
  const [pageL,setPageL] = useState('high');
  const [det , setDet]   = useState('hideIt');
  const leftRef = useRef();
  const rightRef = useRef();
  
  const rightPage = (e)=>{
    setPageR("high")
    setPageL("lowl")
    setDet("HomeRightRight");
    gsap.to(rightRef.current,{width:"80vw", zIndex:3})
    gsap.to(leftRef.current,{width:"20vw", zIndex:1})
    
  }

  const leftPage = (e)=>{
    setPageR("low")
    setPageL("high")
    setDet("hideIt") 
    gsap.to(leftRef.current,{width:"80vw", zIndex:3})
    gsap.to(rightRef.current,{width:"20vw", zIndex:1})
  }


  useEffect(()=>{
        const timeline = gsap.timeline();
        if(window.innerWidth > 760){
          timeline.from(leftRef.current,{opacity:0, delay:1})
        .from(rightRef.current,{opacity:0,})
        }


  },[''])
  return (
    <div className="Home">
    <div ref={leftRef} onMouseEnter={ window.innerWidth > 760 ? leftPage : ()=>{return null}} className={pageL}>
    <HomeLeft/>
    </div>

    <div ref={rightRef} onMouseEnter={ window.innerWidth > 760 ? rightPage : ()=>{return null}} className={pageR}>
    <HomeRight determiner={det}/>
    </div>
      </div>
  );
}

export default Home;