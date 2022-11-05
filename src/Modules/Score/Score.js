import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { onRemove } from '../../action'
import './score.css'

const Score = () => {

  const playerData = useSelector(state => state.players);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(onRemove(id));
  }

  const playerList = playerData.length ? playerData.map(p => {
    return (
      <React.Fragment key={p.id}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Player Name: {p.name}
            </Typography>
            <br />
            <Typography variant="h5" component="div">
              Score: {p.score}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleRemove(p.id)}>Remove</Button>
          </CardActions>
        </Card>
      </React.Fragment>
    )
  }) : (<p>No score entered</p>)

  return (
    <div className='score'>
      <h3>Score</h3>
      {playerList}
    </div>
  )
}

export default Score