import React from 'react';
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer"; 
 function App() {
  return (
    <div >
         <Navbar />   
         <img src={require("./assets/images/banner.png")} alt="banner"  class="banner"/>
        <div className="hero-section">
  <div className="hero-overlay">
    <div className="hero-content">
      <h1 className="hero-title">Timeless Elegance</h1>
      <p className="hero-subtitle">
        Discover our curated collection of luxury timepieces.
      </p>
      <button className="hero-btn">Shop Collection</button>
    </div>
  </div>
</div>
    <section class="featured-section">
        <h2>Featured Watches</h2>
        
        <div class="product-grid">
            <div class="product-card">
                <img src={require("./assets/images/watch1.png")} alt="Chrono Heritage"/>
                <h3>Chrono Heritage</h3>
                <p class="price">$199.00</p>
                <button class="btn-cart">Add to Cart</button>
            </div>

            <div class="product-card">
                <img src={require("./assets/images/watch2.png")} alt="Midnight Stealth"/>
                <h3>Midnight Stealth</h3>
                <p class="price">$240.00</p>
                <button class="btn-cart">Add to Cart</button>
            </div>

            <div class="product-card">
                <img src={require("./assets/images/watch3.png")} alt="Oceanic Diver"/>
                <h3>Oceanic Diver</h3>
                <p class="price">$350.00</p>
                <button class="btn-cart">Add to Cart</button>
            </div>

            <div class="product-card">
                <img src={require("./assets/images/watch4.png")} alt="Rose Gold Elite"/>
                <h3>Rose Gold Elite</h3>
                <p class="price">$109.00</p>
                <button class="btn-cart">Add to Cart</button>
            </div>
            <div class="product-card">
                <img src={require("./assets/images/watch1.png")} alt="Chrono Heritage"/>
                <h3>Chrono Heritage</h3>
                <p class="price">$199.00</p>
                <button class="btn-cart">Add to Cart</button>
            </div>

            <div class="product-card">
                <img src={require("./assets/images/watch2.png")} alt="Midnight Stealth"/>
                <h3>Midnight Stealth</h3>
                <p class="price">$240.00</p>
                <button class="btn-cart">Add to Cart</button>
            </div>

            <div class="product-card">
                <img src={require("./assets/images/watch3.png")} alt="Oceanic Diver"/>
                <h3>Oceanic Diver</h3>
                <p class="price">$350.00</p>
                <button class="btn-cart">Add to Cart</button>
            </div>

            <div class="product-card">
                <img src={require("./assets/images/watch4.png")} alt="Rose Gold Elite"/>
                <h3>Rose Gold Elite</h3>
                <p class="price">$109.00</p>
                <button class="btn-cart">Add to Cart</button>
            </div>
        </div>
    </section>
    <Footer />
          </div>
  )
}
export default App;