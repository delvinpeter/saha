import React from 'react'
import Image1 from "../images/Association-skill-india.png"
import Image2 from "../images/logo.jpg"

function Association() {
  return (
    <div className='association-main'>
        <h2>Association</h2>
        <h2>&</h2>
        <h1>Advocacy Partners</h1>
        <div className='asso-main'>
            <div className='asso-two'>
                <div className='asso-img'><img src={Image1} alt="My Image"/></div>
                <div className='asso-img'><img src={Image2} alt="My Image"/></div>
                <div className='asso-img'><img src={Image2} alt="My Image"/></div>
                <div className='asso-img'><img src={Image2} alt="My Image"/></div>

            </div>
            <div className='asso-two'>
                <div className='asso-img'><img src={Image2} alt="My Image"/></div>
                <div className='asso-img'><img src={Image2} alt="My Image"/></div>
                <div className='asso-img'><img src={Image2} alt="My Image"/></div>
                <div className='asso-img'><img src={Image2} alt="My Image"/></div>
                <div className='asso-img'><img src={Image2} alt="My Image"/></div>
            </div>
        </div>
    </div>
  )
}

export default Association