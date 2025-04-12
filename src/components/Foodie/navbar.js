import React, { useState } from 'react'
import Logo from '../Assests/Logo.svg';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { List, Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentBankRounded";
import PhoneroundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import './navbar.css'

const Navbar = () => {
    const [openmenu, setopenmenu] = useState(false);
    const menuOption = [
        {
            text:"Home",
            icon:<HomeIcon/>,
        },

        {
            text:"About",
            icon:<InfoIcon/>,
        },

        {
            text:"Testimonials",
            icon:<CommentRoundedIcon/>,
        },

        {
            text:"Contact",
            icon:<PhoneroundedIcon/>,
        },

        {
            text:"Cart",
            icon:<ShoppingCartRoundedIcon/>,
        }
    ]




  return (

    <nav>
        <div className='nav-logo-container'>
            <img src={Logo} alt=""></img>
        </div>
        <div className='navbar-link-container'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Testimonials</a>
            <a href="">Contact</a>
            <a href=""><BsCart2 className='navbar-cart-icon'/></a>
            <button className="primary-button">Bookings Now</button>
        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setopenmenu(true)} />
        </div>
        <Drawer open={openmenu} onClose={()=>{setopenmenu(false)}} anchor='right'>
            <Box sx={{width:250}} role="presentation" onClick={()=>{setopenmenu(false)}} onKeyDown={()=>{setopenmenu(false)}}>
            <List>
            {menuOption.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
            </Box>
        </Drawer>
        
    </nav>

  )
}

export default Navbar