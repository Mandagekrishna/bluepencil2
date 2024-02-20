import './App.css';
import {Routes,Route} from 'react-router-dom';
import Menu from './Components/MenuComponent';
import LandingPage from './Components/LandingPage';
import AboutComponent from './Components/AboutComponent'

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='About' element ={<AboutComponent/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
