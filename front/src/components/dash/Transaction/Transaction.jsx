import React from 'react'
import StraightIcon from '@mui/icons-material/Straight';
import './transaction.css';
import Vector from '../../../assets/Vector.png';

const Transaction = () => {
  return (
    <div className='container-transaction'>
        <div className='align-transaction'>
        <div className='trending-transaction'>  <img src={Vector} alt=''style={{ height: '20px', width: '20px' }}  /></div>
        <div className='transaction-plus'>+12.5</div>
        <div className='increase'> <StraightIcon style={{ color: '#DFC729' }}   /></div>
        </div>
    <div className='transaction-input'>Transaction</div>
    <div className='transaction-sum'>200£</div>

    </div>  )
}

export default Transaction