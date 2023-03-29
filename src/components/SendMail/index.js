import React from 'react'
import './style.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function sendMail() {
  return (
    <div className='sendMail'>
        <div className="sendMail__header">
            <h3>New message</h3>
            <CloseIcon className="sendMail__close"/>
        </div>
        <form>
            <input type="text" placeholder="To"/>
            <input type="text" placeholder="Subject"/>
            <input type="text" className='sendMail__message'/>
            <div className="sendMail__option">
                <Button className='sendMail__button'
                variant='contained'
                color='primary'
                type='submit'
                >Send</Button>
            </div>
        </form>
    </div>
  )
}

export default sendMail