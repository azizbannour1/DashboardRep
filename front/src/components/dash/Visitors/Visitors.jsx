import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './visitors.css'; 
import StraightIcon from '@mui/icons-material/Straight';
const data = [
  {
    name: 'Mo',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tu',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'We',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Th',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fr',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sa',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  }
  
];


const Visitors = () => {
  return (
    <div className='container-visitors'>
    <div className='text-visitors'> 
    <div className='chart-title'>
      New Visitors
    </div>  
    <div className='chart-stat'>
     +12% 
    </div>
    <div className='plus'>
    <StraightIcon style={{ color: '#DFC729' }}   />
    </div>
    </div>
      <AreaChart
        width={500}
        height={221}
        data={data}
        margin={{
          top: 10,
          right: 20,
          left: 20,
          bottom: 0,
        }}
      >
        
     <XAxis dataKey="name" axisLine={false} tickLine={false}  tick={ ({ x, y, payload }) => (
      <text
        x={x}
        y={y}
        dy={16}
        fill="#383E41"
        fontSize={15}
        textAnchor="middle" 
        > 
        {payload.value} </text>  
        )  }
    />
         <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#F1E7A1" fill="#F1E7A1" />
        <CartesianGrid stroke="transparent" />
      </AreaChart>
      </div>
  );
};

export default Visitors

