import React from 'react';
import DailyChart from '../daily-chart/daily-chart.component';
import CumulativeChart from '../cumulative-chart/cumulative-chart.component';

import { json } from 'd3';

import './charts.styles.scss';

const Charts = () => {
  const countyName = 'canada';
  
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    json(
      `https://api.covid19api.com/dayone/country/${countyName}/status/confirmed`,
    ).then((data) => {
      setData(data);
      setLoading(false);
    });
    return () => undefined;
  }, []);

  return (
    <div>
      {loading && <div>loading</div>}
      {!loading && <CumulativeChart data={data} />}
      {/* {!loading && <DailyChart data={data} />} */}
    </div>
  );
};

export default Charts;
