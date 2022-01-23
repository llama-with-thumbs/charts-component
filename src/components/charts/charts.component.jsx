import React from 'react';
import DailyChart from '../daily-chart/daily-chart.component';
import CumulativeChart from '../cumulative-chart/cumulative-chart.component';

import { json } from 'd3';

import './charts.styles.scss';

const Charts = () => {
  return (
    <div className='charts'>
      <CumulativeChart />
      <DailyChart />
    </div>
  );
};

export default Charts;
