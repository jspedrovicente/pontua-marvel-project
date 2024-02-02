import Button from '@mui/material/Button';
import Menu from '../../components/Menu';
import axios from 'axios'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import LoadingBackdrop from '../../components/loadingBackdrop';
import React  from 'react';
import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import './home.css'
import { useEffect, useState } from 'react';
import MarvelService from '../../services/MarvelService';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


function Home() {
    const [page, setPage] = useState(1);
    const [maxPageCounter, setMaxPageCounter] = useState(10);
    const [backdropOpen, setbackDropOpen] = useState(true)
    const [marvelHeroes, setMarvelHeroes] = useState([]);
    const [currentPageHeroes, setCurrentPageHeroes] = useState([])
    const drawerWidth = 240;
    const puxarHerois = async () => {
        setbackDropOpen(true)
        const characters = await MarvelService.getAllCharacters();

        characters.results.forEach(async (character) => {
            const img = new Image();
            img.src = character.thumbnail.path + "." + character.thumbnail.extension;
            await img.decode();
        })
        setMaxPageCounter(Math.ceil(characters.total / 10))
        setMarvelHeroes(characters.results)
        setCurrentPageHeroes(characters.results.slice(0, 10));
        setbackDropOpen(false)

    }

    const handlePageChange = async (event, value) => {
        setbackDropOpen(true)
        setPage(value);
        const characters = await MarvelService.getCharacters((value - 1) * 10);

        characters.forEach(async (character) => {
            const img = new Image();
            img.src = character.thumbnail.path + "." + character.thumbnail.extension;
            await img.decode()
        })
        setCurrentPageHeroes(characters)
        setbackDropOpen(false)

    }

    const handleSearch = async (event, value) => {
        setbackDropOpen(true);
        const characters = await MarvelService.searchCharacterByName('spider');

    }
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        backgroundColor: '#EAECF0',
        border: 'none',
        boxShadow: 'none'
      }));
    
    
    useEffect(() => {
        puxarHerois()
    }, [])

    return (
        <Box>
        <AppBar
        position="static"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
                <Toolbar>
                    <SearchIcon sx={{color: '#747D94' }}></SearchIcon>
                    <input type="text" />
        </Toolbar>
        </AppBar>
            <LoadingBackdrop open={backdropOpen} />
            <Menu />
            <Grid container spacing={2} component="main" sx={{ flexGrow: 1 }} className='mainContent'>
                {currentPageHeroes.map((hero, index, array) => (

                    <Grid key={index} item component={Link} to="/profile" state={{heroId: hero.id}}  sm={12} lg={index === array.length - 1 || index === array.length - 2 ? 6 : 3} md={6} spacing={2}
                        sx={{
                            height: 150,
                            marginBottom: 2
                    }}>
                        <Paper
                        sx = {{
                            height: 150,
                            // width: index === array.length - 1 || index === array.length - 2 ? 530 : 258,
                            borderRadius: 3,
                            backgroundColor: '#EAECF0',
                            display: 'flex',
                            flexDirection: 'row'
                            }}
                        >
                        <Grid className='heroImageBox'>
                        <img className='heroImage' src={hero.thumbnail.path + "." + hero.thumbnail.extension} alt="" />
                        </Grid>
                            <Grid className='heroCard'
                                sx={{
                                    maxHeight: 150,
                                    flexDirection: 'column',
                            }}>
                                <Item className='heroTitle'>{hero.name}</Item>
                                <Item className='heroDescription'>{hero.description}</Item>
                            </Grid>

                            </Paper>
                    </Grid>
                ))}
            </Grid >

            <Pagination className='pagination' count={maxPageCounter} page={page} onChange={handlePageChange} variant="outlined" shape="rounded" />
        </Box>
        
        
    )
}

export default Home;