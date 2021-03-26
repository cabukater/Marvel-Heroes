import './App.css';
import Box from './components/Box'
import Hero from './components/Hero'

function App() {
  
  return (
    <>
    <div className="App">
      <div className="stage">
       <Hero texto={Box}/>
      </div>
      <div className="list-cards">
     <Box />
    </div>
    </div>
  </>
  );
};

export default App;
