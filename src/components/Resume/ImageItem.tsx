import * as React from "react";
import { ImageListItem } from "@mui/material";
import { ImageItemProps } from "../../types/imageItem";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageItem(props: ImageItemProps) {
  const item = props;

  const [hover, setHover] = React.useState(false);

  return (
    <a href={item.link} target="_blank" rel="nofollow noreferrer">
      <ImageListItem
        key={item.id}
        cols={item.cols || 1}
        rows={item.rows || 1}
        
      >
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          height={164}
        />
      </ImageListItem>
    </a>
  );
}
