import './App.css';
import Dictionary from "./Components/Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="text-center">Dictionary App</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>Coded by Vivian Zhang.</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
