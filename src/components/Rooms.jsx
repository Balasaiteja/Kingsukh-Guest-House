import React from 'react'

const Rooms = () => {
  return (
    <div className='room-section' id='rooms'>
      <div className='title3'>
        <h1><span style={{letterSpacing:"0.5em"}}>OUR ROOMS</span> <span style={{color:"rgb(101, 99, 99)"}}>_____________</span></h1>
      </div>
      <div className='room-container'>
        <div className='most'>
          <h1>The Most Memorable Rest Time Starts Here</h1>
        </div>
        
        <div className='rooms'>
            <div className='cozy'>
                <div className='cozy1'>
                    <h1>Cozy Haven Room</h1>
                    <p>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.Unwind in the tranquil ambiance, carefully crafted to melt away stress and fatigue. </p>
                    <p>Starting from Rs. 1000/night</p>
                    <a href="https://whatsapp.com"><button>BOOK NOW</button></a>
                </div>
                <div className='small'>
                    <img src="/assets/small.jpg" alt="" />
                </div>
            </div>
            <div className='serenity'>
                <div className='cozy1'>
                    <h1>Spacious Serenity Suite</h1>
                    <p>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.Our Spacious Serenity Suite is the epitome of refined relaxation.</p>
                    <p>Starting from Rs. 1500/night</p>
                    <a href="https://whatsapp.com"><button>BOOK NOW</button></a>
                </div>
                <div className='small'>
                    <img src="/assets/large.jpg" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Rooms
