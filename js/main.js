//Rendering Bar Graph
let barChart = this.document.getElementById('barChart').getContext('2d');
Chart.defaults.global.defaultFontFamily = 'Constantia';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'black';

  let myChart1 = new Chart( barChart, {
      type:'bar',
      data:{
              labels:['Mumbai', 'Gurugram', 'U.K.', 'U.S.','Phoenix', 'Navi Mumbai'],
              datasets:[{
                label:'Progress',
                data:[200, 100, -200, 300, 450, 400],
                backgroundColor:['lightpink', 'mediumpurple','deepskyblue','turquoise','peachpuff','lightyellow'],
                borderWidth:1,
                borderColor:'#777',
                hoverBorderWidth:3,
                hoverBorderColor:'black'
              }]
        },
          options:{
            responsive: true,
            aspectRatio:4,
              title:{
                  display:true,
                  text:'Progress of the Data',
                  fontSize:25
                },
                legend:{
                    display:true,
                    position:'right',
                    labels:{
                        fontColor:'black'
                    }
                },
                layout:{
                    padding:{
                        left:50,
                        right:0,
                        bottom:0,
                        top:0
                    }
                },
                tooltips:{
                    enabled:true
                },
                scales: {
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }   
                        }]
                }
                    
          }
  });

  //Rendering Line graph
 
  let lineChart = this.document.getElementById('lineChart').getContext('2d');

  let myChart2 = new Chart( lineChart, {
      type:'line',
      data:{
              labels:['2000', '2002', '2004', '2008','2010', '2012', '2014','2016','2018'],
              datasets:[{
                label:'History',
                data:[700, 200, 300, 50, 500, 400, 100,80,150],
                fill:false,
                backgroundColor:'#ccc',
                borderWidth:1,
                borderColor:'#777',
                hoverBorderWidth:3,
                hoverBorderColor:'black'
              },
              {
                label:'Geography',
                data:[150, 80, 100, 400, 500, 50, 300,200,700],
                fill:false,
                backgroundColor:'gray',
                borderWidth:1,
                borderColor:'#777',
                hoverBorderWidth:3,
                hoverBorderColor:'black'
              },
              {
                label:'Mathematics',
                data:[100, 150, 200, 250, 300, 400, 500, 550,700],
                fill:false,
                backgroundColor:'black',
                borderWidth:1,
                borderColor:'#777',
                hoverBorderWidth:3,
                hoverBorderColor:'black'
              }

            ]
        },
          options:{
            responsive: true,
            aspectRatio:4,
              title:{
                  display:true,
                  text:'Status of stocks',
                  fontSize:25
                },
                legend:{
                    display:true,
                    position:'left',
                    labels:{
                        fontColor:'black'
                    }
                },
                layout:{
                    padding:{
                        left:50,
                        right:0,
                        bottom:0,
                        top:0
                    }
                },
                tooltips:{
                    enabled:true
                },
                scales: {
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            }   
                        }]
                    }
                    }
  });

  //Rendering doughnut chart
let doughnutChart = this.document.getElementById('doughnutChart').getContext('2d');

    let myChart4 = new Chart( doughnutChart, {
        type:'doughnut',
        data:{
                labels:['Rent','Food','Utilities','clothes','Bills'],
                datasets:[{
                    label:'Data',
                    data:[20,20,20,20,20],
                    backgroundColor:['darksalmon','indianred','firebrick','darkred','maroon'],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'black'
                }]
        },
            options:{
                responsive: true,
                aspectRatio:2,
                title:{
                    display:true,
                    text:'House management',
                    fontSize:25
                },
                legend:{
                    display:true,
                    position:'right',
                    labels:{
                        fontColor:'black'
                    }
                },
                layout:{
                    padding:{
                        left:50,
                        right:0,
                        bottom:0,
                        top:0
                    }
                },
                tooltips:{
                    enabled:true
                }
                    
            }
    });

        //Rendering pie chart
  //creating json data
  data = '[   {"value" : "50"}, {"value" : "30"},{"value" : "20"} ]';   
  var mydata = JSON.parse(data);
  let pieChart = this.document.getElementById('pieChart').getContext('2d');

    let myChart3 = new Chart( pieChart, {
        type:'pie',
        data:{
                labels:['Rent','Food','Utilities'],
                datasets:[{
                    label:'Data',
                    //using json data here...
                    data:[mydata[0].value, mydata[1].value, mydata[2].value],
                    backgroundColor:['turquoise','powderblue','olivedrab'],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'black'
                }]
        },
            options:{
                responsive: true,
                aspectRatio:2,
                hover: {
                        mode: 'index'
                    },
                title:{
                    display:true,
                    text:'House management',
                    fontSize:25
                },
                legend:{
                    display:true,
                    position:'right',
                    labels:{
                        fontColor:'black'
                    }
                },
                layout:{
                    padding:{
                        left:50,
                        right:0,
                        bottom:0,
                        top:0
                    }
                },
                tooltips:{
                    enabled:true
                }
                    
            }
    });
    
         //Rendering doughnut chart
let radarChart = this.document.getElementById('radarChart').getContext('2d');

let myChart5 = new Chart( radarChart, {
    type:'radar',
    data:{
            labels:['Rent','Food','Utilities'],
            datasets:[{
                label:'Data',
                data:[10,20,30],
                backgroundColor:['beige'],
                borderWidth:1,
                borderColor:'#777',
                hoverBorderWidth:3,
                hoverBorderColor:'black'
            }]
         },
    options:{
            responsive: true,
            aspectRatio:2,
            title:{
                display:true,
                text:'House management',
                fontSize:25
            },
            legend:{
                display:true,
                position:'right',
                labels:{
                    fontColor:'black'
                }
            },
            layout:{
                padding:{
                    left:50,
                    right:0,
                    bottom:0,
                    top:0
                }
            },
            tooltips:{
                enabled:true
            }
        
        }
});

//plotting a 3d chart

Plotly.d3.json('data.js', function(error, figure) {

if(error) throw error;

var trace1 = {
      x:figure.data[0].x,
      y:figure.data[0].y, 
      z:figure.data[0].z,
      marker: {color: "rgba(142,189,42,0.9)"}, 
      name: "B18_LR_hdh", 
      type: "bar"
}

var trace2 = {
      x:figure.data[0].x , 
      y:figure.data[0].y , 
      z:figure.data[0].z ,
      marker: {color: "rgba(29,127,109,0.8)"}, 
      name: "B18_B1_hdh", 
      type: "bar"
};
var data = [trace1, trace2];
var layout = {
title: "<b>B18</b><br>Cumulative Heating Degree Hours (HDH) on a weekly basis", 
titlefont: {
color: "#7f7f7f", 
size: 18
}, 
yaxis: {title: "Weekly HDH"}
};
Plotly.plot('myDiv', data, layout);
})