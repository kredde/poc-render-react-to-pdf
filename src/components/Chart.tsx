'use client';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Chart = ({ data }: any) => (
  <LineChart width={270} height={200} data={data}>
    <XAxis fontSize={9} dataKey="name" />
    <YAxis fontSize={9} />
    <Line
      type="monotone"
      dataKey="pv"
      stroke="#8884d8"
      isAnimationActive={false}
      activeDot={{ r: 8 }}
    />
    <Line
      type="monotone"
      dataKey="uv"
      stroke="#82ca9d"
      isAnimationActive={false}
    />
  </LineChart>
);

export default Chart;
