import { Grid, Typography } from '@mui/material'
import { StarOutline as StarOutlineIcon } from '@mui/icons-material';

const NothingSelectedView = ({ children, title="", bgColor="blackGray" }) => {
  return (
    <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{
      minHeight: 'calc(100vh) - 110px',
      backgroundColor: `${bgColor}.main`,
      borderRadius: 3
      }}
    >
      <Grid item xs={12}>
        <StarOutlineIcon sx={{ fontSize: 100, color: 'white' }}/>
      </Grid>
      <Grid item xs={12}>
        <Typography color='white' variant='h5'>
          Selecciona o crea una entrada
        </Typography>
      </Grid>

    </Grid>
  )
}

export default NothingSelectedView