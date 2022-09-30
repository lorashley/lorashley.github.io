import * as React from 'react';
import { ImageListItem } from '@mui/material';
import { ImageItemProps } from '../../types/imageItem';

export default function ImageItem(props: ImageItemProps) {
  const item = props;
  return (
    <a href={item.link} target="_blank" rel="nofollow noreferrer">
      <ImageListItem key={item.id} cols={item.cols || 1} rows={item.rows || 1}>
        <img src={item.img} alt={item.title} loading="lazy" height={164} />
      </ImageListItem>
    </a>
  );
}
