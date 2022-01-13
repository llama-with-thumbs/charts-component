import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { csv, scaleLinear, scaleTime, timeFormat, extent } from 'd3';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

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

const xValue = (d) => d.date;
const xAxisLabel = 'Time';
const yValue = (d) => d.air_temperature_avg;
const yAxisLabel = 'Average air temperature (°C)';

const xAxisTickFormat = timeFormat("%m-'%y");

const App = () => {
  const data = useData();

  if (!data) {
    return <pre>Loading data...</pre>;
  }
	
  console.log(data[0]);
  
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
          tickOffset={7}
        />
        <AxisLeft
          yScale={yScale}
          innerWidth={innerWidth}
        />
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
          tickOffset={7}
        >
          {xAxisLabel}
        </text>
        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset},${innerHeight / 2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
      </g>
    </svg>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
