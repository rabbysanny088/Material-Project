import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieCharts = () => {
  const [state, setState] = useState({

    series: [44, 55, 13, 33],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      dataLabels: {
        enabled: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
      }
    },
  });
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
        <ReactApexChart options={state.options} series={state.series} type="donut" width={280} />

    </div>
  );
};

export default PieCharts;
