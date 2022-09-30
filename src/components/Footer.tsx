import * as React from 'react';
import { Grid, Typography } from '@mui/material';

export default function Footer() {
  return (
    <div className="App-footer">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <a
              href="https://github.com/lorashley/portfolio"
              target="blank"
              rel="noreferrer nofollow"
            >
              Made from scratch
            </a>{' '}
            with 🤎 and ReactJS by Lauren
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
