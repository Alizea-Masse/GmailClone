import React from 'react'
import './style.css'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/userSlice'
function Header() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })
}

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
            <IconButton onClick={signOut}>
            <Avatar src={user?.photoUrl} alt='profil picture' />
            <h6>Logout</h6>
            </IconButton>
        </div>
    </div>
  )
}

export default Header