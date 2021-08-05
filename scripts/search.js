

var user_object = {

};

var data_list = ['WARMTH', 'COMPETENCE', 'DISCOMFORT', 'MASCULINE', 'FEMININE', 'ROLE', 'LIKEABILITY', 'IDENTIFY', 'PERCEPTION', 'TACTILE_MOBILITY', 'NONVERBAL'];
var checkbox_list = ["warmth", "competence", "Discomfort", "Masculinity", "Femininity", "Role", "Likeability", "Identity", "Perception", "Tactile", "Non_verbal"];

function update_object() { 
    user_object = {};
    for (var i = 0; i < data_list.length; i++) { 
        if (document.getElementById(checkbox_list[i]).checked) { 
            user_object[data_list[i]] = +document.getElementById('myRange' + (i+1)).value;
        }
    }
    console.log(user_object)
}

//     if (document.getElementById("myRange1").disabled == true) { 
//         delete user_object.WARMTH;
//     }
//     if (document.getElementById("myRange2").disabled == true) { 
//         delete user_object.COMPETENCE;
//     }
//     if (document.getElementById("myRange3").disabled == true) { 
//         delete user_object.DISCOMFORT;
//     }
//     if (document.getElementById("myRange4").disabled == true) { 
//         delete user_object.MASCULINE;
//     }
//     if (document.getElementById("myRange5").disabled == true) { 
//         delete user_object.FEMININE;
//     }
//     if (document.getElementById("myRange6").disabled == true) { 
//         delete user_object.ROLE;
//     }
//     if (document.getElementById("myRange7").disabled == true) { 
//         delete user_object.LIKEABILITY;
//     }
//     if (document.getElementById("myRange8").disabled == true) { 
//         delete user_object.IDENTIFY;
//     }
//     if (document.getElementById("myRange9").disabled == true) { 
//         delete user_object.PERCEPTION;
//     }
//     if (document.getElementById("myRange10").disabled == true) { 
//         delete user_object.TACTILE_MOBILITY;
//     }
//     if (document.getElementById("myRange11").disabled == true) { 
//         delete user_object.NONVERBAL;
//     }
//     if (document.getElementById("warmth").checked == false) { 
//         delete user_object.WARMTH;
//     }
//     if (document.getElementById("competence").checked == false) { 
//         delete user_object.COMPETENCE;
//     }
//     if (document.getElementById("Discomfort").checked == false) { 
//         delete user_object.DISCOMFORT;
//     }
//     if (document.getElementById("Masculinity").checked == false) { 
//         delete user_object.MASCULINE;
//     }
//     if (document.getElementById("Femininity").checked == false) { 
//         delete user_object.FEMININE;
//     }
//     if (document.getElementById("Role").checked == false) { 
//         delete user_object.ROLE;
//     }
//     if (document.getElementById("Likeability").checked == false) { 
//         delete user_object.LIKEABILITY;
//     }
//     if (document.getElementById("Identity").checked == false) { 
//         delete user_object.IDENTIFY;
//     }
//     if (document.getElementById("Perception").checked == false) { 
//         delete user_object.PERCEPTION;
//     }
//     if (document.getElementById("Tactile").checked == false) { 
//         delete user_object.TACTILE_MOBILITY;
//     }
//     if (document.getElementById("Non-verbal").checked == false) { 
//         delete user_object.NONVERBAL;
//     }
//     //return user_object;
// }



//add an event listener 
// on each slider include an oninput = updatefunc() to make an update function 
// key that corresponds: 


// function updatefunc() {
//     user_object['WARMTH'] = +document.getElementById('myRange1').value;
//     user_object['COMPETENCE'] =  +document.getElementById('myRange2').value,
//     user_object['DISCOMFORT'] =  +document.getElementById('myRange3').value,
//     user_object['MASCULINE'] =  +document.getElementById('myRange4').value, 
//     user_object['FEMININE']=  +document.getElementById('myRange5').value,
//     user_object['ROLE']=  +document.getElementById('myRange6').value,
//     user_object['LIKEABILITY']= +document.getElementById('myRange7').value,
//     user_object['IDENTIFY']=  +document.getElementById('myRange8').value,
//     user_object['PERCEPTION']= +document.getElementById('myRange9').value,
//     user_object['TACTILE_MOBILITY'] =  +document.getElementById('myRange10').value,
//     user_object['NONVERBAL']=  +document.getElementById('myRange11').value

// }

// document.getElementById('myRange1').addEventListener('input', updatefunc);
// document.getElementById('myRange2').addEventListener('input', updatefunc);
// document.getElementById('myRange3').addEventListener('input', updatefunc);
// document.getElementById('myRange4').addEventListener('input', updatefunc);
// document.getElementById('myRange5').addEventListener('input', updatefunc);
// document.getElementById('myRange6').addEventListener('input', updatefunc);
// document.getElementById('myRange7').addEventListener('input', updatefunc);
// document.getElementById('myRange8').addEventListener('input', updatefunc);
// document.getElementById('myRange9').addEventListener('input', updatefunc);
// document.getElementById('myRange10').addEventListener('input', updatefunc);
// document.getElementById('myRange11').addEventListener('input', updatefunc);

document.getElementById('reset').onclick = function() {
    document.getElementById('myRange1').value = 0;
    document.getElementById("demo1").innerHTML = 0; //innerhtml gets the txt inside span 
    user_object['WARMTH'] = 0; // simulating user input thru javascript 
    document.getElementById("warmth").checked = false;
    document.getElementById("myRange1").disabled = true;

    document.getElementById('myRange2').value = 0;
    document.getElementById("demo2").innerHTML = 0;
    user_object['COMPETENCE'] = 0;
    document.getElementById("competence").checked = false;
    document.getElementById("myRange2").disabled = true;

    document.getElementById('myRange3').value = 0;
    document.getElementById("demo3").innerHTML = 0;
    user_object['DISCOMFORT'] = 0;
    document.getElementById("Discomfort").checked = false;
    document.getElementById("myRange3").disabled = true;


    document.getElementById('myRange4').value = 0;
    document.getElementById("demo4").innerHTML = 0;
    user_object['MASCULINE'] = 0;
    document.getElementById("Masculinity").checked = false;
    document.getElementById("myRange4").disabled = true;


    document.getElementById('myRange5').value = 0;
    document.getElementById("demo5").innerHTML = 0;
    user_object['FEMININE'] = 0;
    document.getElementById("Femininity").checked = false;
    document.getElementById("myRange5").disabled = true;


    document.getElementById('myRange6').value = 0;
    document.getElementById("demo6").innerHTML = 0;
    user_object['ROLE'] = 0;
    document.getElementById("Role").checked = false;
    document.getElementById("myRange6").disabled = true;
 

    document.getElementById('myRange7').value = 0;
    document.getElementById("demo7").innerHTML = 0;
    user_object['LIKEABILITY'] = 0;
    document.getElementById("Likeability").checked = false;
    document.getElementById("myRange7").disabled = true;
 

    document.getElementById('myRange8').value = 0;
    document.getElementById("demo8").innerHTML = 0;
    user_object['IDENTIFY'] = 0;
    document.getElementById("Identity").checked = false;
    document.getElementById("myRange8").disabled = true;
 

    document.getElementById('myRange9').value = 0;
    document.getElementById("demo9").innerHTML = 0;
    user_object['PERCEPTION'] = 0;
    document.getElementById("Perception").checked = false;
    document.getElementById("myRange9").disabled = true;


    document.getElementById('myRange10').value = 0;
    document.getElementById("demo10").innerHTML = 0;
    user_object['TACTILE_MOBILITY'] = 0;
    document.getElementById("Tactile").checked = false;
    document.getElementById("myRange10").disabled = true;


    document.getElementById('myRange11').value = 0;
    document.getElementById("demo11").innerHTML = 0;
    user_object['NONVERBAL'] = 0;
    document.getElementById("Non_verbal").checked = false;
    document.getElementById("myRange11").disabled = true;
 

}


var number = document.getElementById('num_robots').value;

var num_results;

function updateNum() { 
  var number; 
  number = document.getElementById('num_robots').value;
  num_results = +number;
 }


document.getElementById('search').onclick = function() { 
    console.log(robot_generator(user_object, num_results));

    if (num_results > 0) {
    d3.select("#top_robot").attr("src", "images/" + robot_array[0][0] + ".PNG").attr("width", 352);
    document.getElementById("topRobot-text").innerHTML = ("Your top robot is: " + (robot_array[0][0]).bold())
    }
    d3.select("#extraRobots").html(""); //clear div containing extra robots 
    d3.select("#otherRobot-text").html(""); 
    results = (num_results - 1).toString();
    if (num_results > 1) { 
        document.getElementById("otherRobot-text").innerHTML = "The other " + results + " robot(s) that matched your criteria are listed below in order:";
        for (s = 1; s < num_results; s++) { 
            let figure = d3.select("#extraRobots").append('figure')
            let name = String(robot_array[s][0]);
            figure.append('img').attr("src", "images/" + robot_array[s][0] + ".PNG" )
            .attr("width", 200); 
            figure.append('figcaption').text( (s+1) + ". " + robot_array[s][0]).style("text-align", "center");

            } 
        }
}


