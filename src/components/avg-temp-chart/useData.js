import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/vdvoorder/dee7d0ff214970d7b9ed48ea12f93345/raw/daily-atmospheric-conditions_belgium_20171118-20211225.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
			d.date = new Date(d.date),
      d.year = d.date.getFullYear(),
      d.air_pressure = +d.air_pressure,
      d.air_temperature_avg = +d.air_temperature_avg,
      d.air_temperature_max = +d.air_temperature_max,
      d.air_temperature_min = +d.air_temperature_min,
      d.relative_humidity = +d.relative_humidity,
      d.precipitation = +d.precipitation,
      d.wind_speed = +d.wind_speed
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data
              //.slice(0, 50)
							.sort(function(a, b) {
      					return d3.ascending(a.date, b.date)
							})
			);
    });
  }, []);
  return data;
};