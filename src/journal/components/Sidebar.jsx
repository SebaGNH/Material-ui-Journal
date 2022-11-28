import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import {TurnedInNot as TurnedInNotIcon } from '@mui/icons-material';

const Sidebar = ({drawerWidth = 240}) => {
  return (
    <Box component='nav'
      sx={{width: { sm: drawerWidth}, flexShrink: { sm: 0 }}}
    >
    <Drawer variant='permanent'
      open
      sx={{
        display: {xs: 'block'},
        '&.MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
      }}
    >
      <Toolbar>
        <Typography variant='h6' noWrap component='div'>
          Canelo Fufufesco
        </Typography>
      </Toolbar>
        <Divider/>
        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'].map(text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNotIcon/>
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text}/>
                    <ListItemText secondary={'Lorem ipsum dolor sit'}

                    />

                    
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
    </Drawer>
    </Box>
  )
}

export default Sidebar