import * as React from "react";
import { Avatar, Grid, Typography } from "@mui/material";

import avatar from "../../static/images/featheredcartoonme.png";

export default function Header() {
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
          alt="Cindy Baker"
          src={avatar}
          sx={{ width: 200, height: 200 }}
        />
      </Grid>
      <Grid item xs={9} textAlign="left" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h2">Lauren Ramgattie</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">
            Product Developer & Software Engineer
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">📧 lramgattie[at]gmail</Typography>
          <Typography variant="subtitle1">🌊 Fort Lauderdale, FL</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
