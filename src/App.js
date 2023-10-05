import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';

function App() {
  const navText = 'Navbar';
  const navHeader = "Ammar";
  return (
    <div className="App">
      <header className="App-header">
        <Navbar navText={navText} navHeader={navHeader} />
        
        <p>
          Hallo Brodiee
        </p>
        <Button />
      </header>
    </div>
  );
}

export default App;
