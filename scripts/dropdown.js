function toggleText(){
  var x = document.getElementById("Definitions");
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }
}

// var svgWidth = 500, svgHeight = 500; 

// var svg = d3.select("#robot_pic")
//   .append("svg")
//       .attr("width", svgWidth)
//       .attr("height", svgHeight)


var robot_indexObj = {}        //creates an object of robot: index 

// function get_indexes() { 
//   for (var i = 0; i < robot_averages.length; i++) { 
//     robot_indexObj[robot_averages[i]['ROBOT']] = i 
//   }
// }


//read the data 
d3.csv("./data/robot_names.csv", function(data) { 
  d3.select("#selectButton")
  .selectAll('myOptions')
   .data(data)
  .enter()
    .append('option')
  .text(function (d) { return d.ROBOT; }) // text showed in the menu
  .attr("value", function (d, i) { 
      robot_indexObj[d.ROBOT] = i; // double check the right way to get index d3 get data object and index 
       return ("./data/images/" + d.ROBOT + ".PNG"); })
  
})


d3.select("#selectButton").on("change", function() { 
  var selectedOption = d3.select(this).property("value"); //gets the value, which is equal to the image src 
  //var robot_index = d3.select(this).property("value2")
  console.log(selectedOption);
  d3.select("#robot_pic").attr("src", selectedOption)    //update function
  let btn = document.getElementById("selectButton");
  //let robot_name = d3.select(this).node().attr("innerHTML"); 
  let robot_name = btn.options[btn.selectedIndex].innerHTML;
  let robot_index = robot_indexObj[robot_name];
  console.log(robot_index);
  setValues(robot_index);
  setColor();
})




var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;
slider1.oninput = function() {
  output1.innerHTML = this.value;
}

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;
slider2.oninput = function() {
  output2.innerHTML = this.value;
}

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;
slider3.oninput = function() {
  output3.innerHTML = this.value;
}

var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("demo4");
output4.innerHTML = slider4.value;
slider4.oninput = function() {
  output4.innerHTML = this.value;
}

var slider5 = document.getElementById("myRange5");
var output5 = document.getElementById("demo5");
output5.innerHTML = slider5.value;
slider5.oninput = function() {
  output5.innerHTML = this.value;
}

var slider6 = document.getElementById("myRange6");
var output6 = document.getElementById("demo6");
output6.innerHTML = slider6.value;
slider6.oninput = function() {
  output6.innerHTML = this.value;
}

var slider7 = document.getElementById("myRange7");
var output7 = document.getElementById("demo7");
output7.innerHTML = slider7.value;
slider7.oninput = function() {
  output7.innerHTML = this.value;
}

var slider8 = document.getElementById("myRange8");
var output8 = document.getElementById("demo8");
output8.innerHTML = slider8.value;
slider8.oninput = function() {
  output8.innerHTML = this.value;
}

var slider9 = document.getElementById("myRange9");
var output9 = document.getElementById("demo9");
output9.innerHTML = slider9.value;
slider9.oninput = function() {
  output9.innerHTML = this.value;
}

var slider10 = document.getElementById("myRange10");
var output10 = document.getElementById("demo10");
output10.innerHTML = slider10.value;
slider10.oninput = function() {
  output10.innerHTML = this.value;
}

var slider11 = document.getElementById("myRange11");
var output11 = document.getElementById("demo11");
output11.innerHTML = slider11.value;
slider11.oninput = function() {
  output11.innerHTML = this.value;
}
