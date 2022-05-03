import logo from './logo.svg';
import './App.css';
import Button from './components/buttonTest/button';
// we can also use jest to test the style

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="click test!" className="buttonStyle"></Button>
      </header>
    </div>
  );
}

export default App;
