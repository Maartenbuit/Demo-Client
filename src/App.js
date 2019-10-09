import React from 'react';
import logo from './Star_wars.png';
import './App.css';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MovieListContainer from './components/MovieListContainer';
import Intro from './components/Intro';
import MovieDetailContainer from './components/MovieDetailContainer';
import CharDetailContainer from './components/CharDetailContainer';
import PlanetDetailContainer from './components/PlanetDetailContainer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          The ultimate Star Wars page
          <Link to={'/movies'}><button>Index</button></Link>
      </header>
        <main>
          <Route exact path='/' component={Intro}/>
          <Route exact path='/movies' component={MovieListContainer} />
          <Route exact path='/movies/:id' component={MovieDetailContainer} />
          <Route exact path='/characters/:charName' component={CharDetailContainer}/>
          <Route exact path='/planets/:planetName' component={PlanetDetailContainer}/>
           
      </main>
    </div>
        );
      }
      }
      export default App;
