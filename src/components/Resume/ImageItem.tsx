import * as React from "react";
import { Box, Modal, Grid, Typography, ImageListItem } from "@mui/material";
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [hover, setHover] = React.useState(false);
  const showHover = () => setHover(true);
  const hideHover = () => setHover(false);

  return (
    <div>
      <ImageListItem
        key={item.img}
        cols={item.cols || 1}
        rows={item.rows || 1}
        onClick={handleOpen}
      >
        <img
          {...srcset(item.img, 121, item.rows, item.cols)}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <a href={item.link} target="_blank" rel="noreferrer nofollow">
                <Typography variant="subtitle1"></Typography>
              </a>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
