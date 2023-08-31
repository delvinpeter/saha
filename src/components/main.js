import React from 'react'
import "./main.css"
import Association from './association'
import cor1 from "../images/coures-1.jpg"
function Main() {
  return (
    <>
    <div className='about-main'>
        <div className='about-img'>
        </div>
        <div className='about-cont'>
            <h2>About</h2>
            <h1>Welcome to eLEARNING</h1>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
                Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <button className='btn'>learn more</button>
            </div>
            
            </div>
            <Association/>
            <div className='categories'>
                <h3>CATEGORIES</h3>
                <h1>Courses Categories</h1>
                <div className='cat-cour'>
                    <div className='four-three ' >
                        <div className='item1'>
                            <div className='item-img img1'></div>
                        
                            <div className='item-cour'>
                                <h2>Web Design</h2>
                                <p>45 courses</p>
                            </div>
                        </div>
                        <div className='two-item'>
                        <div className='item2'>
                        <div className='item-img img2'></div>
                        
                        <div className='item-cour'>
                        <h2>Graphic Design</h2>
                                <p>45 courses</p>
                        </div>
                        </div>
                        <div className='item3'>
                        <div className='item-img img3'></div>
                        <div className='item-cour'>
                        <h2>Video Editing</h2>
                                <p>45 courses</p>
                        </div>
                        </div>
                        </div>

                    </div>
                    <div className='four-one'>
                    <div className='item-img img4'></div>
                    <div className='item-cour'>
                                <h2>Web Design</h2>
                                <p>45 courses</p>
                                </div>
                    </div>
                </div>
            </div>





            </>
  )
}

export default Main