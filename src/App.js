import logo from './logo.svg';
import './App.css';
import {
  NavBar, ItemCardCollection
 } from './ui-components';

function App() {
  return (
    <div className="App">
      <NavBar width="100vx" />
      <ItemCardCollection />
    </div>
  );
}

export default App;
