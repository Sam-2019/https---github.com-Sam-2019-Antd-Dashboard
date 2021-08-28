import { Pie } from "@ant-design/charts";

const DemoPie = ({ data }: any) => {
  var config = {
    autoFit: true,
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{percentage}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "100%",
      },
    },
    theme: 'default',   // or seriesField in some cases
   // color: ['#d62728', '#2ca02c', '#000000']
  };
  return <Pie {...config} />;
};

export default DemoPie;