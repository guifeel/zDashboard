import PropTypes from "prop-types";
import {
  CartesianGrid,
  Dot,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { VISITORS_DATA } from "../../../data/mockData";
import { BlockContentWrap, BlockTitle } from "../../../styles/global/default";
import { VisitorsBlockWrap } from "./Visitors.styles";

const formatLegendValue = (value) => {
  return value.replace("_", " ");
};

const formatTooltipValue = (value, name) => {
  return `${value.replace("_", " ")}: ${name}`;
};

const CustomTooltipContent = ({ payload }) => {
  if (!payload || !payload.length) return null;

  return (
    <div className="custom-recharts-tooltip">
      <p className="recharts-tooltip-label">{payload[0].payload?.month}</p>
      <ul className="recharts-tooltip-item-list">
        {payload?.map((payloadItem, index) => {
          return (
            <li key={index}>
              {formatTooltipValue(payloadItem.name, payloadItem.value)}
            </li>
          );
        })}
        <li></li>
      </ul>
    </div>
  );
};

CustomTooltipContent.propTypes = {
  payload: PropTypes.any,
};

const VisitorsBlock = () => {
  return (
    <VisitorsBlockWrap>
      <div className="block-head">
        <BlockTitle className="block-title">
          <h3>访客趋势</h3>
        </BlockTitle>
      </div>
      <BlockContentWrap className="line-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={VISITORS_DATA}
            margin={{
              top: 10,
              right: 5,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke="#f8f8f9"
              horizontal={true}
              vertical={false}
              strokeDasharray="3 0"
            />
            <XAxis
              dataKey="month"
              tickSize={0}
              axisLine={false}
              padding={{ left: 20 }}
              tick={({ payload, x, y, dy }) => (
                <text
                  x={x}
                  y={y + 20}
                  dy={dy}
                  textAnchor="middle"
                  fill="#7B91B0"
                  fontSize={14}
                >
                  {payload.value}
                </text>
              )}
            />
            <YAxis
              tickSize={0}
              axisLine={false}
              ticks={[100, 200, 300, 400]}
              tick={{
                fill: "#7B91B0",
                fontSize: 14,
              }}
            />
            <Tooltip content={<CustomTooltipContent />} />
            <Legend iconType="square" formatter={formatLegendValue} />
            <ReferenceLine
              isFront={true}
              x="May"
              stroke="#F64E60"
              strokeDasharray="3 3"
            >
              <Dot r={5} fill="#F64E60" />
            </ReferenceLine>
            <Line
              dot={false}
              strokeWidth={4}
              type="basis"
              dataKey="老客户"
              stroke="#A700FF"
            />
            <Line
              dot={false}
              strokeWidth={4}
              type="basis"
              dataKey="新客户"
              stroke="#F64E60"
            />
            <Line
              dot={false}
              strokeWidth={4}
              type="basis"
              dataKey="特殊群体"
              stroke="#3CD856"
            />
          </LineChart>
        </ResponsiveContainer>
      </BlockContentWrap>
    </VisitorsBlockWrap>
  );
};

export default VisitorsBlock;
