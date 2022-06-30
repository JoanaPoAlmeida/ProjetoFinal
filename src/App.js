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
import Help from './pages/Help';
import { FooterContainer } from './containers/footer'
import { GlobalStyles } from './global-styles';


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
          <Route path='/Help' element={<Help/>}/>
        </Routes>
      </Router>
      <FooterContainer />
      
      
    </>
  );
}
//<Footer />
export default App;
