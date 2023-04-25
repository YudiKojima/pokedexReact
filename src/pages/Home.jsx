import { Container, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import PokemonCard from '../components/PokemonCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {

    const [pokemons, setPokemons] = useState([]);

    const getPokemon = () => {
    let endpoints = [];
    for( let i = 1; i <= 50; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    let response = axios.all(endpoints.map((endpoint) => 
    axios.get(endpoint)))
    .then((e) => setPokemons(e))
    .catch((err) => console.log(err));
    }

    useEffect(() => {
        getPokemon();
    }, [])
    

    return(
        <div>
            <NavBar />
            <Container maxWidth='false'>
                <Grid container spacing={3} >
                    {pokemons.map((pokemon, key) => (
                        <Grid item xs={2} key={key}>
                        <PokemonCard name={pokemon.data.name} img={pokemon.data.sprites.front_default}/>      
                        </Grid>
                    ))}
            </Grid>    
            </Container>
        </div>
    )
}

export default Home