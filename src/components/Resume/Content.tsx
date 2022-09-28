import * as React from "react";
import { Grid, ImageList, Typography } from "@mui/material";
import CompanyLine from "./CompanyLine";
import ResumeItem from "./ResumeItem";
import companyData from "../../static/data/company";
import educationData from "../../static/data/education";
import { CompanyProps } from "../../types/company";
import { EducationProps } from "../../types/education";

export default function Content() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} textAlign="left" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h5">Work Experience</Typography>
          {companyData.map((c: CompanyProps) => (
            <CompanyLine key={c.name} {...c} />
          ))}
          <Typography variant="h5">Education</Typography>
          <ImageList sx={{ height: 450 }} cols={6} rowHeight={164}>
            {educationData.map((e: EducationProps) => (
              <ResumeItem key={e.name} {...e} />
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </Grid>
  );
}
