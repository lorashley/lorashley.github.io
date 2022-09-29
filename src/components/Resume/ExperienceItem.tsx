import * as React from "react";
import { Box, Modal, Grid, Typography } from "@mui/material";
import { Experience } from "../../types/experience";

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

export default function ExperienceItem(props: Experience) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [hover, setHover] = React.useState(false);
  const showHover = () => setHover(true);
  const hideHover = () => setHover(false);

  return (
    <div>
      <Typography variant="subtitle1" onClick={handleOpen}>{props.title}</Typography>
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
              {props.description}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
