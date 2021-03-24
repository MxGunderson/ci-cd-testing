import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img data-testid='image' src={logo} className="App-logo" alt="logo" />
        <h1>Hello World<br />Minor Change Here</h1>
      </header>
    </div>
  );
}

export default App;
