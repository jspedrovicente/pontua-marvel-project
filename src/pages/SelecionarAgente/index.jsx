import { Grid, Box, AppBar, TextField, Typography, Autocomplete } from '@mui/material';
import LoadingBackdrop from '../../components/loadingBackdrop';
import MarvelService from '../../services/MarvelService';
import CheckIcon from '@mui/icons-material/Check';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import pontuaIconWhite from '../../assets/svgs/pontuaLogoWhite.svg'
import pontuaBuilding from '../../assets/svgs/pontuaBuilding.svg'
import loginIcon from '../../assets/svgs/loginIcon.svg'
import React from 'react';
import { ToastContainer } from "react-toastify";
import { Link } from 'react-router-dom';
import { CustomInitialPageBox, CustomInitialPageButton, InitialPageGrid}  from '../../Styles/index.jsx'

const SelecionarAgente = () => {

    const [backdropOpen, setbackDropOpen] = useState(false)
    const [chosenAgent, setChosenAgent] = useState([]);
    const [typedAgent, setTypedAgent] = useState('')
    const [marvelHeroes, setMarvelHeroes] = useState([])

    const puxarHerois = async () => {
        setbackDropOpen(true)
        const characters = await MarvelService.getAllCharacters(100);
        characters.results.forEach(async (character) => {
            const img = new Image();
            img.src = character.thumbnail.path + "." + character.thumbnail.extension;
            await img.decode();
        })
        setMarvelHeroes(characters.results)
        setbackDropOpen(false)


    }

    useEffect(() => {
        puxarHerois()
    }, [])

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (typedAgent === '') {
                const characters = await MarvelService.getAllCharacters(100);
                characters.results.forEach(async (character) => {
                    const img = new Image();
                    img.src = character.thumbnail.path + "." + character.thumbnail.extension;
                    await img.decode();
                })
                setMarvelHeroes(characters.results)
            } else {
                var characters = await MarvelService.searchCharacterByName(typedAgent)
                console.log(characters)
                characters.forEach(async (character) => {
                    const img = new Image();
                    img.src = character.thumbnail.path + "." + character.thumbnail.extension;
                    await img.decode();
                })
                setMarvelHeroes(characters)
            }
        }, 600)
        return () => clearTimeout(delayDebounceFn)
      }, [typedAgent])
    return (
        <CustomInitialPageBox maxWidth={false} maxheight='xl'>
            <LoadingBackdrop open={backdropOpen}/>
            <ToastContainer />
            <AppBar
            position="static"
            sx={{ minHeight: '100px', display: 'flex', alignItems: {xs: 'center', sm: 'center', md: 'flex-start'}, justifyContent: 'center', backgroundColor: '#00113D'}}
            >
                <Box
                sx={{ width: '150px', marginLeft: {sm: '0', md: '6em'}}}
                component="img"
                alt="The house from the offer."
                src={pontuaIconWhite}
                />
        </AppBar>
            <Grid component='main' container sx={{alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Grid sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
                    <Box
                    sx={{ width: {md: '450px', lg: '100%'}}}
                    component="img"
                    alt="The house from the offer."
                    src={pontuaBuilding}
                    />
                </Grid>
                <Grid>
                    <InitialPageGrid container>
                        <Grid item sx={{flexDirection: 'row', display: 'flex', marginBottom: 2}} >
                        <Typography variant='h4' sx={{fontWeight: 700, color: '#081B4E', textAlign: 'start'}}>
                            Selecione o seu agente mais legal
                        <Typography variant='p' sx={{fontWeight: 700, color: '#F43724'}}>
                            .
                        </Typography>
                        </Typography>
                        </Grid>
                        <Typography sx={{textAlign: 'left', marginBottom: 1}} >
                        Tenha a visão completa do seu agente
                        </Typography>
                        <Autocomplete
                            sx={{marginBottom: '2em'}}
                            freeSolo
                            id="free-solo-2-demo"
                            options={marvelHeroes}
                            getOptionLabel={(option) => option.name}
                            onChange={(event, value) => setChosenAgent(value)}
                            renderOption={(props,  option) => (
                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    
                                        <img
                                        loading="lazy"
                                            width="20px"
                                            height="20px"
                                        srcSet={option.thumbnail.path + "." + option.thumbnail.extension}
                                            alt="Nada"
                                            style={{ borderRadius: '50px' }}
                                        />
                                    {option.name}
                                    {chosenAgent?.name === option.name && <CheckIcon sx={{position: 'absolute', right: '0'}}></CheckIcon>}
        </Box>)}
                            renderInput={(params, option) => (
                                <Box>
          <TextField
            {...params}
            label="Selecione um agente"
            InputProps={{
                ...params.InputProps,
                startAdornment: 
                    chosenAgent?.thumbnail ? (
                        
                        <img
                        loading="lazy"
                        width="20px"
                        height="20px"
                        src={ chosenAgent?.thumbnail?.path + "." + chosenAgent?.thumbnail?.extension}
                        alt="Nada"
                        style={{ borderRadius: '50px' }}
                        />
                        ) : (<p></p>)
            }}
            onChange={(e) => setTypedAgent(e.target.value)}
            />
            </Box>
        )}
      />
        <CustomInitialPageButton disabled={!chosenAgent} type='button' variant="contained" component={Link} to="/profile" state={{heroId: chosenAgent?.id}}>entrar <img style={{ marginLeft: '10px' }} src={loginIcon} alt="" /></CustomInitialPageButton>
        </InitialPageGrid>
                </Grid>
                </Grid>
        </CustomInitialPageBox>
    )
}

export default SelecionarAgente;