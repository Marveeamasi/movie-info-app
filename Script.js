//*********nav menu bar toggle***

const menuBar = document.getElementById('menuBar');
const nav = document.getElementById("navContainer");
const navClass = nav.classList;

menuBar.addEventListener('click', function() {
 navClass.toggle("toggle");

})

