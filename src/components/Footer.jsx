import React from 'react';

const Footer = () => {
  return (
    <>
    <footer className='footer'>
      <div style={{width: '25%',padding: '1rem'}}>
        <h5 className='footer-matter'>Kingsukh Guest House</h5>
        <p style={{fontSize: '0.88rem',color: 'grey',}}>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p>
        <a href="https://www.whatsapp.com"><button className='button2'>BOOK NOW</button></a>
      </div>
      <div style={{width: '25%',padding: '1rem'}}>
        <h5 className='footer-matter'>QUICK LINKS</h5>
        <ul style={{listStyle: 'none',padding: 0,margin: 0,}}>
          <li style={{fontSize: '0.875rem',padding: '0.25rem 0',}}>
            <a href="#" style={{textDecoration: 'none',color:'grey',hover: {color: '#ff9900'}}}>Browse Destinations</a>
          </li>
          <li style={{fontSize: '0.875rem',padding: '0.25rem 0'}}>
            <a href="#" style={{textDecoration: 'none',color:'grey',hover: {color: '#ff9900'}}}>Special Offers & Packages</a>
          </li>
          <li style={{fontSize: '0.875rem',padding: '0.25rem 0',}}>
            <a href="#" style={{textDecoration: 'none',color:'grey',hover: {color: '#ff9900'}}}>Room Types & Amenities</a>
          </li>
          <li style={{fontSize: '0.875rem',padding: '0.25rem 0'}}>
            <a href="#" style={{textDecoration: 'none',color:'grey',hover: {color: '#ff9900'}}}>Customer Reviews & Ratings</a>
          </li>
          <li style={{fontSize: '0.875rem',padding: '0.25rem 0'}}>
            <a href="#" style={{textDecoration: 'none',color:'grey',hover: {color: '#ff9900'}}}>Travel Tips & Guides</a>
          </li>
        </ul>
      </div>
      <div style={{width: '25%',padding: '1rem'}}>
        <h5 className='footer-matter'>OUR SERVICES</h5>
        <ul style={{listStyle: 'none',padding: 0,margin: 0}}>
          <li style={{fontSize: '0.875rem',padding: '0.25rem 0'}}>
            <a href="#" style={{textDecoration: 'none',color:'grey',hover: {color: '#ff9900'}}}>Concierge Assistance</a>
          </li>
          <li style={{fontSize: '0.875rem',padding: '0.25rem 0'}}>
            <a href="#" style={{textDecoration: 'none',color:'grey',hover: {color: '#ff9900'}}}>Flexible Booking Options</a>
          </li>
          <li style={{fontSize: '0.875rem',padding: '0.25rem 0'}}>
            <a href="#" style={{textDecoration: 'none',color:'grey',hover: {color: '#ff9900'}}}>Airport Transfers</a>
          </li>
          <li style={{fontSize: '0.875rem',padding: '0.25rem 0'}}>
            <a href="#" style={{textDecoration: 'none',color:'grey',hover: {color: '#ff9900'}}}>Wellness & Recreation</a>
          </li>
        </ul>
      </div>
      <div style={{width: '25%',padding: '1rem'}}>
        <h5 className='footer-matter'>CONTACT US</h5>
        <div className='footer-address'>
            <p style={{fontSize: '0.875rem',color:'grey',}}>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
            <p style={{fontSize: '0.875rem',color:'grey',}}>kkghosh0099@gmail.com</p>
            <p style={{fontSize: '0.875rem',color:'grey',}}>+91 9007062180</p>
        </div>
        
        <div style={{display: 'flex',justifyContent: 'flex-start',marginTop: '1rem'}}>
         <div className='img-container'>
         <a href="https://www.facebook.com"> <img src="/assets/facebook.png" alt="" /></a>
          <a href="https://www.youtube.com"><img src="/assets/youtube.png" alt="" /></a>
          <a href="https://www.twitter.com"><img src="/assets/twitter.png" alt="" /></a>
          <a href="https://www.instagram.com"><img src="/assets/instagram.png" alt="" /></a>
         </div>

        </div>
      </div>
      
    </footer>
    <div style={{color:"gray", background:"black" , justifyContent:"center", alignItems:"center",display:"flex", padding:"20px"}}>Copyright © 2024 Kingsukh Guest House. All rights reserved.</div>
    </>
  );
};

export default Footer;