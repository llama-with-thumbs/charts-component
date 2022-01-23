import React from 'react';
import useData from './useData';
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from 'recharts';

import './daily-chart.styles.scss';

const DailyChart = () => {
  const data = useData();
  return (
    <div className="cumulative-char">
      <h4>Daily count of cases</h4>
      <LineChart
        width={350}
        height={350}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="Name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="Date" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="Cases" stroke="#387908" yAxisId={1} />
      </LineChart>
    </div>
  );
};

export default DailyChart;
