import './App.css';
import Resume from './pages/resume';
import PortfolioPage from './pages/portfolio';
import Footer from './components/Footer';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const lightTheme = createTheme({ palette: { mode: 'light' } });
function App() {
  return (
    <Router>
      <div className="App">
        <Box m={2} p={3}>
          <Grid container spacing={2}>
            {[lightTheme].map((theme, index) => (
              <Grid item xs={12} key={index}>
                <ThemeProvider theme={theme}>
                  <Routes>
                    <Route exact path="/" element={<Resume />}></Route>
                    <Route
                      path="/portfolio/:slug"
                      element={<PortfolioPage />}
                    />
                  </Routes>
                  <Footer />
                </ThemeProvider>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </Router>
  );
}

export default App;
