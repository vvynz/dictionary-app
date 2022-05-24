import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Dictionary from "./Components/Dictionary";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="text-center">
          <Typography variant="h2" component="div" gutterBottom>Dictionary App</Typography></header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <Typography variant="caption" display="block" mt={2} sx={{ fontWeight: 500 }} >Coded by Vivian Zhang and is open sourced on <a href="https://github.com/vvynz/dictionary-app" target="_blank" rel="noreferrer">Github</a>.</Typography>
        </footer>
      </div>
    </div>
  );
}

export default App;
