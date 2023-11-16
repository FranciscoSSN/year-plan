/* eslint-disable react/jsx-no-target-blank */

import './App.css'

function App() {

  return (
    <div className='main-container'>
      <img src="./assets/illustration-hero.svg" />
      <h1>Order Summary</h1>
      <p>
        You can now listen to millions of songs,
        audiobooks, and podcasts on any device
        anywhere you like!
      </p>
      <div className='container-main-plans'>
        <img src="./assets/icon-music.svg" alt="" />
        <div className='container-signature'>
          <span>Annual Plan</span>
          <p>$59.99/year</p>
        </div>
        <a href='https://www.linkedin.com/in/francisco-severiano-73638a190/' target='_blank'>Change</a>
      </div>
      <button className='contract'>Proceed to Payment</button>
      <button className='cancel'>Cancel Order</button>
    </div>
  )
}

export default App
