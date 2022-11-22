import { createTheme } from "@mui/material";
//red para mostrar errores en pantalla
import { red } from "@mui/material/colors";

const purpleTheme = createTheme({
  palette:{
    primary:{
      main: '#262254'
    },
    blackGray:{
      main: '#292929'
    },
    secondary:{
      main: '#543884'
    },
    error:{
      main: red.A400
    }
  }
});
export default purpleTheme