import React from 'react';
import logo from './Star_wars.png';
import './App.css';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MovieListContainer from './components/MovieListContainer';
import Intro from './components/Intro';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          The ultimate Star Wars referal page
          <Link to={'/movies'}><button>Index</button></Link>
      </header>
        <main>
          <Route exact path='/' component={Intro}/>
          <Route path='/movies' component={MovieListContainer} />
           
      </main>
    </div>
        );
      }
      }
      export default App;
