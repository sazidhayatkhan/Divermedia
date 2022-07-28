import React from 'react'
import images_2 from './images_2'
import {motion} from 'framer-motion'
import{useState,useEffect,useRef} from'react'
import style from './Carousal.module.css'

function Corasoul() {
  const[width,setWidth]=useState(0)
  const carousal = useRef()

  useEffect(()=>{
    console.log(carousal.current.scrollWidth, carousal.current.offsetWidth)
    setWidth(carousal.current.scrollWidth - carousal.current.offsetWidth)
  },[])
  
  return (
    
      <div>
        <motion.div ref={carousal} className={style.carousal}>
            <motion.div 
              drag='x' 
              dragConstraints={{right:0, left: -width }}
              className={style.inner_carousal}>
              {images_2.map(image=>{
                return(
                  
                  <motion.div className={style.item} key={image}>
                    
                    <img className={style.img} src={image} alt='' />
                   
                  </motion.div>
                )
              })}

            </motion.div>
        </motion.div>
      </div> 
    
  )
}

export default Corasoul