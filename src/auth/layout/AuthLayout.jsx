import { Grid, Typography } from '@mui/material'

const AuthLayout = ({ children, title="", bgColor="primary" }) => {
  return (
    <Grid container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
        backgroundColor: `${bgColor}.main`, 
        padding: 4 
        }}
      >

      <Grid item
        className="box-shadow"
        xs={ 3 }
        sx={{ 
          backgroundColor: '#ccc',
          padding: 3,
          borderRadius: 2,
          width: { sm: 450 }
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 1 //Margin Bottom
          }}
        >{ title }</Typography>

      { children }

      </Grid>
    </Grid>
  )
}

export default AuthLayout


/*
const AuthLayout = ({children, title=""}) => {
  si no viene el titulo será un string vacío 

*/