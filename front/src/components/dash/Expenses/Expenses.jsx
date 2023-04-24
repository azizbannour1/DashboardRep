import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './expenses.css';
const Expenses = () => {
  return (
    <div className='container-expenses'>
        <div className='arrow-down'> <ArrowDownwardIcon/></div>
        <div className='expenses-input'>Expenses</div>
        <div className='expenses-sum'>50£</div>
    </div>
  )
}

export default Expenses