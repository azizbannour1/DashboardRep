import React from 'react'
import './revenue.css'; 
import StraightIcon from '@mui/icons-material/Straight';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
const Revenue = () => {
  return (
    <div className='container-revenue'>
        <div className='rev-icon'>
            <CloudUploadOutlinedIcon style={{ color: '#383E41' }} />
        </div>
        <div className='revenue-input'>
            Revenue
        </div>
        <div className='revenue-sum'>
            35,562£ 
        </div>
        <div className='revenue-increase-number'>
        <div className='revenue-increase'>
        <StraightIcon/> 
        </div>
          12.4%
        </div>

    </div>
  )
}

export default Revenue