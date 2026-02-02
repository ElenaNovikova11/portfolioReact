import './App.css';
import Header from './components/main/Header';
import { HashRouter, BrowserRouter, Route, Routes} from 'react-router-dom';

import Contacts from './page/Contacts';
import Portfolio from './page/Portfolio';
import AboutMy from './page/AboutMy';
import Home from './page/Home';




function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        
       
    <Routes>
        <Route path='/Contacts' name='Contacts' element = {<Contacts />}/>
          <Route path='/Portfolio' name='Portfolio' element = {<Portfolio />}/>
          <Route path='/AboutMy' name='AboutMy' element = {<AboutMy />}/>
          <Route path="/portfolioReact" name='Home' element = {<Home />} />
          <Route exact path="/" name='Home' element = {<Home />} />
    </Routes>
        
       
         
       

      </div>

    </HashRouter>
  );
}

export default App;
