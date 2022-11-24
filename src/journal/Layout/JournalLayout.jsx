

const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:flex}}>
      {/* NavBar */}

      {/* Sidebar */}

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