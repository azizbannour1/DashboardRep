import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import './salesright.css';
import StraightIcon from '@mui/icons-material/Straight';


const SalesRight = () => {
  return (
    <div className='container-sales-right'>
        <div className='align-desc-right'>
        <div className='trending-sales-right'> <TrendingUpIcon  /> </div>
         <div className='sales-right-plus'>+12.25</div>
         <div className='increase-right'> <StraightIcon style={{ color: '#DFC729' }}   /></div>
        </div>
    <div className='sales-right-input'>Sales</div>
    <div className='sales-right-sum'>4500£</div>

    </div>
  )
}

export default SalesRight