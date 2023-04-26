import { Box, Container, Grid } from '@mui/material';
import NavBar from '../../components/NavBar';
import PokemonCard from '../../components/PokemonCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Load from '../../components/Load';
import { useNavigate } from 'react-router-dom';

function Home({ setPokemonData }) {

    const [pokemons, setPokemons] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getPokemon();   
    }, []);

    // trazer o pokemon através da api com limite definido pelo for
    const getPokemon = () => {
    let endpoints = [];
    for (let i = 1; i <= 200; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(endpoints.map((endpoint) => 
        axios.get(endpoint)))
        .then((e) => setPokemons(e))
        .catch((err) => console.log(err));
    }

    const findPokemon = (name) => {
        let findPokemons = [];
        if (name === '') {
            getPokemon();
        }
        for (let i in pokemons){
            if (pokemons[i].data.name.includes(name)) {
                findPokemons.push(pokemons[i]);
            }
        }
        setPokemons(findPokemons);
    }

    const handleProfile = (pokemonData) => {
        setPokemonData(pokemonData);
        navigate('/profile');
    }

    return(
        <>
            <NavBar findPokemon={findPokemon}/>
            <Container maxWidth='false'>
                <Grid container spacing={3} >
                    {pokemons.length === 0 ? <Load /> : 
                        pokemons.map((pokemon, key) => (
                            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                                <Box onClick={() => handleProfile(pokemon.data)}>
                                    <PokemonCard name={pokemon.data.name} 
                                    img={pokemon.data.sprites.front_default}
                                    types={pokemon.data.types}
                                    abilities={pokemon.data.abilities}
                                    />  
                                </Box>
                            </Grid>
                        ))
                    }
                    
            </Grid>    
            </Container>
        </>
    )
}

export default Home