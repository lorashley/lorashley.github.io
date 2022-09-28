import "./App.css";
import Resume from "./pages/resume";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const lightTheme = createTheme({ palette: { mode: "light" } });

function App() {
  return (
    <div className="App">
      <Box m={2} pt={3}>
        <Grid container spacing={2}>
          {[lightTheme].map((theme, index) => (
            <Grid item xs={12} key={index}>
              <ThemeProvider theme={theme}>
                <Resume />
              </ThemeProvider>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
