import React from 'react'

const Gallery = () => {
    
  return (
    <div className='gallery-section' id='gallery'>
      <div className='title4'>
        <h1> <span style={{letterSpacing:"0.5em"}}>GALLERY</span> <span style={{color:"rgb(101, 99, 99)"}}>_____________</span></h1>
      </div>
      <div className='gallery-container'>
        <div className='gallery'>
            <img src="/assets/baranti.webp" alt="" />
            <img src="/assets/ayodhya.webp" alt="" />
        </div>
        <div className='gallery'>
            <img src="/assets/1.jpg" alt="" />
            <img src="/assets/palash.webp" alt="" />
        </div>
        <div className='gallery'>
            <img src="/assets/mithonDam.webp" alt="" />
            <img src="/assets/flower.jpg" alt="" />
        </div>
        <div className='gallery'>
            <img src="/assets/large.jpg" alt="" />
            <img src="/assets/small.jpg" alt="" />
        </div>
        <div className='gallery'>
            <img src="/assets/room1.jpg" alt="" />
            <img src="/assets/recep.jpg" alt="" />
        </div>
        <div className='gallery'>
            <img src="/assets/main.jpg" alt="" />
            <img src="/assets/out.jpg" alt="" />
        </div>
      
      </div>
      

    </div>
  )
}

export default Gallery
