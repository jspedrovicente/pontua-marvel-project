import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import PagesOutlinedIcon from '@mui/icons-material/PagesOutlined';
import Face6OutlinedIcon from '@mui/icons-material/Face6Outlined';
import { CustomTab, CustomMobileTabs } from '../../Styles';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Grid container
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      sx={{ width: '95%', minWidth: '95%', textAlign: matchDownMd ? '-webkit-center' : 'left'}}
    >
      {value === index && (
        <Box sx={{ paddingTop: 1, paddingBottom: 3, paddingLeft: 0, width: '95%', minWidth: '95%', textAlign: matchDownMd ? '-webkit-center' : 'left'}}>
          {children}
        </Box>
      )}
    </Grid>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
    const [value, setValue] = React.useState(0);
    const [hero, setHero] = React.useState([])
    const theme = useTheme()
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'))
    
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
useEffect(() => {
    setHero(props.hero)
}, [props.hero])
  
  return (
    <Grid container sx={{marginTop: 4 }}>
      <Grid container sx={{ borderBottom: 1, borderColor: 'divider', placeContent: matchDownMd ? 'center' : 'left'}} md={12} lg={12} xs={12}>

          {matchDownMd ? (
            <Tabs value={value} onChange={handleChange} md={12} aria-label="basic tabs example" TabIndicatorProps={{ sx: { backgroundColor: '#081B4E' } }} textColor='#081B4E'>
            
            <CustomMobileTabs icon={<Face6OutlinedIcon />} {...a11yProps(0)} />
            <CustomMobileTabs icon={<PagesOutlinedIcon />} {...a11yProps(1)} />
            <CustomMobileTabs icon={<LocalActivityOutlinedIcon />} {...a11yProps(2)} />
            <CustomMobileTabs icon={<MovieCreationOutlinedIcon />} {...a11yProps(3)} />
            <CustomMobileTabs icon={<AutoStoriesOutlinedIcon />} {...a11yProps(4)} />
            </Tabs>
            
            ): (
              <Tabs value={value} onChange={handleChange} md={12} aria-label="basic tabs example" TabIndicatorProps={{ sx: { backgroundColor: '#081B4E' } }} textColor='#081B4E'>
            
                <CustomTab  label="Visão Geral" {...a11yProps(0)} />
                      <CustomTab label="Comics" {...a11yProps(1)} />
                      <CustomTab label="Eventos" {...a11yProps(2)} />
                      <CustomTab  label="Series" {...a11yProps(3)} />
                      <CustomTab label="Historias" {...a11yProps(4)} />
            </ Tabs>
            )}
      </Grid>
          <CustomTabPanel value={value} index={0}>
          <Grid spacing={2}
            sx={{
            minHeight: 150,
            marginBottom: 2,
            borderRadius: 5,
            padding: 2,
            boxShadow: 2,
            width: '90%'
          }}>
          <Grid item lg={12} sx={{ display: 'flex', margin: '10px 0px', width: '100%' }}>
            <Box
              sx={{height: '90px', width: '90px', borderRadius: '50%'}}
              component="img"
              alt=""
              src={hero?.thumbnail?.path + "." + hero?.thumbnail?.extension} />
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px' }}>
              
              <Typography variant='h5' sx={{margin: '0 0 5px 0', fontWeight: '700'}}>
              {hero.name}
              </Typography>
              <Typography variant='p' sx={{color: '#777777', fontWeight: '600', textAlign: 'left'}}>
              {hero.description}
              </Typography>
            </Grid>
          </Grid>
          </Grid>
      </CustomTabPanel >
          <CustomTabPanel value={value} index={1} sm={12} xl={12} lg={12} md={12}>
          <Grid item sm={12} xl={12} lg={12} md={12} spacing={2}
                        sx={{
                            padding: 2,
                  }}>
                  <List dense="dense" sx={{ listStyleType: 'disc', '& .MuiListItem-root': {
  display: 'list-item',
                  }
          }}>   
                    {hero?.comics?.items.map((each) => (
                        <ListItem sx={{ fontFamily: 'Inter', fontWeight: 600, color: '#667085', paddingLeft: 0 }}>  
                            {each.name}
                        </ListItem>
                    ))}
                      </List>
                  </Grid>
      </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
          <Grid item sm={12} xl={12} lg={12} md={12} spacing={2}
                        sx={{
                            padding: 2,
                  }}>
                  <List dense="dense" sx={{ listStyleType: 'disc', '& .MuiListItem-root': {
                    display: 'list-item',
                  }
          }}>   
                    {hero?.events?.items.map((each) => (
                        <ListItem sx={{ fontFamily: 'Inter', fontWeight: 600, color: '#667085', paddingLeft: 0 }}>  
                            {each.name}
                        </ListItem>
                    ))}
                    </List>
            </Grid>
      </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Grid item sm={12} xl={12} lg={12} md={12} spacing={2}
                        sx={{
                            padding: 2,
                  }}>
                  <List dense="dense" sx={{ listStyleType: 'disc', '& .MuiListItem-root': {
                    display: 'list-item',
                  }
                  }}>   
                    {hero?.series?.items.map((each) => (
                        <ListItem sx={{ fontFamily: 'Inter', fontWeight: 600, color: '#667085', paddingLeft: 0 }}>  
                            {each.name}
                        </ListItem>
                    ))}
                    </List>
            </Grid>
      </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
          <Grid item sm={12} xl={12} lg={12} md={12} spacing={2}
                        sx={{
                            padding: 2,
                  }}>
                  <List dense="dense" sx={{ listStyleType: 'disc', '& .MuiListItem-root': {
                    display: 'list-item'}
                  }}>
                    {hero?.stories?.items.map((each) => (
                        <ListItem sx={{ fontFamily: 'Inter', fontWeight: 600, color: '#667085', paddingLeft: 0 }}>  
                            {each.name}
                    </ListItem>
                    ))}
                </List>
                  </Grid>
      </CustomTabPanel>
    </Grid>
  );
}