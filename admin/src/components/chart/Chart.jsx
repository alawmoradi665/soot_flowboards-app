import "./chart.css";
import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    Legend,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

const data = [
    {
      name: 'October',
      sales: 4000,
    },
    {
      name: 'November',
      sales: 3000,
    },
    {
      name: 'December',
      sales: 2000,
    },
    {
      name: 'January',
      sales: 2780,
    },
];

export default function Chart() {
    return (
        <div className="chart">
            <h3 className="chartTitle">Sales Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name"/>
                    <Line type="monotone" dataKey="sales" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
