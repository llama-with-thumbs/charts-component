import React from 'react';
import { csv, scaleLinear, scaleTime, timeFormat, extent } from 'd3';

import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

import './daily-chart.styles.scss';

const width = 960;
const height = 500;
const margin = {
  top: 30,
  right: 30,
  bottom: 60,
  left: 80,
};
const xAxisLabelOffset = 45;
const yAxisLabelOffset = 45;

const xValue = (d) => d.Date;
const xAxisLabel = 'Time';
const yValue = (d) => d.Cases;
const yAxisLabel = 'Cases';

const xAxisTickFormat = timeFormat("%m-'%y");

const DailyChart = (props) => {
  const data = props.data;
  
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
    .nice();
    
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale} innerWidth={innerWidth} />
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
          circleRadius={3}
        />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset},${
            innerHeight / 2
          }) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
      </g>
    </svg>
  );
};
export default DailyChart;
