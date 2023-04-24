import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './profit.css'; 
import paperplane from '../../../assets/paperplane.png';

const data = [
  {
    name: 'Jan',
    pv: 5000,
  },
  {
    name: 'Fe',
    pv: 3500,
  },
  {
    name: 'Ma',
    pv: 9800,
  },
];


const Profit = () => {
  return (
    <div className='container-profit'>
      <div className='paper-plane'> <img src={paperplane} alt=''style={{ height: '20px', width: '20px' }} /> </div>
      <div className='profit-input'>Profit</div>
      <div className='profit-chart'>
        <LineChart width={150} height={75} data={data}>
          <Line type="monotone" dataKey="pv" stroke="#DFC729" strokeWidth={2} />
          <XAxis dataKey="name" axisLine={false} tickLine={false}  tick={ ({ x, y, payload }) => (
          <text x={x} y={y} dy={12}  fill="#383E41" fontSize={15} textAnchor="middle"  > 
          {payload.value} 
          </text>  
      )  }
    />
        </LineChart>
      </div>
    </div>
  )
}

export default Profit