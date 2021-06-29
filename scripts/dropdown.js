<!-- Load d3.js -->
<script src="https://d3js.org/d3.v4.js"></script>

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

var svgWidth = 500, svgHeight = 500; 

var svg = d3.select("#robot_pic")
  .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight)


//read the data 
d3.csv("https://drive.google.com/drive/my-drive/USC REU/robot_names.csv", function(data) { 
  var labels =  []
  for (var i = 0; i < data.length; i++) {       //[make a list and append each item in csv to list] 
    labels.push(i);
  }
  d3.select("#selectButton").data(labels)
})

d3.select("selectButton").on("change", function(d) { 
  
  update(robot_pic)
}
