import { IconButton, Typography } from '@mui/material'
import { AddOutlined as AddOutlinedIcon} from '@mui/icons-material'
import JournalLayout from '../Layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

const JournalPage = () => {
  return (
    <JournalLayout>
      <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit sit nobis accusamus ea! Sequi architecto ad excepturi odio cupiditate temporibus mollitia nostrum voluptates sint expedita! Earum sequi veritatis voluptas. 
      </Typography>
      
      <NothingSelectedView/>

      <NoteView />
      <IconButton 
        size='largue'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9 },
          position:'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlinedIcon sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}

export default JournalPage

/*
  Le damos la tipografía en html de h1, pero con el tamaño de un parrafo
  <Typography component=''h1>JournalPage</Typography>
  
  Con variant tiene tanto la tipografía como el tamaño de h1 en el inspector
  <Typography variant=''h1>JournalPage</Typography>
*/