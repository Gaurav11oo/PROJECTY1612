var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }


//   const searchFun = () =>{
//     let filter = document.getElementById('myInput').ariaValueMax.toUpperCase();
//     let container =document.getElementById('container');
//     let container = 

//   }