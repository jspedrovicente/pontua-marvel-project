import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '../../assets/svgs/dashboard.svg'
import PerfilIcon from '../../assets/svgs/perfil.svg'
import exitIcon from '../../assets/svgs/exit.svg'
import pontuaIcon from '../../assets/svgs/pontua.svg'
import { Link } from 'react-router-dom';

import "./menu.css"

function Menu() {
    const drawerWidth = 240;
    
    return (
                
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
                >
                    <List>
                    <ListItem >
                            <ListItemButton className='logoButton'>
                                <ListItemIcon>
            <img className='homeLogoCss' src={pontuaIcon} alt="" />
                                </ListItemIcon>
                    </ListItemButton>
                    </ListItem>
                    </List>
        <List>
            <ListItem key={'Home'} disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                    <img src={DashboardIcon} alt="Home" />
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </ListItem>
                        
            <ListItem key={'Perfil'} disablePadding>
              <ListItemButton component={Link} to="/profile">
                <ListItemIcon>
                    <img src={PerfilIcon} alt="Perfil" />
                </ListItemIcon>
                <ListItemText primary={'Perfil'} />
              </ListItemButton>
            </ListItem>
        </List>
                    
                    
        <List>
            <ListItem key={'Sair'} disablePadding>
                  <ListItemButton component={Link} to="/login">
                <ListItemIcon>
                  <img src={exitIcon} alt="Sair" />
                </ListItemIcon>
                <ListItemText primary={'Sair'} />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
        
    )

}

export default Menu;