import { Typography } from '@mui/material'
import JournalLayout from '../Layout/JournalLayout'

const JournalPage = () => {
  return (
    <JournalLayout>
      <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit sit nobis accusamus ea! Sequi architecto ad excepturi odio cupiditate temporibus mollitia nostrum voluptates sint expedita! Earum sequi veritatis voluptas. 
      </Typography>
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