import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Premium from './components/Premium'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'





function App() {
  return (
    <Router>
          <div className="App">

              

              <div className='home'>
                <Switch>
                
                  <Route exact path='/'>
                      <div>
                        <Navbar placeholder='Search' />
                      </div>
                      <Home />    
                  </Route>

                  <Route path='/premium'>
                      <Premium />
                  </Route>
                  
                </Switch>
              </div>
          </div>  
      
    
    </Router> 
  );
}

export default App;
