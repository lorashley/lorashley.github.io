import * as React from "react";
import { Avatar, Grid, Typography } from "@mui/material";

type HeaderProps = {
  avatar: string;
  name: string;
  title: string;
  email: string;
  location: string;
};

export default function Header(props: HeaderProps) {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={3}
        alignItems={"center"}
        container
        direction={"row"}
        justifyContent="flex-end"
      >
        <Avatar
          alt={props.name}
          src={props.avatar}
          sx={{ width: 200, height: 200 }}
        />
      </Grid>
      <Grid item xs={9} textAlign="left" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h2">{props.name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">{props.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">{props.email}</Typography>
          <Typography variant="subtitle1">{props.location}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
