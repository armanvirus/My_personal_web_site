import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';

function Ratings(){
    var el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();
    useEffect(()=>{
        tl.current = gsap.timeline().
         from(q(".rates"), {width:0, opacity:0.1, stagger:{amount:1.5, from:"random"}, ease:'back'})
    },[''])
    return(
     <div ref={el} className="ratings">
       <div>Rate of Technologies Used </div>
      <div>
          <div className="skill">HTML</div> <div className="rated">
       <div className="html-per rates"></div>
       </div>
          </div>
      <div>
          <div className="skill">CSS</div> 
          <div className="rated">
       <div className="css-per rates"></div>
       </div> 
       </div>
      <div><div className="skill">JS</div> <div className="rated">
       <div className="js-per rates"></div></div> </div>
      <div><div className="skill">Node</div> <div className="rated">
       <div className="node-per rates"></div></div> </div>
      <div><div className="skill">React</div> <div className="rated">
       <div className="react-per rates"></div></div> </div>
      <div><div className="skill">Vue</div> 
      <div className="rated"> <div className="vue-per rates"></div></div> 
      </div>
      <div><div className="skill">RN</div> 
      <div className="rated">
       <div className="rn-per rates"></div></div> </div>
     </div>
    )
}

export default Ratings;