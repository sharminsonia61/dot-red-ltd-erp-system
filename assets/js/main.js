$(document).ready(function(){



//counter
$('.counter').counterUp({
                delay: 10,
                time: 1000
            });


// multi select
$('.mul-select').select2({
  placeholder:"select a location",
tags:true,
tokenSeparators:['/',',',',',',',""]
});
$('.mul-select1').select2({
  placeholder:"select Order",
tags:true,
tokenSeparators:['/',',',',',""]
});
// pi Chart
var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,

    }
  }
});
var xValues = ["On Time", "Late", "Be Patient"];
var yValues = [80, 10, 10];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797"
];

new Chart("myChart2", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true
    }
  }
});
// graph
var xValues = ["Italy", "France", "Spain", "USA", "Argentina","Italy", "France", "Spain", "USA", "Argentina","Argentina","Italy", "France", "Spain", "USA"];
var yValues = [55, 49, 44, 24, 35,55, 49, 44, 24, 45,55, 49, 44, 24, 45];
var barColors = ["red", "green","blue","orange","black","red", "green","blue","orange","black","orange","black","red", "green","blue"];

new Chart("myChart3", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Status Graph"
    }
  }
});

// scan

});
