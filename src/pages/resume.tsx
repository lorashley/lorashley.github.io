import * as React from "react";
import { Grid } from "@mui/material";
import Header from "../components/Resume/Header";

export default function Resume() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
    </Grid>
  );
}
