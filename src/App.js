import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/functionComponent';
import ClassComponent from './Components/classComponent';

function App() {
  return (
    <div className="App">
      <h1>Styling using functional and class component</h1>
      <div className="Flex">
       <FunctionComponent /> 
       <ClassComponent />
      </div>
    </div>
  );
}

export default App;
