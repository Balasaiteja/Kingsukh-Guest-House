import React, { useState } from 'react';

const ContactInfo = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSendMessage = () => {
    setIsMessageSent(true);
    setFirstName('');
    setLastName('');
    setEmailAddress('');
    setMobileNumber('');
    setMessage('');
  };

  return (
    <div className='contact' id='contact'>
    <div className='title5'>
        <h1> <span style={{letterSpacing:"0.5em"}}>CONTACT US</span> <span style={{color:"rgb(101, 99, 99)"}}>_____________</span></h1>
      </div>
    <div className="contact-info-container">
      <div className="contact-info">
        <h2>Contact Info</h2>
        <p><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABT0lEQVR4nKXUu0tdQRDH8Y/XZ2sqLQWtjGgilmprJRFstTOg+MAghBCfjQiBoEgaBTtJQNDeFwgqmEiSP0lWVliO99x79H5hit/snGHO7sxQmXZ8xPdoU2jzChqwhRvMYijaHG6xGWMKUY8TLKKuzHnwLeEYpSIJQ/BKgbgNfKoW1Ih/aEp8XViP1pn4m2NsY6WEw9hJ9Dv8xmi0P+hLzncxWCnhBOYT/Qs9ie7Fz0QvxG9yGcPXRJ+hNdFvcJroZXyolLAf+4meif1XiraN6eT8IHMFz2jB30SHJGu4j7aatEpon/+ZByzLEd5WC8J7HBaIe7yT9KXz2MNIkYSl+HvhAfII83yXM0llmcQ3+fzAuBcQqryOU5KlG5cvqe6JAZxnFkBYHFexwV/FemYBfMFnNdAQKwozHZr+IlZZE2HDhGYP1lFrsifCFgobuyoPMBkwnihm2IQAAAAASUVORK5CYII=" alt="marker--v1"/></span> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
        <p><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1klEQVR4nNXUPU6CURCF4QcDCQWJMbGgo7KhoBAKOzsbOypLduASMFRuwS3QWVDY2FnxEWPvDr7KHZAbRoLhJwq3wJPM5ObMnTeZTDL8B3UzhxJPmaJMwE/UM0xaD5YvvKF1AKwVjMRS4BIz3OwBu47eq2AtEs7xggdUfgFKf+7ximZ4P4BJVTziGac7YA2MYxG1FX8N+K27GKO9oXaBKQYbasU2YFIH7+iveLf4QG9LT7ELmHSGCUYRk/DsC0w6iUUN4+1Q4F9ULNNRA8vcx6Gb+3wdt+bz1EcZ0vaz2AAAAABJRU5ErkJggg==" alt="new-post--v1"/></span> kkghosh0099@gmail.com</p>
        <p><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABC0lEQVR4nLXUsS5EYRAF4E9CoyEROslGtiASgoJsY7WikhUtFR3PIeIR0LIvwCrIlshWvI/8yWxyc7OJvffnVP9Mce65Z84M/4x99HH8F2SXeEIDH1jKITvFAyaj3sELJuoS9jFb6l3jvC7hPTZKvWl81SU8wFWplzx8q0s4hQHmCr0udmXgCLfxTsN4x5pMPOIw3s2Iz2IO4Qw+sRr1ViidzyFdCT+HyvaCNEvpdvzuQkFpqtfRjtx+46xK+NslD5uhtBuRSjm9QS/WdWylg4Kno9S0wvexD8pyKB1OfxQaeFVx+ilSd6Xwi6V4jtNXGZ2wIB2OzTgo6UMXdciKitLuJ7Vp2ic5ZL/iB2XLKfmtlPKCAAAAAElFTkSuQmCC" alt="phone--v1"/></span> +91 9007062180</p>
        <div className='img-container'>
          <a href="https://www.facebook.com"> <img src="/assets/facebook.png" alt="" /></a>
          <a href="https://www.youtube.com"><img src="/assets/youtube.png" alt="" /></a>
          <a href="https://www.twitter.com"><img src="/assets/twitter.png" alt="" /></a>
          <a href="https://www.instagram.com"><img src="/assets/instagram.png" alt="" /></a>
        </div>
        
      </div>
      <div className="container">
        <h2 className="title">Send a Message</h2>
        <form>
          <div style={{ marginBottom: 20 }}>
            <label className="label" htmlFor="firstName">First Name</label>
            <input
              className="input"
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label className="label" htmlFor="lastName">Last Name</label>
            <input
              className="input"
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label className="label" htmlFor="emailAddress">Email Address</label>
            <input
              className="input"
              type="email"
              id="emailAddress"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label className="label" htmlFor="mobileNumber">Mobile Number</label>
            <input
              className="input"
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label className="label" htmlFor="message">Write your message here...</label>
            <textarea
              className="textarea"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            className="button1"
            type="button"
            onClick={handleSendMessage}
          >
            Send Message
          </button>
          {isMessageSent && (
            <p className="success-message">Message sent successfully!</p>
          )}
        </form>
      </div>
      
    </div>
    </div>
    
  );
};

export default ContactInfo;