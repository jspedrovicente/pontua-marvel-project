import Menu from "../../components/Menu";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProfileTabs from "../../components/ProfileTabs"
import LoadingBackdrop from '../../components/loadingBackdrop';
import React from 'react';
import { useTheme, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import MarvelService from "../../services/MarvelService";

function Profile(props) {

    const location = useLocation()
    const { heroId } = location.state
    const [backdropOpen, setbackDropOpen] = useState(true)
    const [hero, setHero] = useState([])
    const theme = useTheme()
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'))
    const drawerWidth = matchDownMd ? '0px' : '240px';
      

    useEffect(() => {
        const searchHero = async () => {

            try {
                const characters = await MarvelService.getSingleCharacter(heroId);
                setHero(characters[0])
                setbackDropOpen(false);
            }
            catch (error) {
                console.error("Não conseguiu buscar as informações", error)
            }


        } 

        searchHero()
    }, [heroId])

    
    return (
        <Box>
            <Menu />
            <LoadingBackdrop open={backdropOpen}/>
            <Grid spacing={2} container component="main" sx={{marginLeft: drawerWidth, width: `calc(100vw - ${drawerWidth})`, flexGrow: 1}} >
                <Grid item lg={12} sx={{width: '100%'}}>
                    <Grid sx={{marginTop: '10px', display: 'flex', placeContent: matchDownMd ? 'center' : 'left'}}>

                    <Typography variant={matchDownMd ? "p" : "h5" } sx={{color: '#081B4E', fontWeight: '700', display: 'flex', alignContent: 'center', marginTop:  matchDownMd ? '5px' : 0}}>
                        Perfil
                        <Typography variant={matchDownMd ? "p" : "h5" } sx={{color: '#F43724', paddingRight: '5px', paddingLeft: '5px'}}>/</Typography>
                        <Typography variant={matchDownMd ? "p" : "h5" } sx={{color: '#777777', fontWeight: '300'}}>{hero.name}</Typography>
                    </Typography>
                    </Grid>
                    
                <ProfileTabs hero={hero} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Profile;