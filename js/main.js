'use strict'

let slider = $('.slider').find('li');

let currentSlide = 1;
let start = {left: 400, opacity: 0};
let current = {left: 0, opacity: 1};
let end = {left: -350, opacity: 0};
let slidesCount = slider.length;
let interval;
    
slider.css(start).first().css(current).animate({current});
    
showSlide()
    
function showSlide() {
        
    let interval
    let timeOut
    if(currentSlide > slidesCount) {
    currentSlide = 1;
}
        
    interval = setInterval(function() {
        $('.slider').find(`li:nth-child(${currentSlide})`).animate({left: 0, opacity: 1});
            
         timeOut = setTimeout(function() {
            $('.slider').find(`li:nth-child(${currentSlide})`).animate({left: -350, opacity: 0});
            slider.css(start);
            currentSlide++
            
            clearInterval(interval)
            clearTimeout(timeOut)
               
        }, 1500)
            
    }, 2000)
       
    setTimeout(function() {
        showSlide()
    }, 1900)
}
    
    
   
    
    
    
    
    
    
    