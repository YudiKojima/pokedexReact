import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function PokemonCard({ name, img, types, abilities }) {

  const handleTypes = () => {
    if(types[1]) {
      return types[0].type.name + ' | ' + types[1].type.name;
    }
    else {
      return types[0].type.name;
    }
  }

  const handleAbility = () => {
    if(abilities[0]) {
      return abilities[0].ability.name;
    }
    else if(abilities[1]) {
      return abilities[0].ability.name + ' | ' + abilities[1].ability.name;
    }
    else {
      return abilities[0].ability.name + ' | ' + abilities[1].ability.name + ' | ' + abilities[2].ability.name;
    }
  } 

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#f2f2f2'}} >
      <CardMedia
        sx={{ height: 200 }}
        image={img}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          Type: {handleTypes()}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          Ability: {handleAbility()}
        </Typography>
      </CardContent>
    </Card>
  );
}