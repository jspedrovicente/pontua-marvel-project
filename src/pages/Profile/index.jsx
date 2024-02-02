import Menu from "../../components/Menu";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProfileTabs from "../../components/ProfileTabs"
import LoadingBackdrop from '../../components/loadingBackdrop';
import React  from 'react';

import Grid from "@mui/material/Grid";
import "./profile.css"
import MarvelService from "../../services/MarvelService";

function Profile(props) {

    const location = useLocation()
    const { heroId } = location.state
    const [backdropOpen, setbackDropOpen] = useState(true)
    const [hero, setHero] = useState([])
    const [heroComics, setHeroComics] = useState([])
    const [heroEvents, setHeroEvents] = useState([])
    const [heroSeries, setHeroSeries] = useState([])
    const [heroStories, setHeroStories] = useState([])


    useEffect(() => {
        const searchHero = async () => {

            try {
                const characters = await MarvelService.getSingleCharacter(heroId);
                // const [character] = await Promise.all([
                    // await MarvelService.getSingleCharacter(heroId),
                    // await MarvelService.getCharacterComics(heroId),
                    // await MarvelService.getCharacterEvents(heroId),
                    // await MarvelService.getCharacterSeries(heroId),
                    // await MarvelService.getCharacterStories(heroId)
                // ]);
                setHero(characters[0])
                // setHeroComics(characterComics);
                // setHeroEvents(characterEvents);
                // setHeroSeries(characterSeries);
                // setHeroStories(characterStories);
                console.log(characters[0])
                // console.log(characterComics)
                // console.log(characterEvents)
                // console.log(characterSeries)
                // console.log(characterStories)
            
                setbackDropOpen(false);

            }
            catch (error) {
                console.error("Não conseguiu buscar as informações", error)
            }


        } 

        searchHero()
    }, [])

    
    return (
        <Box>
            <Menu />
            <LoadingBackdrop open={backdropOpen}/>
            <Grid spacing={2} container component="main" sx={{ flexGrow: 1 }} className='mainContent'>
                <Grid item>

                <span className="profileHeader">
                    <h2 className="profilePage">Perfil </h2>
                    <h2 className="profileCut"> / </h2>
                    <h2 className="profileName"> {hero.name}</h2>
                    </span>
                    
                <ProfileTabs hero={hero} heroComics={heroComics} heroEvents={heroEvents} heroSeries={heroSeries} heroStories={heroStories} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Profile;