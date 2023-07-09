import './App.css';
import { ButtonComponent } from './components/ButtonComponent';

function App() {
  return (
    <div className="App">
      <div>Buttons</div>
      <div>Button /
        <ButtonComponent type="default"/>
      </div>
    </div>
  );
}

export default App;
