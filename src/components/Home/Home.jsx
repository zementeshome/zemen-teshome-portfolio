import React from 'react'
import Header from '../Header/Header';
import './Home.scss';
import $ from 'jquery';
import Footer from '../Footer/Footer';

function Home() {

    $(function() {
        $('.intro').addClass('go');
      
        $('.reload').click(function() {
          $('.intro').removeClass('go').delay(200).queue(function(next) {
            $('.intro').addClass('go');
            next();
          });
      
        });
      })

    return (
      <section className="home">
            <Header />
        <div className="container">
        <svg className="intro">
  <text text-anchor="start" x="10" y="200" className="text text-stroke" clip-path="url(#text1)" style={{fontFamily: 'Aileron Thin'}}>ZEMEN TESHOME</text>
  <text text-anchor="start" x="40" y="250" className="text text-stroke-2" clip-path="url(#text2)">FULL STACK DEVELOPER</text>
  <text text-anchor="start" x="10" y="300" className="text text-stroke-2" clip-path="url(#text3)">BASED IN TORONTO</text>
  <text text-anchor="start" x="10" y="200" className="text text-stroke text-stroke-2" clip-path="url(#text1)">ZEMEN TESHOME</text>
  <text text-anchor="start" x="40" y="250" className="text text-stroke text-stroke-2" clip-path="url(#text2)">FULL STACK DEVELOPER</text>
  <text text-anchor="start" x="10" y="300" className="text text-stroke text-stroke-2" clip-path="url(#text3)">BASED IN TORONTO</text> 
  <defs>
    <clipPath id="text1">
      <text text-anchor="start" x="10" y="200" className="text">ZEMEN TESHOME</text>
    </clipPath>
     <clipPath id="text2">
      <text text-anchor="start" x="40" y="250" className="text">FULL STACK DEVELOPER</text>
    </clipPath> 
    <clipPath id="text3">
      <text text-anchor="start" x="10" y="300" className="text">BASED IN TORONTO</text>
    </clipPath> 
    {/* <clipPath id="text3">
      <text text-anchor="start" x="10" y="70" className="text">BASED IN</text>
    </clipPath>
    <clipPath id="text3">
      <text text-anchor="start" x="10" y="70" className="text">TORONTO</text>
    </clipPath> */}
  </defs>
</svg>
</div>
{/* <Footer /> */}
</section>
    )
}

export default Home;