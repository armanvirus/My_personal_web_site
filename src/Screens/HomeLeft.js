import React from "react";
import {useState , useEffect, useRef} from "react";
import {gsap} from "gsap";
import { TextPlugin} from "gsap/TextPlugin"
import Aminu from"../Images/Aminu.png"
import Aminu1 from"../Images/gsss.jpg"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";



function HomeLeft() {
  const [visible, setVisble] = useState(false);
  const writerRef = useRef();
  const img1Ref = useRef();
  const typeRef = useRef();
  const typeRef1 = useRef();
  const type0Ref = useRef();
  const btnRef = useRef();
  const nexRef = useRef();
  const threeRef = useRef();
  const navigates = useRef();
  gsap.registerPlugin(TextPlugin);

const togler = ()=>{ 
        setVisble(!visible)
}


  useEffect(()=>{
    const timeline = gsap.timeline({defaults:{duration:1.5}});
    timeline.from(navigates.current,{opacity:0 , x:"-30vw"})
    .from(img1Ref.current, {scale:0, opacity:0, ease:"linear"})
    .from(type0Ref.current, {y: -30, opacity: 0, ease:"bounce"})
    .from(writerRef.current, {y: -30, opacity: 0, ease:"bounce"})
    .from(btnRef.current, {scale:0, opacity:0, y:100, ease:"back"})
    .to(typeRef1.current, {text:{value:"I AM",  delimiter:''},ease:'linear'})
    .to(typeRef.current, {text:{value:"WEB DEVELOPER",  delimiter:''},ease:'linear'})
    .from(nexRef.current, {y:-10, repeat:-1, ease:"elastic", yoyo:true})
    // .to(threeRef.current, {width:35, height:35, ease:"power1", repeat:-1})

    
  },[''])
  return (
    <div className="HomeLeft">
      <div ref={threeRef} className="three" onClick={togler}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    <div ref={navigates} className={visible ? 'Homeleftleft':"noleftleft"}>
        <div className="avatar" >
          <div className="avatarImage">
            <img src={Aminu1}  alt="Avatar"/>
            
          </div>
          <div className="avatarName">
            <h3>Arman Grema</h3>
            <p>Fullstack web dev from <span className="f"> Nigeria </span></p>
          </div>
        </div>

        <div className="HomeLeftNavs">
        <a href="/"> HOME</a>
        <a href="/">ABOUT</a>
        <a href="/">SERVICES</a>
        <a href="/">PROJECTS</a>
        <a href="/">RESUME</a>
        <a href="/">CONTACT</a>
        </div>

        <div className="copyRight">
        <p> copyRight <span className="f"> @arman 2019 </span>
        You can add webfonts
      The build step will </p>
        </div>
    </div>

    {/* the right side of the Home screen left */}
    <div className="HomeLeftRight">
      <div className="intro">
          <h2 ref={type0Ref} >
            <span ref={typeRef1}>Hi Dear!</span><br/>
             <span ref={typeRef}>Welcome </span>
          </h2>

          <div ref={writerRef} className="explain">
            You can add webfonts, meta tags, or analytics to this file.
            The build step will place the bundled
            
          </div>

    <div className="resume">
      <a ref={btnRef} className="primaryBtn" href="/">VIEW RESUME</a>
    </div>
      </div>

      <div className="Myimg">
         <img ref={img1Ref} src={Aminu} alt=""/>
      </div>


    </div>

    <div className="page-switcher">
    {/* <div></div> */}
    {/* <div></div> */}
    {/* <KeyboardArrowDownIcon sx={{fontSize:30, color:"rgb(8, 215 ,87)"}}/> */}
    <KeyboardArrowDownIcon ref={nexRef} sx={{fontSize:40, color:"rgb(8, 215 ,87)"}}/>
    </div>
      </div>
  );
}

export default HomeLeft;
