import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { handleAbility, handleTypes } from '../../utils';

export default function PokemonCard({ name, img, types, abilities }) {

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#f2f2f2', cursor: 'pointer'}} >
      <CardActionArea>
      <CardMedia
        sx={{ height: 200 }}
        image={img}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontWeight='bold'>
          {name}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          Type: {handleTypes(types)}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          Ability: {handleAbility(abilities)}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}