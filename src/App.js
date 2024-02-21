import './App.css';
import {Routes,Route} from 'react-router-dom';
import Menu from './Components/MenuComponent';
import LandingPage from './Components/LandingPage';
import AboutComponent from './Components/AboutComponent'
import PurchaseComponent from './Components/PurchaseComponent';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='About' element ={<AboutComponent/>}/>
          <Route path='Purchase' element={<PurchaseComponent/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
