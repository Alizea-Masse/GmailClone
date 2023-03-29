import React from 'react'
import './style.css'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar } from '@mui/material';
function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" alt="Gmail Logo" />
        </div>
        <div className="header__middle">
          <SearchIcon />
          <input type="text" placeholder="Rechercher dans les messages" />
          <ArrowDropDownIcon className="header__inputCaret" />
        </div>
        <div className="header__right">
        <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsNoneIcon />
            </IconButton>
            <Avatar />
        </div>
    </div>
  )
}

export default Header