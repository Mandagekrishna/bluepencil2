import './App.css';
import {Routes,Route} from 'react-router-dom';
import Menu from './Components/MenuComponent';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
