import ReactECharts from "echarts-for-react";
// import * as echarts from "echarts";

const OrdersPieChart = () => {
  const option = {
    series: [
      {
        name: "订单数",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "cross",
          formatter: "{b}\n{d}%",
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: "2190", name: "Search Engine" },
          { value: "2000", name: "Direct" },
          { value: "484", name: "Email" },
          { value: "2190", name: "Union Ads" },
        ],
        emphasis: {
          label: {
            show: true,
            fontSize: "20",
            fontWeight: "bold",
          },
        },
      },
    ],
  };
  return (
    <ReactECharts style={{ height: 140, marginTop: "1rem" }} option={option} />
  );
};

export default OrdersPieChart;
