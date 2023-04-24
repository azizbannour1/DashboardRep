import React from 'react'
import './expensesbottom.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ExpensesBottom = () => {
  return (
    <div className='container-expenses-bottom'>
        <div className='expenses-down-input'>Expenses</div>
        <div className='expenses-down-sum'>50000£</div>
        <div className='arrow-expenses-down'> <ArrowDownwardIcon/></div>

    </div>
  )
}

export default ExpensesBottom