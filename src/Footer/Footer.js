import React from 'react';
import "../Footer/Footer.css";

function Footer() {
  return (
    <div className='offer'>
      <h2 className=''>Get 25% off your first order.</h2>
      <p>Plus get early access to new launches and our best shops.</p>
      <form>
        <input placeholder='Email' type='email' />
      </form>
      <div className='list-area'>
        <nav>
          <ul class="list-inline">
            <h3>Categroy</h3>
            <li class="py-2 fw-bold"><a class="text-secondary text-decoration-none" href="#">Teas</a></li>
            <li class="pb-2 fw-bold"><a class="text-secondary text-decoration-none" href="#">Cool drinks</a></li>
            <li class="pb-2 fw-bold"><a class="text-secondary text-decoration-none" href="#">Fruits</a></li>
            <li class="pb-2 fw-bold"><a class="text-secondary text-decoration-none" href="#">Buns</a></li>
            </ul>
        </nav>
        <nav>
          <ul class="list-inline">
            <h3>Abouts</h3>
            <li class="py-2 fw-bold"><a class="text-secondary text-decoration-none" href="#">Our story</a></li>
            <li class="pb-2 fw-bold"><a class="text-secondary text-decoration-none" href="#">Contact</a></li>
            <li class="pb-2 fw-bold"><a class="text-secondary text-decoration-none" href="#">Blog</a></li>
          </ul>
        </nav>
        <h3>My taste</h3>
      </div>
      <hr/>
      <div className='copyright-line'>© 2025, theme-teaatti-demoPowered by Own</div>
    </div>
  )
}

export default Footer;