import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { EducationProps } from "../../types/education";

export default function EduLine(props: EducationProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <a href={props.link} target="_blank">
          <Typography variant="subtitle1">
            {props.name}, {props.institution}, {props.year}
          </Typography>
        </a>
      </Grid>
    </Grid>
  );
}
