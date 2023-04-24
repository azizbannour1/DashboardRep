import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import './sales.css';
import StraightIcon from '@mui/icons-material/Straight';

const Sales = () => {
  return (
    <div className='container-sales'>
        <div className='align-desc'>
        <div className='trending-sales'> <TrendingUpIcon  /> </div>
         <div className='sales-plus'>+12.25</div>
         <div className='increase'> <StraightIcon style={{ color: '#DFC729' }}   /></div>
        </div>
    <div className='sales-input'>Sales</div>
    <div className='sales-sum'>4500£</div>

    </div>
  )
}

export default Sales