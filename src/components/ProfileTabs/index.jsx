import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
              <Box sx={{ paddingTop: 1, paddingBottom: 3, paddingLeft: 0}}>
                  {children}
                </Box>
      )}
    </div>
  );
}
const CustomTab = styled(Tab)(({ theme }) => ({
    textTransform: "none",
    fontFamily: 'Epilogue',
    fontWeight: 500
  }));

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
    const [heroComics, setHeroComics] = useState([])
    const [heroEvents, setHeroEvents] = useState([])
    const [heroSeries, setHeroSeries] = useState([])
    const [heroStories, setHeroStories] = useState([])
    
    
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
useEffect(() => {
    setHero(props.hero)
    setHeroComics(props.heroComics)
    setHeroEvents(props.heroEvents)
    setHeroSeries(props.heroSeries)
    setHeroStories(props.heroStories)
}, [props.hero])
    
  return (
    <Box sx={{marginTop: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{ sx: { backgroundColor: '#081B4E' } }} textColor='#081B4E'>
          <CustomTab label="Visão Geral" {...a11yProps(0)} />
          <CustomTab label="Comics" {...a11yProps(1)} />
          <CustomTab label="Eventos" {...a11yProps(2)} />
          <CustomTab label="Series" {...a11yProps(3)} />
          <CustomTab label="Historias" {...a11yProps(4)} />
        </Tabs>
      </Box>
          <CustomTabPanel value={value} index={0}>
          <Grid item sm={12} xl={12} lg={12} md={12} spacing={2}
                        sx={{
                            minHeight: 150,
                            marginBottom: 2,
                            borderRadius: 5,
                            padding: 2,
                            boxShadow: 2
                  }}>
                  <div className='heroProfileBox'>
                      <img className='heroProfileBoxImg' src={hero?.thumbnail?.path + "." + hero?.thumbnail?.extension} alt="" />
                      <div className='heroProfileInformation'>
                          
                      <h2>{hero.name}</h2>
                    <p>
                          {hero.description}
                          </p>
                      </div>
                  </div>
                  </Grid>
      </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
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
                      {heroComics.map((chosen) => (
                          <ListItem sx={{ fontFamily: 'Inter', fontWeight: 600, color: '#667085', paddingLeft: 0 }}>
                        
                              {chosen.title}
                
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
                    {heroSeries.map((chosen) => (
                        <ListItem sx={{ fontFamily: 'Inter', fontWeight: 600, color: '#667085', paddingLeft: 0 }}>
                            {chosen.title}
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
                    {heroSeries.map((chosen) => (
                        <ListItem sx={{ fontFamily: 'Inter', fontWeight: 600, color: '#667085', paddingLeft: 0 }}>
                            {chosen.title}
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
                      
                    {heroStories.map((chosen) => (
                        <ListItem sx={{ fontFamily: 'Inter', fontWeight: 600, color: '#667085', paddingLeft: 0 }}>
                            {chosen.title}
                          </ListItem>
                    ))}
                </List>
                  </Grid>
      </CustomTabPanel>
    </Box>
  );
}