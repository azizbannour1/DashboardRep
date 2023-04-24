import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import './income.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const data = [
    {
      name: 'FEB',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'MAR',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'APR',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'MAY',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'JUN',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'JUL',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  
  ];
  

const Income = () => {
  return (
    <div className='income-container'>
       <div className='income-input'>Total income</div>
      <div className='income-legend'> 
       <Legend payload={[
          { value: 'Earned', type: 'circle', color: '#383E41' },
          { value: 'Forecasted', type: 'circle', color: '#EDE089' },
        ]} />
      <div className='income-dropdown'>
       6 months
      </div>
       <div className='arrow-income'>
      <ArrowDropDownIcon />
      </div>

       </div>
      <LineChart width={994} height={280} data={data}>
        <XAxis dataKey="name" axisLine={false} tickLine={false}  padding={{ left: 30, right: 30 }} stroke="#809FB8"  />
        <YAxis axisLine={false} tickLine={false} stroke="#809FB8"  />
        <Tooltip />
        
        <Line type="monotone" dataKey="pv" stroke="#EDE089" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#383E41" />
      </LineChart>
    </div>
  )
}

export default Income