import { Link as RouterLink} from 'react-router-dom';
import {Google} from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import AuthLayout from '../layout/AuthLayout';

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" bgColor='blackGray'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Ingrese su nombre"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label="correo"
              type="email"
              placeholder="ej: correo@correo.com"
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

          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label="Confirmar Password"
              type="password"
              placeholder="Password"
              fullWidth
            ></TextField>
          </Grid>

          <Grid container spacing={2} sx={{my:2}}> 
            <Grid item xs={12}>
              <Button variant='contained' fullWidth>Crear una cuenta</Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
          ¿Ya tienes cuenta?
          <Link  component={RouterLink} color="inherit" to="/auth/login">
            Ingresar
          </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

export default RegisterPage
