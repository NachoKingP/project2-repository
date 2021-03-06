// This code works to select the dropdown values from index.html
function parseSelection() {
    var year = d3.select("#selTime").property("value");
    var cat = d3.select("#selCategory").property("value");

    // console.log(year);
    // console.log(cat);

    var path=`/${cat}/${year}`;
    // console.log(path);

    d3.json(path).then(function(data) {
      var names = data.map(row => row[0]);
      var values = data.map(row => row[1]);
      console.log(values);

      // bar(names,values,cat,year);
      chartBar(names,values,cat,year);
    });
}

function chartBar(xData, yData, cat, year) {
  console.log(yData);
  
  var CategoryTitle = "";
  if (cat === "gdp") {
    CategoryTitle = "Gross Domestic Product"
  }
  else {
    CategoryTitle = "Total Military Spend"
  }

  var yDataScaled = 0.00;
  if (cat === "gdp") {
    yDataScaled = yData.map(data => data);
  }
  else {
    yDataScaled = yData.map(data => data/1000000000);
  }

  var CategoryTitle = "";
  if (cat === "gdp") {
    CategoryTitle = "Gross Domestic Product"
  }
  else {
    CategoryTitle = "Total Military Spend"
  }

  var yTitle = "";
  if (cat === "gdp") {
    yTitle = "Percentage of GDP Spent"
  }
  else {
    yTitle = "Total Spend in USD (Billions)"
  }

  // var button = document.getElementById("submitButton");
  //   submitButton.addEventListener("click", function(){
  //   myChart.destroy();
  // });

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: xData,
          datasets: [{
              label: yTitle,
              data: yDataScaled,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
              borderWidth: 1
          }]
      },
      options: {
          title: {
            display: true,
            fontSize: 20,
            text: `Top Ten Countries in ${year} By ${CategoryTitle}`
          },
          animation: {
            duration: 2000,
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  var button = document.getElementById("refresh");
    refresh.addEventListener("click", function(){
    myChart.destroy();
});
}


function bar(xData, yData, cat, year){
  var CategoryTitle = "";
  if (cat === "gdp") {
    CategoryTitle = "Gross Domestic Product"
  }
  else {
    CategoryTitle = "Total Military Spend"
  }

  var yTitle = "";
  if (cat === "gdp") {
    yTitle = "Percentage of GDP Spent"
  }
  else {
    yTitle = "Total Spend in USD"
  }

  var trace1 = {
    x: xData,    
    y: yData,      
    text: yData,
    name: `Top Ten Countries in ${year} By ${CategoryTitle}`,
    type: "bar"
  };

  var layout1 = {
    title: `Top Ten Countries in ${year} By ${CategoryTitle}`,
    xaxis:{title: "Country"},
    yaxis:{title: `${yTitle}`},
    height: 400,
    width: 600,
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };

  // creating data variable 
  var data1 = [trace1];

  // Create your bar chart using plotly
  // Plotly.newPlot("bar", data1, layout1);
}

// Initialize Page
function init() {
  var year = 2018;
  var cat = "tms";
  var path=`/${cat}/${year}`;
  // console.log(path);

  d3.json(path).then(function(data) {
    var names = data.map(row => row[0]);
    var values = data.map(row => row[1]);
    console.log(values);

    // bar(names,values,cat,year);
    chartBar(names,values,cat,year);
  });
}
  
init();
  