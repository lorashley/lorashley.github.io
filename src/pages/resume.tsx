import * as React from "react";
import { Grid } from "@mui/material";
import Header from "../components/Resume/Header";
import Content from "../components/Resume/Content";
import avatar from "../static/images/featheredcartoonme.png";

export default function Resume() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header
          name="Lauren Ramgattie"
          title="Product Designer & Software Engineer"
          email="📧 lramgattie[at]gmail"
          location="🌊 Fort Lauderdale, FL"
          avatar={avatar}
        />

        <Content />
      </Grid>
    </Grid>
  );
}
