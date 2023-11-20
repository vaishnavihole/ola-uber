import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import DelivaryBoy from './delivary-boy.png'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='row'>
        <div className='col-md-6'>
          <div className='header-img-container'><img className='header-image' src={DelivaryBoy} /></div>
        </div>
        <div className='col-md-6'>
          <div className='tagline-container'>
          <h1 className='tagline'>We make life of elderly people super easy by providing various services</h1> 
          </div>
        </div>
        
         <div className='feature-card'>
              {/* <img src={retailers} className="img-manufacturer" alt="retailers" /> */}
              <h3 className='title'>Retailers</h3>
              {/* <Link to='/retailer'><img src={rightArrow} className='right-arrow' alt="arrow" /></Link> */}
            </div>
      </div>
      <Footer />
      </div>
  )
}

export default Home