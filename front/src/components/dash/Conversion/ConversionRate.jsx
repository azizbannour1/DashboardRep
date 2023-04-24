import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './conversionrate.css';
import StraightIcon from '@mui/icons-material/Straight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
   
  ];
const ConversionRate = () => {
  return (
    <div className='container-cr'>
        <div className='cr-title'>
          Conversion Rate
        </div>
        <div className='cr-values'>
        <div className='cr-value'>
          8.72% 
        </div>
        <div className='cr-value-2'>  12.50</div>
        <div className='cr-value-3'><ArrowDropUpIcon/></div>
        <div className='cr-chart'>
        <LineChart width={200} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke=" #DFC729"   strokeWidth={2} dot={false}  />
        </LineChart>
        </div>       
        </div>
        <div className='num-impre'>
         <div className='cr-impressions-numvisits'> 
        <div className='cr-impressions'>
           Impressions
        </div>
         <div className='cr-numvisits'>
            12.4k Visits
        </div>
        </div>
        <div className='cr-numberinc'>
         <StraightIcon/> 12.4%
        </div>
        </div>
        <div className='num-impre'>
        <div className='cr-impressions-numvisits'> 
        <div className='cr-impressions'>
           Added To cart
        </div>
        <div className='cr-numvisits'>
            32 Product in Cart
        </div>
        </div>
        <div className='cr-numberinc'>
         <StraightIcon/> 9.12%
        </div>
        </div>
        <div className='num-impre'>
        <div className='cr-impressions-numvisits'> 
        <div className='cr-impressions'>
           Checkout
        </div>
        <div className='cr-numvisits'>
            21 Product checkout
        </div>
        </div>
        <div className='cr-numberinc'>
         <StraightIcon/> 12.4%
        </div>
        </div>



    </div>
  )
}

export default ConversionRate