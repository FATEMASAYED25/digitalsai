// make a randome background
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
      
  
        
// appear and desapear nav while scrolling .
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


//start feedback div
/*

(function autoSlider(){


  $('.slider .active').each(function(){

    if (!$(this).is(':last-child')) {

      $(this).delay(5000).fedeOut(1000, function (){

        $(this).removeClass('active').next().addClass('active').fadeIn();

        autoSlider();
      });
    } else {
      $(this).delay(5000).fedeOut(1000, function (){
        $(this).removeClass('active');
        $('.slider div').eq(0).addClass('active').fadeIn();
        autoSlider();
      });
    }

}());

});

*/








