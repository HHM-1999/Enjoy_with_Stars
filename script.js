// const Jumpstar_1=document.getElementById('star_1');
//  Jumpstar_1.addEventListener('click',()=>{
//     Jumpstar_2.classList.add("clicked");
//  })


// const Jumpstar_2= document.getElementById('star_2');
// Jumpstar_2.addEventListener('click',()=>{
//     Jumpstar_2.classList.add("clicked");
// })//

// color change
function changeColor(){
   const starColorChange= document.getElementById('star_1');
   starColorChange.style.borderBottomColor="red";
  
   
}

var starColorChange = document.getElementById("star_2");
starColorChange.addEventListener("click", changeColor);


//hide star left

// function hideStar(){
//     const HideStar= document.getElementById('star_1');
//     HideStar.style.display="none";

// }
// var HideStar = document.getElementById("star_2");
// HideStar.addEventListener("click", hideStar);

// unhide star left
function toggleVisibility() {
    var  HideStar  = document.getElementById("star_2");
    if ( HideStar.style.display === "none") {
        HideStar.style.display = "block";
    } else {
        HideStar.style.display = "none";
    }
  }

  // Attach the click event listener to the element
  var  HideStar = document.getElementById("star_1");
  HideStar.addEventListener("click", toggleVisibility);




  function handleHover() {
    var element = document.getElementById("star_1");
    // Add your hover behavior here
    element.style.borderBottomColor='purple';
  }

  function handleMouseOut() {
    var element = document.getElementById("star_1");
    // Add your hover off behavior here
    element.style.borderBottomColor="";
  }

  // Attach the mouseover and mouseout event listeners to the element
  var element = document.getElementById("star_1");
  element.addEventListener("mouseover", handleHover);
  element.addEventListener("mouseout", handleMouseOut);