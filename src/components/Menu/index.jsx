import React from 'react';
import { Button, Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import DashboardIcon from '../../assets/svgs/dashboard.svg'
import PerfilIcon from '../../assets/svgs/perfil.svg'
import exitIcon from '../../assets/svgs/exit.svg'
import pontuaIcon from '../../assets/svgs/pontua.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigate } from 'react-router-dom';
function Menu() {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'))
  const drawerWidth = matchDownMd ? '0px' : '240px';
  const [mobileDrawer, setmobileDrawer] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setmobileDrawer(open)
  };


  const logOut = () => {
    localStorage.removeItem('accessToken')
    return <Navigate to="/login" replace />
  }
  const list = () => (
    <Box
      sx={{ width: 240 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
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
              <ListItemButton component={Link} to="/selecionar-agente">
                <ListItemIcon>
                    <img src={PerfilIcon} alt="Perfil" />
                </ListItemIcon>
                <ListItemText primary={'Perfil'} />
              </ListItemButton>
            </ListItem>
        </List>
                    
                    
        <List>
            <ListItem key={'Sair'} disablePadding>
                  <ListItemButton component={Link} to="/login" onClick={() => logOut()}>
                <ListItemIcon>
                  <img src={exitIcon} alt="Sair" />
                </ListItemIcon>
                <ListItemText primary={'Sair'} />
              </ListItemButton>
            </ListItem>
        </List>
    </Box>
  );
  return (
    matchDownMd ? ( 
      <div>
        <React.Fragment>
          <Button sx={{position: 'absolute', top: 0, left: 0, marginTop: '5px'}} onClick={toggleDrawer(true)}><MenuIcon /></Button>
          <Drawer
            anchor='left'
            open={mobileDrawer}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
    </div>
    ): (
      <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant={'permanent'}
          anchor="left">
          {list()}
      </Drawer>
      
    )
    )

}

export default Menu;