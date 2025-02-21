import React,{useState,useEffect} from 'react'
import "./Body.css"
import { useScramble } from "use-scramble";
import { TbUfo } from "react-icons/tb";
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
            
            <div className='Cluster2'>
                <TbUfo className='TbUfo'/>
                <div class="btn">
                    <button id="reserve-btn" type="button">
                        <strong>FIND A TABLE</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>
                        <div id="glow">
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </button>
                </div>
      <div class="btn2">
                    <button id="reserve-btn" type="button">
                        <strong>FIND A TABLE</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>
                        <div id="glow">
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </button>
                </div>
      <div class="btn1">
                    <button id="reserve-btn" type="button">
                        <strong>FIND A TABLE</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>
                        <div id="glow">
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </button>
                </div>
            </div>
        )}
    </div>
  )
}

export default Body
