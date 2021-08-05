var robot_averages; 
d3.csv("./data/robot_averages.csv", function store_robots(robots_csv) {
        robot_averages = robots_csv;
        console.log(robot_generator(user_object, 3));
    }); 



var sq_dist_list = [];
var robot_scores = {};
var robot_array = [];


function robot_generator(user_object, num_results) { 
  //var robot_scores = {}; // creates empty object of robot: euclidean dist
  for (var i = 0; i < robot_averages.length; i++) { 
    sq_dist_list = [];
    for (j = 0; j < Object.keys(user_object).length; j++ ) {
      let key = Object.keys(user_object)[j]
      var user_value = user_object[key];      //the user's numerical value 
      var data_value = (robot_averages)[i][key]    //the data value in the list of objects 
      var squared_dist = ((user_value - data_value) ** 2);
      sq_dist_list.push(squared_dist);
    }
    euc_dist = Math.sqrt(sq_dist_list.reduce((a, b) => a + b, 0));
    robot_scores[(robot_averages)[i]['ROBOT']] = euc_dist //add a robot: euc_dist pair for each item in robot.csv list to robot_scores obj
    
  }     
  robot_array = [];
  for (key in robot_scores) {
    robot_array.push([key, robot_scores[key]]);
    }
  robot_array.sort(function(a, b) { 
    return (a[1] - b[1]);
   });
  for (k = 0; k < num_results; k++) { 
    console.log('Robot', k+1 + ':', robot_array[k][0]);
    }   
}
