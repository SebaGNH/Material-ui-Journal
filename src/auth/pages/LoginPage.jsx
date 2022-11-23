import { Link as RouterLink} from 'react-router-dom';
import {Google} from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import AuthLayout from '../layout/AuthLayout';


const LoginPage = () => {
  return (
    <AuthLayout title="Login" bgColor='primary'>
        <form>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="correo"
                type="email"
                placeholder="correo@correo.com"
                fullWidth
              ></TextField>
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
              ></TextField>
            </Grid>

            <Grid container spacing={2} sx={{my:2}}> 
              <Grid item xs={6}>
                <Button variant='contained' fullWidth>Login</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant='contained' fullWidth>
                  <Google />
                  <Typography sx={{ml:1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
            <Link  component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}

export default LoginPage


/*
sx hace referencia a "Style eXtra"

xs={3} tendrá 3 posiciones en pantallas pequeñas
sm
md
xl

Typography perteneces a material.ui

<Grid container spacing={2}> espacio de 2 entre sus hijos

fullWidth  se expande a todo el tamaño del padre

<Link  component={RouterLink} color="inherit" to="/auth/register">
component={RouterLink} creamos un link de router
to="/auth/register" que irá a la dirección
*/