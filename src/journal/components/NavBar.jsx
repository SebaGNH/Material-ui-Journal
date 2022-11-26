import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { Menu as MenuIcon, Logout as LogOutIcon } from '@mui/icons-material';




const NavBar = ({drawerWidth}) => {
  return (
    <AppBar 
      position="fixed"
      sx={{
        width:{sm:`calc(100% - ${drawerWidth}px)`},
              ml: {sm:`${drawerWidth}px`}
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{mr:2, display: {sm:"none"}}}
        >
          <MenuIcon />
        </IconButton>

        <Grid container direction="row" justifyContent="space-between" alignItems="center"      
        >
          <Typography variant="h6" noWrap component="div">Journal App</Typography>
          <IconButton color="error">
            <LogOutIcon />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar

/*
fixed = fija
*/