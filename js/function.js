<<<<<<< HEAD
// make a randome slideshow background
/*
let landing= document.querySelector(".home");

//get array of imags
let imags=["2.png" ,"4.png" ,"5.png","3.png"];

setInterval(()=> {

    //get random number
    let randomNumber = Math.floor(Math.random()* imags.length);
    //change background image url
    landing.style.backgroundImage= `url(imgs/${imags[randomNumber]})`
},5000
);
*/

/*

// creat pop up for our services boxes
let boxes=  document.querySelectorAll(".box");

boxes.forEach(box=>{
    box.addEventListener("click" , (e) => {
         // creat overlay element
let overlay=document.createElement("div");
         //add some styles to overlay
overlay.className = "popup-overlay";
document.body.appendChild(overlay);
         // creat popup 
        box.classList.toggle("popup-box");
        // creat close span
        let closeBtn =document.createElement("span");
        // creat the close text
        let closeText =document.createTextNode("x");

        closeBtn.appendChild(closeText);
        // creat styles to closeBtn
        closeBtn.className ="close-btn";
        overlay.appendChild(closeBtn);

        //add event listener to close bottom

        closeBtn.addEventListener('click', (e)=> {
            
            e.target.parentNode.style.display = 'none';
            box.classList.remove('popup-box');
          });

          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
            if (event.target == overlay) {
              overlay.style.display = "none";
              box.classList.remove('popup-box');
            }
        }
      
      });
      
      });
    */  
  
        
// add testmonials
=======

  
        
// add testmonial
>>>>>>> b26a267ec6fb1c9958eb5314f1d3f89cf745995f
$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      items:1,
      itemsDesktop:[1000,1],
      itemsDesktopSmall:[979,1],
      itemsTablet:[768,1],
      pagination:true,
      transitionStyle:"backSlide",
      autoPlay:true
  });
});











