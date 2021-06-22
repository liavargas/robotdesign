
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");    //shows the dropdown menu 
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {                     
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");  //getting a list of all the dropdown elements 
    var i;
    for (i = 0; i < dropdowns.length; i++) {   //for all the items in dropdowns 
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
