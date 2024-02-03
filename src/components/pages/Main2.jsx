import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function Main2() {
  return (
    <ImageList  variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
    {
        img: 'src/assets/images/1.png',
        title: 'Image1',
    }, {
        img: 'src/assets/images/2.png',
        title: 'Image2',
    }, {
        img: 'src/assets/images/3.png',
        title: 'Image3',
    }, {
        img: 'src/assets/images/4.png',
        title: 'Image4',
    }, {
        img: 'src/assets/images/5.png',
        title: 'Image5',
    }, {
        img: 'src/assets/images/6.png',
        title: 'Image6',
    }
];
