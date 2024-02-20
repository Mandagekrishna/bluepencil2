import './App.css';
import {Routes,Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
