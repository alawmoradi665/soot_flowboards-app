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
      sales: 40,
    },
    {
      name: 'November',
      sales: 35,
    },
    {
      name: 'December',
      sales: 70,
    },
    {
      name: 'January',
      sales: 64,
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
                    <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
