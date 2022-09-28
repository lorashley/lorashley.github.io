import "./App.css";
import Resume from "./pages/resume";
import Footer from "./components/Footer";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const lightTheme = createTheme({ palette: { mode: "light" } });
function App() {
  return (
    <div className="App">
      <Box m={2} p={3}>
        <Grid container spacing={2}>
          {[lightTheme].map((theme, index) => (
            <Grid item xs={12} key={index}>
              <ThemeProvider theme={theme}>
                <Resume />
                <Footer />
              </ThemeProvider>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
