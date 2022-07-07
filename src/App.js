//yarn start
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Switch --> Routes
import Home from './pages';
import Entity from './pages/Entity';
import Keywords from './pages/Keywords';
import POS from './pages/POS';
import Sum from './pages/Sum';
import LangDetect from './pages/LangDetect';
import Start from './pages/start';
import Team from './pages/Team';
import { FooterContainer } from './containers/footer'
import { GlobalStyles } from './global-styles';
import Sentilex from './pages/Sentilex';
import API from './pages/API';


function App() {

  return (
    <>
      <Router>
        
        <Home />
        <Routes>
          <Route path='/' element={<Start/>}/>
          <Route path='/Entity' element={<Entity/>}/>
          <Route path='/POS' element={<POS/>}/>
          <Route path='/Keywords' element={<Keywords/>}/>
          <Route path='/LangDetect' element={<LangDetect/>}/>
          <Route path='/Sum' element={<Sum/>}/>
          <Route path='/Team' element={<Team/>}/>
          <Route path='/API' element={<API />}/>
          <Route path='/Sentilex' element={<Sentilex/>}/>
        </Routes>
      </Router>
      <div className='footer'>
        <p>Copyright ©2022 All rights reserved by : <a href='http://hultigcorpus.di.ubi.pt/index_eng.html' target="_blank" className='Link' > Hultig-C</a></p>
      </div>
      
      
    </>
  );
}
//<Footer />
export default App;
