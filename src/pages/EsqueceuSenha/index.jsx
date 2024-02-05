import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import pontuaIconWhite from '../../assets/svgs/pontuaLogoWhite.svg'
import pontuaBuilding from '../../assets/svgs/pontuaBuilding.svg'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom';
import React from 'react';
import { InitialPageGrid, CustomInitialPageBox, CustomInitialPageButton } from '../../Styles';
function EsqueceuSenha() {
    const [emailSent, setEmailSent] = useState(true);

    const handleSendEmail = (event) => {
        event.preventDefault()
        setEmailSent(false);
    }
    return (
        <CustomInitialPageBox maxWidth={false} maxheight='xl'>
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
                    {emailSent ? (
                    <form onSubmit={(event) => handleSendEmail(event)}>
                    <InitialPageGrid container>
                        <Grid item sx={{flexDirection: 'row', display: 'flex', marginBottom: 2}} >
                        <Typography variant='h4' sx={{fontWeight: 700, color: '#081B4E'}}>
                            Recuperar senha
                        <Typography variant='p' sx={{fontWeight: 700, color: '#F43724'}}>
                            .
                        </Typography>
                        </Typography>
                        </Grid>
                        <Typography sx={{textAlign: 'left', marginBottom: 1}} >
                        Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.
                            </Typography>
                        <TextField id="forgottenEmail" label="Informe seu email" variant="outlined" InputProps={{ sx: { borderRadius: 3 }, endAdornment: <InputAdornment position="end">@</InputAdornment> }} sx={{marginBottom: 3}} />
                        <CustomInitialPageButton variant="contained" onClick={(event) => handleSendEmail(event)}>enviar link </CustomInitialPageButton>

                    </InitialPageGrid>
                    </form>
                    ) : (
                        <InitialPageGrid container>
                        <Grid item sx={{flexDirection: 'row', display: 'flex', marginBottom: 2}} >
                        <Typography variant='h4' sx={{fontWeight: 700, color: '#081B4E'}}>
                            Tudo certo
                        </Typography>
                        <Typography variant='h4' sx={{fontWeight: 700, color: '#F43724'}}>
                            ;)
                        </Typography>
                        </Grid>
                        <Typography sx={{ textAlign: 'left', marginBottom: 1 }} >
                            Foi enviado um e-mail para você com instruções de como redefinir a sua senha.
                        </Typography>
                        <CustomInitialPageButton variant="contained" component={Link} to="/login">voltar para o login</CustomInitialPageButton>
                    </InitialPageGrid>
                            )}
                </Grid>
                </Grid>
        </CustomInitialPageBox>
    )
}

export default EsqueceuSenha;