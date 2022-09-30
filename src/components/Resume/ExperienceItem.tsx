import * as React from 'react';
import { Box, ImageListItem, Modal, Grid, Typography } from '@mui/material';
import { Experience } from '../../types/experience';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ExperienceItem(props: Experience) {
  const item = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [hover, setHover] = React.useState(false);
  const showHover = () => setHover(true);
  const hideHover = () => setHover(false);

  return (
    <div>
      <ImageListItem key={item.id} cols={1} rows={1}>
        <img
          src={item.thumbnail}
          alt={item.title}
          loading="lazy"
          height={164}
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
              <a href="" target="_blank" rel="noreferrer nofollow"></a>
              <div
                dangerouslySetInnerHTML={{ __html: props.description }}
              ></div>
              {props.mediaArray.map((item: string) => (
                <img key={item} src={item} />
              ))}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
