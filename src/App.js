import React from 'react';
import { useEffect, useState } from 'react';
import { 
  Container,
  TextField,
  Avatar,
  Paper,
  Grid,
  Typography
} from '@mui/material';

const API_URL = 'https://pokeapi.co/api/v2/pokemon'

const getUsefulPropertiesOfPokemon = (data) => {
  return {
    "id": data.id,
    "name": data.name[0].toUpperCase() + data.name.substring(1),
    "sprite_front": data.sprites.front_default,
    "sprite_back": data.sprites.back_default,
    "abilities": data.abilities,
    "weight": data.weight,
    "heigth": data.heigth
  }
}

const App = () => {
  const [ pokemon, setPokemon ] = useState({})
  
  useEffect(() => {
    searchPokemon('nidorino')
  }, []);

  const searchPokemon = async (pokemonName) => {
    const response = await fetch(`${API_URL}/${pokemonName}`)
    const data = await response.json()
  
    setPokemon(getUsefulPropertiesOfPokemon(data))
  }

  return (
    <Container fluid>
      <TextField id="pokemonNameInput" label="Pokemon Name" variant="outlined" />
      { pokemon? (
        <Paper>
          <Typography align="center" variant="h1">{ pokemon["name"] }</Typography>
          <Grid container display="flex" justifyContent="center">
            <Grid item xs={2}>
              <Avatar
                alt="front"
                src={ pokemon["sprite_front"] }
                sx={{ width: 200, height: 200 }}
              />
            </Grid>
            <Grid item xs={2}>
              <Avatar
                alt="back"
                src={ pokemon["sprite_back"] }
                sx={{ width: 200, height: 200 }}
              />
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <h1>Couldn't find any pokemon with this name</h1>
      )}
    </Container>
  );
}

export default App;
