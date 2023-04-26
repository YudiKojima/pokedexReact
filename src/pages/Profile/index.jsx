import { Box, Chip, Container, Divider, Paper, Typography } from "@mui/material";
import NavBar from '../../components/NavBar'
import PokemonTable from "./PokemonTable";

function Profile({ pokemonData }) {
    return(
        <>
            <NavBar hideSearch={true}/>
            <Container maxWidth='md'>
                <Paper elevation={3}>
                <Box p={5} display='flex' flexDirection='column' alignItems='center'>
                    <Typography variant="h5"> {pokemonData.name} </Typography>
                    <Box display='flex' minWidth='100%' alignItems='center' m={5}>
                        <Typography variant="caption">Default: </Typography>
                        <Box component='img' src={pokemonData.sprites.front_default} width='70%' height='70%'/>
                        <Box component='img' src={pokemonData.sprites.back_default} width='50%' height='50%'/>
                        <Typography variant="caption">Shiny: </Typography>
                        <Box component='img' src={pokemonData.sprites.front_shiny} width='70%' height='70%'/>
                        <Box component='img' src={pokemonData.sprites.back_shiny} width='50%' height='50%'/>
                    </Box>
                    <PokemonTable pokemonData={pokemonData} />
                    <Box width='100%' m={5} p={1}>
                       <Divider>Moves</Divider>
                       <Box textAlign='center' p={1}>  
                        {pokemonData.moves.map((moveData, key) => (
                        <Chip key={key} sx={{ m:'5px'}} label={moveData.move.name}/>
                        ))}
                        </Box>
                    </Box>
                </Box>
                </Paper>
            </Container>
        </>
    )
}

export default Profile;