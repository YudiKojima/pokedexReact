import { Container } from "@mui/material";
import NavBar from '../../components/NavBar'

function Profile({ pokemonData }) {
    console.log(pokemonData);
    return(
        <>
            <NavBar hideSearch={true}/>
            <Container maxWidth='md'>
                <h1>Profile Pokemon</h1>
            </Container>
        </>
    )
}

export default Profile;