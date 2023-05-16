import './App.css';
import Controls from './components/controls';
import Display from './components/display';
import { useCounter } from './shared/context';

function App() {
  const {state, dispatch } = useCounter()
  return (
    <>
     <Display {...state}/>
     <Controls handler={dispatch}/>
    </>
  );
}

export default App;
