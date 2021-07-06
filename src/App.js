import { useState } from 'react';
import './App.css';
import First from './components/First/First';
import Picture from './components/Picture/Picture';
import Second from './components/Second/Second';
import Third from './components/Third/Third';

function App() {
  const [component, setComponent] = useState(<First />);

  return (
    <div className="App">
     <Picture />
     {/* <First />
     <Second />
     <Third /> */}
     {component}
       <button onClick={()=>setComponent(<First />)} >Случайное число</button> 
      <button  onClick={()=>setComponent(<Second />)} >Время загрузки страницы</button>
      <button  onClick={()=>setComponent(<Third />)} >Таймер</button>
    </div>
  );
}

export default App;
