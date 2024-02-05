import Button from '@mui/material/Button';
import Menu from '../../components/Menu';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import LoadingBackdrop from '../../components/loadingBackdrop';
import React  from 'react';
import { useEffect, useState } from 'react';
import MarvelService from '../../services/MarvelService';
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import pontuaIcon from '../../assets/svgs/pontua.svg'
import { CustomHomeItem, StyledInputBase, CustomHeroPaper, CustomHeroGrid, CustomHeroInnerGrid }  from '../../Styles/index.jsx'
import { Drawer } from '@mui/material';

function Home() {
    const [page, setPage] = useState(1);
    const [maxPageCounter, setMaxPageCounter] = useState(10);
    const [backdropOpen, setbackDropOpen] = useState(true)
    const [searchText, setSearchText] = useState('');
    const [currentPageHeroes, setCurrentPageHeroes] = useState([])
    const theme = useTheme()
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'))
    const drawerWidth = matchDownMd ? '0px' : '240px';
    const [mobileSearchDrawer, setMobileSearchDrawer] = useState(false) 

    const puxarHerois = async () => {
        setbackDropOpen(true)
        const characters = await MarvelService.getAllCharacters(10);

        characters.results.forEach(async (character) => {
            const img = new Image();
            img.src = character.thumbnail.path + "." + character.thumbnail.extension;
            await img.decode();
        })
        setMaxPageCounter(Math.ceil(characters.total / 10))
        setCurrentPageHeroes(characters.results.slice(0, 10));
        setbackDropOpen(false)

    }

    const handlePageChange = async (event, value) => {
        setbackDropOpen(true)
        setPage(value);
        if (searchText === '') {
            var characters = await MarvelService.getCharacters((value - 1) * 10);
        } else {
            var characters = await MarvelService.getCharactersWithOffset(searchText, ((value - 1) * 10))
        }
        characters.forEach(async (character) => {
            const img = new Image();
            img.src = character.thumbnail.path + "." + character.thumbnail.extension;
            await img.decode()
        })
        setCurrentPageHeroes(characters)
        setbackDropOpen(false)

    }
    const reset = () => {
        setSearchText('')
        puxarHerois()
    }
    const handleSearch = async (event, value) => {
        event.preventDefault();
        setbackDropOpen(true);
        setPage(1)
        if (searchText === '') {
            puxarHerois()
        } else {
            const characters = await MarvelService.searchCharacterByName(searchText);
            characters.results.forEach(async (character) => {
                const img = new Image();
                img.src = character.thumbnail.path + "." + character.thumbnail.extension;
                await img.decode()
            })
            setMaxPageCounter(Math.ceil(characters.total / 10))
            setCurrentPageHeroes(characters.results);
        }
        
        setbackDropOpen(false)
        setMobileSearchDrawer(false)
    }

    useEffect(() => {
        puxarHerois()
    }, [])

    return (
    <Box>
        <AppBar position="static" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}` }}>
        <Toolbar sx={{placeContent: matchDownMd ? 'center' : 'left'}}>
    {matchDownMd ? (
                    <>
                    <Box
                        component="img"
                        alt=""
                        src={pontuaIcon}
                        onClick={() => reset()}/>
                    <SearchIcon sx={{color: '#747D94', position: 'absolute', right: '0', marginRight: '10px', marginBottom: '8px' }} onClick={() => setMobileSearchDrawer(true)} />
                    </>
    ):
    (   <form onSubmit = { handleSearch }>
            <Button type='submit'>
            <SearchIcon ></SearchIcon>
            </Button>
            <StyledInputBase
                placeholder="Busque um agente"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                inputProps={{ 'aria-label': 'search' }}
            />
        </form>
    )}
                    
        </Toolbar>
        </AppBar>
        <Drawer anchor='top' open={mobileSearchDrawer} onClose={() => setMobileSearchDrawer(false)}>
        <form onSubmit = { handleSearch }>
        <Button type='submit'>
            <SearchIcon />  
        </Button>
        <StyledInputBase
        placeholder="Busque um agente"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        inputProps={{ 'aria-label': 'search' }}
        />
        </form>
        </Drawer>
            <LoadingBackdrop open={backdropOpen} />
            <Menu />
            <Grid container sx={{marginLeft: drawerWidth, maxWidth: `calc(100vw - ${drawerWidth})`, flexGrow: 1}} spacing={2} component="main">
                {currentPageHeroes?.map((hero, index, array) => (
                <CustomHeroGrid key={index} item component={Link} to="/profile" state={{heroId: hero.id}}  sm={12} lg={index === array.length - 1 || index === array.length - 2 ? 6 : 3} md={6} spacing={2}>
                    <CustomHeroPaper>
                            <Grid sx={{ overflow: 'hidden', display: 'flex', alignSelf: 'center', height: '120px', width: '83px', marginLeft: '10px' }}>
                    <Box  sx={{ height: '100%', width: '100%',alignSelf: 'center', objectPosition: 'center', objectFit: 'cover', borderRadius: '10px'}}
                    component="img"
                    alt=""
                    src={hero?.thumbnail.path + "." + hero?.thumbnail.extension}
                        />
                        </Grid>
                            <CustomHeroInnerGrid>
                        <CustomHomeItem sx={{fontSize: '16px', fontWeight: '600', textAlign: 'left'}}>{hero?.name}</ CustomHomeItem>
                        <CustomHomeItem sx={{fontSize: '12px', fontWeight: '300', height: '70%', overflow: 'hidden', width: '90%', textAlign: 'left'}}>{hero?.description}</ CustomHomeItem>
                            </CustomHeroInnerGrid>

                            </CustomHeroPaper>
                </CustomHeroGrid>
                ))}
            </Grid >

            <Pagination sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px'}} count={maxPageCounter} page={page} onChange={handlePageChange} variant="outlined" shape="rounded" />
        </Box>
        
        
    )
}

export default Home;