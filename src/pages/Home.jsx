import { Container, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import PokemonCard from '../components/PokemonCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Load from '../components/Load';

function Home() {

    const [pokemons, setPokemons] = useState([]);

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
    

    return(
        <div>
            <NavBar findPokemon={findPokemon} />
            <Container maxWidth='false'>
                <Grid container spacing={3} >
                    {pokemons.length === 0 ? <Load /> : 
                        pokemons.map((pokemon, key) => (
                            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                            <PokemonCard name={pokemon.data.name} 
                            img={pokemon.data.sprites.front_default}
                            types={pokemon.data.types}
                            abilities={pokemon.data.abilities}
                            />      
                            </Grid>
                        ))
                    }
                    
            </Grid>    
            </Container>
        </div>
    )
}

export default Home