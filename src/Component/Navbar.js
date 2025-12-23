import React from 'react';
import "../CSS/style.css";

 function Navbar() {
  return (
     <div class="navbar">
          <h3>Ecommerce</h3>
          <ul>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
          </ul>
          <button class="b">Buy now</button>
    </div>
  )
}
export default Navbar