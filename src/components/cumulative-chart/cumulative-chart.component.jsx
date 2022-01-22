import React from 'react';
import useData from './useData';
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from 'recharts';

import './cumulative-chart.styles.scss';

const CumulativeChart = () => {
    const data = useData();
  return (
    <LineChart
      width={400}
      height={400}
      data={data}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="Date" stroke="#ff7300" yAxisId={0} />
      <Line type="monotone" dataKey="Cases" stroke="#387908" yAxisId={1} />
    </LineChart>
  );
};

export default CumulativeChart;
