import { ImageList, ImageListItem } from '@mui/material';
import { dataImg } from './dataImg';

export const ImageGallery = () => {
  return (
      <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={164}>
        {dataImg.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
  )
}


