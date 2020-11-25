import React from 'react'
import './HomeAnimation.scss';
import $ from 'jquery';

function HomeAnimation() {

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
  <text text-anchor="start" x="10" y="30" className="text text-stroke" clip-path="url(#text1)" style={{fontFamily: 'Aileron Thin'}}>FULL STACK</text>
  <text text-anchor="start" x="10" y="30" className="text text-stroke text-stroke-2" clip-path="url(#text1)">FULL STACK</text>
  <defs>
    <clipPath id="text1">
      <text text-anchor="start" x="10" y="30" className="text">FULL STACK</text>
    </clipPath>
  </defs>
</svg>
</div>
    )
}

export default HomeAnimation;