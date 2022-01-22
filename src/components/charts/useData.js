import React, { useState, useEffect } from 'react';
import { ascending, json } from 'd3';

const newCountry = 'Canada';
const jsonUrl = `https://api.covid19api.com/dayone/country/${newCountry}/status/confirmed`;

const data = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      return d;
    };
    json(jsonUrl, row).then((data) => {
      setData(
        data.sort(function (a, b) {
          return ascending(a.Date, b.Date);
        }),
      );
    });
  }, []);
  return data;
};

export const dailyData = () => {
 return data();
}
