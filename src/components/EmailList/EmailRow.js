import React from 'react'
import './emailRow.css'
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { useNavigate } from 'react-router-dom';

function EmailRow({title, subject, description, time, id}) {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate('/mail')} className='emailRow'>
        <div className="emailRow__options">
            <Checkbox/>
            <IconButton>
                <StarBorderOutlinedIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon/>
            </IconButton>
            

        </div>
        <h3 className="emailRow__title">
        {title}
        </h3>
        <div className="emailRow__message">
            <h4>{subject} - <span className='emailRow__description'>{description}</span></h4>
        </div>
        <div className="emailRow__time">{time}</div>
    </div>
  )
}

export default EmailRow