import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pontuaIconWhite from '../../assets/svgs/pontuaLogoWhite.svg'
import pontuaBuilding from '../../assets/svgs/pontuaBuilding.svg'
import passwordIcon from '../../assets/svgs/passwordIcon.svg'
import loginIcon from '../../assets/svgs/loginIcon.svg'
import { InputAdornment, TextField, Typography, Grid, Box, AppBar } from '@mui/material';
import MockDBService from '../../services/mockDBService';
import { ToastContainer, toast } from "react-toastify";
import Visibility from '@mui/icons-material/VisibilityOutlined';
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';
import { IconButton } from '@mui/material';
import { CustomInitialPageBox, CustomInitialPageButton, InitialPageGrid}  from '../../Styles/index.jsx'
  
const notifyError = (msg) => toast.error (msg);
const notifySuccess = (msg) => toast.success (msg);

const Login = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    async function handleSubmit (e) {
        e.preventDefault()
        const log = await MockDBService.login(formData)
        console.log(log)
        if (log?.accessToken) {
            window.localStorage.setItem('accessToken', log.accessToken)
            notifySuccess(`Bem-vindo ${log?.user?.email}!`)
            setTimeout(() => {

                navigate('/selecionar-agente', { replace: true });
            }, 1500)
        } else {
            notifyError('Algo deu errado, tente novamente')
        }

    }
    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    useEffect(() => {
    }, [])

    return (
        <CustomInitialPageBox maxWidth={false} maxheight='xl'>
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
                <form onSubmit={e => handleSubmit(e)}>
                    <InitialPageGrid container>
                        <Grid item sx={{flexDirection: 'row', display: 'flex', marginBottom: 2}} >
                        <Typography variant='h4' sx={{fontWeight: 700, color: '#081B4E'}}>
                            Bem-Vindo
                        <Typography variant='p' sx={{fontWeight: 700, color: '#F43724'}}>
                            .
                        </Typography>
                        </Typography>
                        </Grid>
                        <Typography sx={{textAlign: 'left', marginBottom: 1}} >
                        informe as suas credenciais de acesso ao portal
                        </Typography>
                        <TextField id="outlined-basic" label="Email" variant="outlined" name='email'
                        InputProps={{ sx: { borderRadius: 3 }, endAdornment: <InputAdornment position="end">@</InputAdornment> }} sx={{ marginBottom: 3 }} value={formData.email} onChange={e => handleChange(e)} />
                        
                        <TextField id="outlined-basic" type={showPassword ? 'text' : 'password'} value={formData.password} label="Senha" name='password' variant="outlined" onChange={e => handleChange(e)} InputProps={{ sx: { borderRadius: 3 }, endAdornment:  <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff fontSize='small' /> : <Visibility fontSize='small'/>}
                </IconButton>
              </InputAdornment>
            }} sx={{ marginBottom: 2 }} />

                        <CustomInitialPageButton type='submit' variant="contained">entrar <img style={{ marginLeft: '10px' }} src={loginIcon} alt="" /></CustomInitialPageButton>
                            
                        <Grid item sx={{ flexDirection: 'row', display: 'flex', marginBottom: 2, justifyContent: 'end' }} >
                        <img src={passwordIcon} alt="" style={{paddingTop: '5px', paddingRight: '5px'}} />
                        <Typography component={Link} underline="none" to='/esqueceu-senha' sx={{textDecoration: 'none', fontSize: '11px', color: '#F21A05', marginTop: 1, fontWeight: 400 }}>
                        Esqueceu a senha?
                        </Typography>
                        </Grid>

                    </InitialPageGrid>
                </form>
                </Grid>
                
                </Grid>
        </CustomInitialPageBox>
    )
}

export default Login;