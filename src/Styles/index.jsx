import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Button, Container, Tab, Grid, InputBase } from '@mui/material';
export const CustomHomeItem = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    backgroundColor: '#EAECF0',
    border: 'none',
    boxShadow: 'none'
}));

export const CustomHeroPaper = styled(Paper)(({ theme }) => ({
    height: 150,
    borderRadius: 3,
    backgroundColor: '#EAECF0',
    display: 'flex',
    flexDirection: 'row'
}));
export const CustomHeroGrid = styled(Grid)(({ theme }) => ({
    height: 150,
    marginBottom: 2,
    textDecoration: 'none',
    width: '100%' 
}));
export const CustomHeroInnerGrid = styled(Grid)(({ theme }) => ({
  maxHeight: 150,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  width: '100%',
  marginTop: '5px',
  marginBottom: '5px'
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const CustomInitialPageBox = styled(Container)(({ theme }) => ({
  backgroundColor: '#00113D',
  height: '100vh'
}))
export const CustomInitialPageButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#00113D',
  borderRadius: 10,
  padding: '10px 0px 10px',
  fontWeight: 700,
  textTransform: 'none',
  fontSize: 24,
}))
export const InitialPageGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  padding: '40px 30px 30px 30px',
  borderRadius: 28,
  maxWidth: '380px',
  minHeight: '430px'
}))

export const CustomTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontFamily: 'Epilogue',
  fontWeight: 500
}));
export const CustomMobileTabs = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontFamily: 'Epilogue',
  fontWeight: 500,
  p: 0,
  minWidth: '50px'
}));