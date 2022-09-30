import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { useLocation } from 'react-router-dom';

const style = {
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
};

export default function PortfolioPage() {
  const location = useLocation();
  const { experience } = location.state;

  return (
    <div className="portfolio-page">
      <Box m={3} p={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={7}>
            {experience.mediaArray.map((item: any) => (
              <img
                key={item}
                src={`${item}`}
                alt={experience.title}
                width="550"
              />
            ))}
          </Grid>
          <Grid item xs={12} lg={5} textAlign="left" sx={style}>
            <Typography variant="h4">{experience.title}</Typography>

            <Typography variant="body2">
              <div
                dangerouslySetInnerHTML={{ __html: experience.description }}
              ></div>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
