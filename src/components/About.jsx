import React from 'react'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='title1'>
        <h1> <span style={{letterSpacing:"0.5em"}}>ABOUT US</span>  <span style={{color:"rgb(101, 99, 99)"}}>_____________</span></h1>
      </div>
      <div className='out-class'>
        <div className='out'>
            <img src="/assets/out.jpg" alt="" />
        </div>
        <div className='about-matter'>
            <h1>The Best Holidays Start Here!</h1>
            <p className='para'>Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
            <p className='address'>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
            <p className='address'>Contact us: +91 9007062180</p>
            <a href="https://www.whatsapp.com"><button className='about-button'>Book now</button></a>
        </div>
      </div>
    </div>
  )
}

export default About
