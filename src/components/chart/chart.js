import React from 'react';

const Line = require("react-chartjs").Line;
const Pie = require("react-chartjs").Doughnut;

export const LineChart = props => (
    <div className="chart-entity">
       <Line data={props.data.data} options={props.data.options} width={props.data.width} height={props.data.height} />
    </div>
)

export const PieChart = props => (
    <div className="chart-entity">
       <Pie data={props.data.data} options={props.data.options} width={props.data.width} height={props.data.height} />
    </div>
)