import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';
export default function Chart(props) {
    const values = props.dataPoints.map(datapoint => datapoint.value);
    const maxValue = Math.max(...values);
    // console.log(maxValue +" is max value");
    // console.log(values);
    return (
    <div className = 'chart'>
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maxValue}
          label={datapoint.label}
        />
    ))}
    </div>
  );
}
