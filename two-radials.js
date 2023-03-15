<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<div class="container" style="padding:0px;">
   <div class="row">
      <div id="responsive-chart1" class="col-md-6"></div>
      <div id="responsive-chart2" class="col-md-6"></div>
   </div>
   <div class="row">
      <div id="responsive-chart3" class="col-md-12"></div>
   </div>
</div>
<script>
let s1=document.querySelector("#tog-total-inv .panel-body p").innerHTML;   
let t1=document.querySelector("#tog-total-inv .fusion-toggle-heading").innerHTML;
let s2=document.querySelector("#tog-total-pay .panel-body p").innerHTML;
let t2=document.querySelector("#tog-total-pay .fusion-toggle-heading").innerHTML;
let sd1=[];
let sd2=[];
let sd3=[];
s1=parseFloat(s1);
s2=parseFloat(s2);
s1=(s1/3000000)*100;
s2=(s2/50000)*100;
sd1.push(s1);
sd2.push(s2);
sd3.push(s1);
sd3.push(s2);

let options1 = {
          series: sd1,
		  labels: [t1],
		  colors: ['#292364'],
          chart: {
          type: 'radialBar',
		  width: '100%',
		  offsetY: -10
          },
		  tooltip: {
            enabled: true,
			style:{
			 color:'white'
			},
			custom:function({series, seriesIndex, dataPointIndex, w}) {
				let a=parseFloat(series).toFixed(2);
				a=(a*3000000)/100;
			  return a
			}
		  },
		  responsive: [{
		    breakpoint: 1000,
		    options:{
		        chart:{
		          width:'50%'
			    }
		    }
		  }],
		  plotOptions: {
		   radialBar: {
            startAngle: -135,
            endAngle: 135,
			track: {
				background: '#dfdefa',
				startAngle: -135,
				endAngle: 135,
			},
            dataLabels: {
              name: {
                fontSize: '16px',
                color: '#292364',
                offsetY: 150
              },
              value: {
                offsetY: 76,
                fontSize: '22px',
                color: '#292364',
                formatter: function (val) {
				  let a=parseFloat(val).toFixed(2);
				  a=(a*3000000)/100;
                  return a + "€";
                }
              }
            }
           }
		  },
		  fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              shadeIntensity: 0.15,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 4
        }
};

let options2 = {
          series: sd2,
		  labels: [t2],
		  colors: ['#292364'],
          chart: {
          type: 'radialBar',
		  width: '100%',
		  offsetY: -10
          },
		  tooltip: {
            enabled: true,
			style:{
			 color:'white'
			},
			custom:function({series, seriesIndex, dataPointIndex, w}) {
				let a=parseFloat(series).toFixed(2);
				a=(a*50000)/100;
			  return a
			}
		  },
		  responsive: [{
		    breakpoint: 1000,
		    options:{
		        chart:{
		          width:'50%'
			    }
		    }
		  }],
		  plotOptions: {
		   radialBar: {
            startAngle: -135,
            endAngle: 135,
			track: {
				background: '#dfdefa',
				startAngle: -135,
				endAngle: 135,
			},
            dataLabels: {
              name: {
                fontSize: '16px',
                color: '#292364',
                offsetY: 150
              },
              value: {
                offsetY: 76,
                fontSize: '22px',
                color: '#292364',
                formatter: function (val) {
                  let a=parseFloat(val).toFixed(2);
				  a=(a*50000)/100;
                  return a + "€";
                }
              }
            }
           }
		  },
		  fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              shadeIntensity: 0.15,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 4
        }
};
/*
let options3 = {
          series: sd3,
		  labels: ['Συνολική Επένδυση','Συνολικό Ποσό Επιστροφής Επένδυσης'],
		  colors: ['#292364', '#838a96'],
          chart: {
          type: 'donut',
		  width: '70%'
          },
		  responsive: [{
		    breakpoint: 1000,
		    options:{
		        chart:{
		          width:'50%'
			    },
		        legend:{
			      position:"bottom"
			   }
		    }
		  }],
		  plotOptions: {
		   value: {
              show: true,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              color: undefined,
              offsetY: 16,
              formatter: function (val) {
                 return val+'€'
              }
        }
		  }
};

let chart3 = new ApexCharts(
  document.querySelector("#responsive-chart3"),
  options3
);

chart3.render();
*/
let chart1 = new ApexCharts(
  document.querySelector("#responsive-chart1"),
  options1
);

chart1.render();
let chart2 = new ApexCharts(
  document.querySelector("#responsive-chart2"),
  options2
);

chart2.render();
</script>