import React,{useState,useEffect} from 'react'
import "./Body.css"
import { useScramble } from "use-scramble";
import { TbUfo } from "react-icons/tb";
import { motion } from 'framer-motion';
import img1 from './img1.jpg'
import ufo from './ufo.gif'
const Body = () => {
    const [scrambledDone, setScrambledDone] = useState(false);
    const handleScrambleComplete = () => {
        setScrambledDone(true);
      };
      
      const { ref } = useScramble({
        text: "NAGS",
        range: [65,125],
        speed: 0.23,
        tick: 5,
        step: 1,
        scramble: 18,
        seed: 0,
        chance: 1,
        overdrive: false,
        overflow: false,
      })
      
      useEffect(() => {
        const timer = setTimeout(() => {
          setScrambledDone(true); 
        }, 4000); 
    
        return () => clearTimeout(timer); 
      }, []);
    
  return (
    <div>
         {!scrambledDone && (
      <div className='Cluster'>
          <h1 className='Maint'>NAGS</h1>
          <h2 className='Base' ref={ref}/>
          <div className='Loading'></div>
      </div>
         )}
         {scrambledDone && (
            
            <div className='Cluster2'style={{backgroundImage:`url(${img1})`,backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover",minHeight:"100vh",width:"100vw"}}>
                <motion.img animate={{top:0}} transition={{duration:3}} src={ufo} className='ufo'/>
                
                <div class="btn">
                    <a id="reserve-btn" type="button" href='/Reservation' >
                        <strong>RESERVATION</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>
                        <div id="glow">
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </a>
                </div>
      <div class="btn2">
                    <a id="reserve-btn" type="button" href='/Menu'>
                        <strong>MENU</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>
                        <div id="glow">
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </a>
                </div>
      <div class="btn1">
                    <a id="reserve-btn" type="button" href='/About-us'>
                        <strong>ABOUT US</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>
                        <div id="glow">
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </a>
                </div>
            </div>
        )}
    </div>
  )
}

export default Body
