import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { typeHandle } from '../../utils';

export default function PokemonCard({name, image, types}) {

  return (
    <Card sx={{ maxWidth: 345, marginRight:"1em", marginBottom:"1em" }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: "auto", paddingTop: "100%" }}
          image={image}
          title={name}
        />
        <CardContent>
        <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: "clamp(0.5rem, 2vw, 1rem)",
              lineHeight: "1.2",
              overflow: "hidden",
            }}
          >
            {name}
          </Typography>

          <Typography gutterBottom variant="caption" component="div">
            {typeHandle(types)}
          </Typography>
        </CardContent>
       
    </CardActionArea>
    </Card>
    
  );
}