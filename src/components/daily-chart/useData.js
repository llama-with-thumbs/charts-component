import React, { useState, useEffect } from 'react';
import { ascending, json } from 'd3';

const newCountry = 'Canada';
const jsonUrl = `https://api.covid19api.com/dayone/country/${newCountry}/status/confirmed`;

const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.Date = d.Date.toLocaleDateString('en-US');
      return d;
    };
    json(jsonUrl, row).then((data) => {
      let previousDayCasesNumber = 0;
      setData(
        data
          .sort(function (a, b) {
            return ascending(a.Date, b.Date);
          })
          .filter((row, i) => i % 10 === 0)
          .map((row) => {
            let currentDayCasesNumber = +row.Cases - previousDayCasesNumber;
            previousDayCasesNumber = +row.Cases;
            return { Date: row.Date, Cases: currentDayCasesNumber };
          }),
      );
    });
  }, []);
  return data;
};

export default useData;
