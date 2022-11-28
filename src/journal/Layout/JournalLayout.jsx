import { Box } from "@mui/material"
//import NavBar from "../components/NavBar";
import { NavBar, Sidebar } from "../components";


const drawerWidth = 240; //Menú lateral, no hace falta poner px de pixeles


const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: "flex"}}>

      <NavBar drawerWidth={drawerWidth}/>

      <Sidebar />

      <Box component="main"
        sx={{
          flexGrow: 1,
          p:3
        }}
      >
      {/* Toolbar */}
      {children}
      </Box>

    </Box>
  )
}

export default JournalLayout


/*
<Box></Box> es como un div

<Box component="main"> Es como si fuera una etiqueta main

*/