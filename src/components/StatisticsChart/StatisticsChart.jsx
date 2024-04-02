import css from "./StatiticsChart.module.css";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const StatisticsChart = () => {
  const options = {
    color: ["var(--orange)"],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundColor: "blue",
      borderWidth: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      show: false,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        type: "line",
        smooth: true,
        LineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.1, [
            { offset: 0, color: "orange" },
            { offset: 1, color: "red" },
          ]),
          width: 8,
        },
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            { offset: 0, color: "blue" },
            { offset: 1, color: "rgba(0,0,0,0.5)" },
          ]),
        },
        data: [28000, 20000, 25000, 30000, 15000, 18000, 25000],
      },
    ],
  };
  return (
    <div className={css.container}>
      <ReactECharts
        option={options}
        // notMerge={true}
        // lazyUpdate={true}
        // style={{ height: "300px", width: "100%" }}
      />
    </div>
  );
};

export default StatisticsChart;
