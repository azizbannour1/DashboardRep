import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './balance.css';
const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Balance = () => {
  return (
    <div className='container-balance'>
      <div className='balance-input'>Total Balance</div>
    <AreaChart
    width={994}
    height={280}
    data={data}
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    }}
  >
     <XAxis dataKey="name" axisLine={false} tickLine={false}  padding={{ left: 30, right: 30 }} stroke="#809FB8"  />
     <Tooltip />
    <Area type="monotone" dataKey="uv" stroke="#F1E7A1" fill="#F1E7A1" />
  </AreaChart>
  </div>
)
}

export default Balance