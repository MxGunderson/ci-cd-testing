import logo from './logo.svg';
import './App.css';
import ButtonOne from './components/ButtonOne';
import ButtonTwo from './components/ButtonTwo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img data-testid='image' src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <ButtonOne />
        <ButtonTwo />
      </header>
    </div>
  );
}

export default App;
