import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip } from "recharts";
import { VOLUME_SERVICE_DATA } from "../../../data/mockData";
import { BlockContentWrap, BlockTitle } from "../../../styles/global/default";
import { VolumeServiceWrap } from "./VolumeService.styles";

const formatLegendValue = (name, legendObj) => {
  const initialVal = 0;
  const totalVal = VOLUME_SERVICE_DATA.reduce((accumulator, dataItem) => {
    if (Object.keys(dataItem).includes(legendObj.dataKey)) {
      return accumulator + dataItem[legendObj.dataKey];
    }
  }, initialVal);

  return (
    <span className="custom-legend-item-text-group">
      <span className="custom-legend-item-text">{name}</span>
      <span className="custom-legend-item-text">{totalVal}</span>
    </span>
  );
};

const VolumeService = () => {
  return (
    <VolumeServiceWrap>
      <div className="block-head">
        <BlockTitle className="block-title">
          <h3>销量和服务等级</h3>
        </BlockTitle>
      </div>
      <BlockContentWrap className="stacked-bar-chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={VOLUME_SERVICE_DATA}
            margin={{
              top: 5,
              right: 5,
              left: 5,
            }}
          >
            <Tooltip cursor={{ fill: "transparent" }} />
            <Legend
              iconType="circle"
              iconSize={10}
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="目标"
              stackId="a"
              fill="#0095FF"
              radius={[0, 0, 4, 4]}
              barSize={16}
            />
            <Bar
              dataKey="服务"
              stackId="a"
              fill="#00E096"
              radius={[4, 4, 0, 0]}
              barSize={16}
            />
          </BarChart>
        </ResponsiveContainer>
      </BlockContentWrap>
    </VolumeServiceWrap>
  );
};

export default VolumeService;
