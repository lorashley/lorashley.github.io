import * as React from "react";
import {
  Box,
  Modal,
  Grid,
  Typography,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { EducationProps } from "../../types/education";

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

export default function ResumeItem(props: EducationProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [hover, setHover] = React.useState(false);
  const showHover = () => setHover(true);
  const hideHover = () => setHover(false);

  return (
    <div>
      <ImageListItem key={props.img}>
        <img
          src={`${props.img}?w=164&h=164&fit=crop&auto=format`}
          srcSet={`${props.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          alt={props.name}
          loading="lazy"
          onClick={handleOpen}
          onMouseEnter={showHover}
          onMouseLeave={hideHover}
        />
        {hover && (
          <ImageListItemBar
            sx={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
            }}
            title={props.name}
          />
        )}
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
              <a href={props.link} target="_blank" rel="noreferrer nofollow">
                <Typography variant="subtitle1">
                  {props.name}, {props.institution}, {props.year}
                </Typography>
              </a>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
