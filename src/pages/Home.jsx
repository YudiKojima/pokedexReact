import { Container, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import PokemonCard from '../components/PokemonCard';

function Home() {
    return(
        <div>
            <NavBar />
            <Container maxWidth='false'>
                <Grid container>
                <Grid item xs={3}>
                    <PokemonCard />      
                </Grid>
                <Grid item xs={3}>
                    <PokemonCard />      
                </Grid>
                <Grid item xs={3}>
                    <PokemonCard />      
                </Grid>
                <Grid item xs={3}>
                    <PokemonCard />      
                </Grid>
            </Grid>    
            </Container>
        </div>
    )
}

export default Home