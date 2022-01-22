import { useEffect, useRef, useState } from 'react';
import { csv, scaleLinear, scaleTime, timeFormat, extent } from 'd3';
import { select } from 'd3';

import useInterval from './useInterval';
import useData from './useData';

import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

import './daily-chart.styles.scss';


const generateDataset = () =>
  Array(10)
    .fill(0)
    .map(() => [Math.random() * 80 + 10, Math.random() * 35 + 10]);

const DailyChart = () => {
    const data = useData();
    console.log(data);
  const [dataset, setDataset] = useState(generateDataset());
  const ref = useRef();
  useEffect(() => {
    const svgElement = select(ref.current);
    svgElement
      .selectAll('circle')
      .data(dataset)
      .join('circle')
      .attr('cx', (d) => d[0])
      .attr('cy', (d) => d[1])
      .attr('r', 3);
  }, [dataset]);

  useInterval(() => {
    const newDataset = generateDataset();
    setDataset(newDataset);
  }, 5000);

  return (
    <div className="daily-chart">
      <svg viewBox="0 0 100 50" ref={ref} />;
    </div>
  );
};

export default DailyChart;
