import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import { alpha, styled } from '@mui/material/styles';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function NavBar({ findPokemon, hideSearch}) {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  }

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '2em' }}>
      <AppBar position="static" sx={{backgroundColor: '#222'}}>
        <Toolbar>
          <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
            <Box component='img' src='/assets/pokemon-logo.png' height='3em' sx={{cursor:'pointer'}} onClick={handleHome}/>
            {hideSearch === true ? null : 
            <>
            <Typography fontWeight='bold'>List of '1000' Pokemons</Typography>
            <Search onChange={(e) => findPokemon(e.target.value)}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search> 
            </>
            }
            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}