const content = document.querySelector('.content');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const toggle = document.querySelector('.toggle');
const headline = document.querySelector('.headline');
// const title = document.querySelector('#title');


const tl = new TimelineMax();

tl.fromTo(content,2,{height: "0%" }, {height: "100%", ease: Power2.easeInOut })
.fromTo(content,1,{width: "70%"}, {width: "100%", ease: Power2.easeInOut})
.fromTo(slider,1.2,{x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(logo,0.5,{opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.5")
.fromTo(toggle,0.5,{opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.5")
.fromTo(headline,0.5,{opacity: 0, x:10}, {opacity: 1, x:-30}, "-=0.5");

// tl.fromTo(title,0.5,{opacity: 0, x:10}, {opacity: 1, x:-30}, "-=0.5");

AOS.init({
  duration: 1200,
});


