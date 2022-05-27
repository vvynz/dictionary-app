import './Styles/App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React, { useState } from "react";
import Dictionary from "./Components/Dictionary";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#121212',
      },
    }
  });

  const lightTheme = createTheme({});

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper sx={{ height: '100%', width: '100%' }}>
        <div className="App">
          <div className="container">
            <header className="header">
              <div className="switch">
                <Switch checked={darkMode} color="secondary" onChange={() => setDarkMode(!darkMode)} />
              </div>
              <Typography className="title" variant="h2" component="div" sx={{ fontWeight: '400', mb: '15px', mt: '-25px' }}>dictionary</Typography>
            </header>
            <main>
              <Dictionary defaultKeyword="dusk" />
            </main>
            <footer className="text-center">
              <Typography variant="caption" display="block" sx={{ fontWeight: 500, mt: '20px', pb: '10px' }} >Coded by Vivian Zhang and is open sourced on <a href="https://github.com/vvynz/dictionary-app" target="_blank" rel="noreferrer">Github</a>.</Typography>
            </footer>
          </div>
        </div>
      </Paper>
    </ThemeProvider >
  );
}

export default App;
