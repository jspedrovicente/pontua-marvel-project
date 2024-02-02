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
import { Container, SvgIcon  } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import MarvelService from '../../services/MarvelService';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import pontuaIconWhite from '../../assets/svgs/pontuaLogoWhite.svg'
import pontuaBuilding from '../../assets/svgs/pontuaBuilding.svg'
import loginIcon from '../../assets/svgs/loginIcon.svg'
import passwordIcon from '../../assets/svgs/passwordIcon.svg'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom';
import React  from 'react';


function EsqueceuSenha() {
    const [backdropOpen, setbackDropOpen] = useState(false)
    const [currentPageHeroes, setCurrentPageHeroes] = useState([])
    const drawerWidth = 240;
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        backgroundColor: '#EAECF0',
        border: 'none',
        boxShadow: 'none'
      }));
    
    const CustomBox = styled(Container)(({ theme }) => ({
        backgroundColor: '#00113D',
        height: '100vh'
    }))
    const CustomLoginButton = styled(Button)(({ theme }) => ({
        backgroundColor: '#00113D',
        borderRadius: 10,
        padding: '10px 0px 10px',
        fontWeight: 700,
        textTransform: 'none',
        fontSize: 24,
    }))
    const LoginGrid = styled(Grid)(({ theme }) => ({
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 30px 30px 30px',
        borderRadius: 28,
        maxWidth: '380px'
    }))

    
    useEffect(() => {
    }, [])

    return (
        <CustomBox maxWidth={false} maxheight='xl'>
        <AppBar
            position="static"
            sx={{minHeight: '100px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#00113D'}}
            >
                <img src={pontuaIconWhite} alt="logomarca" style={{width: '150px', marginLeft: '6em'}}/>
        </AppBar>
            <Grid component='main' container sx={{alignItems: 'center', justifyContent: 'space-evenly'}}>
                <Grid>
                    <img src={pontuaBuilding} alt="" />
                </Grid>
                <Grid>
                    <LoginGrid container>
                        <Grid item sx={{flexDirection: 'row', display: 'flex', marginBottom: 2}} >
                        <Typography variant='h4' sx={{fontWeight: 700, color: '#081B4E'}}>
                            Recuperar senha
                        </Typography>
                        <Typography variant='h4' sx={{fontWeight: 700, color: '#F43724'}}>
                            .
                        </Typography>
                        </Grid>
                        <Typography sx={{textAlign: 'left', marginBottom: 1}} >
                        Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.
                        </Typography>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" InputProps={{ sx: { borderRadius: 3 } }} sx={{marginBottom: 3}} />
                        <CustomLoginButton variant="contained">enviar link </CustomLoginButton>

                    </LoginGrid>
                </Grid>
                
                </Grid>
        </CustomBox>
    )
}

export default EsqueceuSenha;