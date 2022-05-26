import './App.css';
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
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ height: '100%', width: '100vw', bgcolor: 'background.default' }}>
        {/* <div className="App"> */}
        <div className="container">
          <header className="text-center">
            <Typography variant="h2" component="div" gutterBottom>Dictionary App</Typography>
            <Switch checked={darkMode} color="secondary" onChange={() => setDarkMode(!darkMode)} />
          </header>
          <main>
            <Dictionary defaultKeyword="dusk" />
          </main>
          <footer className="text-center">
            <Typography variant="caption" display="block" mt={2} sx={{ fontWeight: 500 }} >Coded by Vivian Zhang and is open sourced on <a href="https://github.com/vvynz/dictionary-app" target="_blank" rel="noreferrer">Github</a>.</Typography>
          </footer>
        </div>
        {/* </div> */}
      </Paper>
    </ThemeProvider >
  );
}

export default App;
