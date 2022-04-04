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
    gsap.to(rightRef.current,{width:"80vw"})
    gsap.to(leftRef.current,{width:"20vw"})
    
  }

  const leftPage = (e)=>{
    setPageR("low")
    setPageL("high")
    setDet("hideIt") 
    gsap.to(leftRef.current,{width:"80vw"})
    gsap.to(rightRef.current,{width:"20vw"})
  }

  useEffect(()=>{
        const timeline = gsap.timeline();
        timeline.from(leftRef.current,{x:-100, width:0, delay:1})
        .from(rightRef.current,{x:0,})

       

  },[''])
  return (
    <div className="Home">
    <div ref={leftRef} onMouseEnter={leftPage} className={pageL}>
    <HomeLeft/>
    </div>

    <div ref={rightRef} onMouseEnter={rightPage} className={pageR}>
    <HomeRight determiner={det}/>
    </div>
      </div>
  );
}

export default Home;