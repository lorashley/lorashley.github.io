import * as React from 'react';

import { Avatar, Box, Chip, Grid, Typography, styled } from '@mui/material';

type HeaderProps = {
  avatar: string;
  name: string;
  title: string;
  email: string;
  location: string;
  filterContent: string;
  onChipClick: (item: string) => void;
};

const CHIPS = ['All', 'Development', 'Design', 'Community', 'Art'];

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function Header(props: HeaderProps) {
  return (
    <Box m={2} p={3}>
      <Grid container spacing={12}>
        <Grid
          item
          xs={4}
          alignItems={'right'}
          container
          direction={'row'}
          justifyContent="flex-end"
        >
          <Avatar
            alt={props.name}
            src={props.avatar}
            sx={{ width: 200, height: 200 }}
          />
        </Grid>
        <Grid item xs={8} textAlign="left" justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h3" sx={{ fontFamily: 'Permanent Marker' }}>
              {props.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">{props.title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">{props.email}</Typography>
            <Typography variant="subtitle1">{props.location}</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              listStyle: 'none',
              p: 0.5,
              m: 0,
            }}
            component="ul"
          >
            {CHIPS.map((chip) => (
              <ListItem key={chip}>
                <Chip
                  label={chip}
                  onClick={() => props.onChipClick(chip)}
                  color={chip === props.filterContent ? 'primary' : 'default'}
                />
              </ListItem>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
