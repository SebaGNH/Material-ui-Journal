import React from 'react'
import { Grid, TextField, Typography } from '@mui/material'

const RegisterPage = () => {
  return (
    <Grid container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'blackGray.main', 
        padding: 4 
      }}
    >

      <Grid item
        className="box-shadow"
        xs={ 3 }
        sx={{ 
          backgroundColor: '#ccc',
          padding: 3,
          borderRadius: 2
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 1 //Margin Bottom
          }}
        >Login</Typography>
        
        <form>
          <Grid container>
            <Grid item xs="12" sx={{mt:2}}>
              <TextField
                label="correo"
                type="email"
                placeholder="correo@correo.com"
                fullWidth
              ></TextField>
            </Grid>

            <Grid item xs="12" sx={{mt:2}}>
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
        </form>

      </Grid>
    </Grid>
  )
}

export default RegisterPage

/*
sx hace referencia a "Style X"

xs={3} tendrá 3 posiciones en pantallas pequeñas
md
xl

Typography perteneces a material.ui
*/