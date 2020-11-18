import React from 'react'
// import Header from '../Header/Header';
import './Home.scss';
import $ from 'jquery';

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
        <div className="container">
        <svg className="intro">
  <text text-anchor="start" x="10" y="30" className="text text-stroke" clip-path="url(#text1)">ZEMEN TESHOME</text>
  <text text-anchor="start" x="10" y="50" className="text text-stroke-2" clip-path="url(#text2)">FULL STACK</text>
  <text text-anchor="start" x="10" y="50" className="text text-stroke-2" clip-path="url(#text2)">DEVELOPER</text>
  <text text-anchor="start" x="10" y="70" className="text text-stroke" clip-path="url(#text3)">BASED IN</text>
  <text text-anchor="start" x="10" y="70" className="text text-stroke" clip-path="url(#text3)">TORONTO</text>
  <text text-anchor="start" x="10" y="30" className="text text-stroke text-stroke-2" clip-path="url(#text1)">ZEMEN TESHOME</text>
  <text text-anchor="start" x="10" y="50" className="text text-stroke text-stroke-2" clip-path="url(#text2)">FULL STACK</text>
  <text text-anchor="start" x="10" y="50" className="text text-stroke text-stroke-2" clip-path="url(#text2)">DEVELOPER</text>
  <text text-anchor="start" x="10" y="70" className="text text-stroke text-stroke-2" clip-path="url(#text3)">BASED IN</text>
  <text text-anchor="start" x="10" y="70" className="text text-stroke text-stroke-2" clip-path="url(#text3)">TORONTO</text>
  <defs>
    <clipPath id="text1">
      <text text-anchor="start" x="10" y="30" className="text">ZEMEN TESHOME</text>
    </clipPath>
    <clipPath id="text2">
      <text text-anchor="start" x="10" y="50" className="text">FULL STACK</text>
    </clipPath>
    <clipPath id="text2">
      <text text-anchor="start" x="10" y="50" className="text">DEVELOPER</text>
    </clipPath>
    <clipPath id="text3">
      <text text-anchor="start" x="10" y="70" className="text">BASED IN</text>
    </clipPath>
    <clipPath id="text3">
      <text text-anchor="start" x="10" y="70" className="text">TORONTO</text>
    </clipPath>
  </defs>
</svg>
</div>
    )
}

export default Home;