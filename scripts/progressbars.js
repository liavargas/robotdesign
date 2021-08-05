var listA = ['ROLE', 'LIKEABILITY', 'IDENTIFY']
var colors = d3.scaleLinear()
    .domain([0, 20, 40, 60])
    .range(["red", "orange", "yellow", "green"]);

function setValues(robot_index) { 
    for (var key of data_list) { 
        if (listA.indexOf(key) > -1) { 
            var progressBarValue =  Math.round(((+robot_averages[robot_index][key] - 1)/8)* 100);
        } else { 
            var progressBarValue =  Math.round(((+robot_averages[robot_index][key] + 3)/6)* 100);
        }
        d3.select("#p" + key.toLowerCase())
            .attr("value", progressBarValue)
            .style("backgroundColor", colors(progressBarValue));
        console.log(progressBarValue, key, robot_averages[robot_index][key]) ;
        
    } 
}



//do I need to put this into a function and have it run every time the drop down button is pressed?

function reColor() { 
for (var key of data_list) {
    if (document.getElementById("p" + key.toLowerCase()).value >= 60) { 
        document.getElementById("p" + key.toLowerCase()).dataset.value= 60;
       // document.getElementById("p" + key.toLowerCase()).style.background = "linear-gradient(to right, rgb(221, 221, 221) , green)";
    }   
    else if (document.getElementById("p" + key.toLowerCase()).value >= 40) { 
        document.getElementById("p" + key.toLowerCase()).dataset.value = 40;
        //document.getElementById("p" + key.toLowerCase()).style.background = "linear-gradient(to right, rgb(221, 221, 221) , yellow)";
    }
    else if(document.getElementById("p" + key.toLowerCase()).value >= 20) { 
        document.getElementById("p" + key.toLowerCase()).dataset.value = 20;
       // document.getElementById("p" + key.toLowerCase()).style.background = "linear-gradient(to right, rgb(221, 221, 221) , orange)"
    }
    else { 
        document.getElementById("p" + key.toLowerCase()).dataset.value = 0;
       // document.getElementById("p" + key.toLowerCase()).style.background = "linear-gradient(to right, rgb(221, 221, 221) , red)";
    }
    
}
}
reColor();


