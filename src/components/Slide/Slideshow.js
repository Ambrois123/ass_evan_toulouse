import React from 'react';
import { Slide } from 'react-slideshow-image';
import img1 from "../imgs/toulouse1.jpg"
import img2 from "../imgs/toulouse2.jpg"
import img3 from "../imgs/toulouse3.jpg"
import '../Slide/Slideshow.css'


const slideImages ={
duration:5000,
transitionDuration: 500,
infinite: true,
indicators: true,
arrows: true,
}

function Slideshow() {
  return (
    
    <div className="slide-container containerSlide">

        <Slide {...slideImages}>
            <div className="each-fade">
                <div className="slideContainer">
                    <img src={img1} alt="img1" className="image1" />
                    <div>
                    <p className="blocktext">
                    Jésus lui dit: Je suis le chemin, la vérité et la vie. Nul ne vient 
                    au Père que par moi.
                    </p>
                    </div>
                    
                </div>
            </div>
            <div className="each-fade">
                <div className="slideContainer">
                    <img src={img2} alt="img2" className="image1" />
                    <div>
                    <p className="blocktext">
                    Car Dieu a tant aimé les hommes qu'il a donné 
                    son Fils unique, afin que quiconque croit 
                    en lui ne périsse point, mais qu'il ait 
                    la vie éternelle. 
                    </p>
                    </div>
                </div>
            </div>
            <div className="each-fade">
                <div className="slideContainer">
                    <img src={img3} alt="img3" className="image1" />
                    <div>
                    <p className="blocktext">
                    Jésus leur parla de nouveau, et dit: Je suis 
                    la lumière du monde; celui qui me suit ne marchera 
                    pas dans les ténèbres, mais il aura la lumière de la vie. 
                    </p>
                    </div>
                </div>
            </div>
        </Slide>
    </div>
    
  )
}


export default Slideshow

