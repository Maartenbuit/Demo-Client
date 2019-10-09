import React from 'react'
import { Link } from 'react-router-dom'

export default class MovieDetail extends React.Component {
  render() {
    if (this.props.chars === undefined) return "The force is loading characters"
    if (this.props.movies === undefined) return "The force is loading movies"
    if (this.props.planets === undefined) return "The force is loading planets"
    if (this.props.spaceships === undefined) return "The force is loading starships"
    //console.log("movies1", this.props.movies)
    const { chars, movies, planets, spaceships } = this.props
    //console.log('spaceS') 
    // const movies = this.props.movies
    const movieId = this.props.movieId
    const thisMovieUrl = `https://swapi.co/api/films/${movieId}/`
    const thisMovie = movies.filter(movie => movie.url == thisMovieUrl)
    const movieChars = thisMovie[0].characters
    const moviePlanets = thisMovie[0].planets
    const movieSpaceships = thisMovie[0].starships
    //console.log('planet', thisMovie)
    const theseChars = chars.filter(char => movieChars.includes(char.url))
    const thesePlanets = planets.filter(planet => moviePlanets.includes(planet.url))
    const theseSpaceships = spaceships.filter(sp => movieSpaceships.includes(sp.url))
    //const thisMovieId = thisMovie[0].episode_id

    //console.log('THIS Chars', theseChars)
    return <div className='movie-details'>
      <div className='movie-chars'>
        <h3>Characters:</h3>
        {theseChars.map(char =>
          <span key={char.url}><p><Link to={`/characters/${char.name}`}>{char.name}</Link></p></span>)}
      </div>
      <div className='movie-planets'>
        <h3>Planets:</h3>
        {thesePlanets.map(planet =>
          <span key={planet.url}><p><Link to={`/planets/${planet.name}`}>{planet.name}</Link></p></span>)}
      </div>
      <div className='movie-spaceships'>
      <h3>Starships:</h3>
      {theseSpaceships.map(sp =>
        <span key={sp.url}><p><Link to={`/starships/${sp.name}`}>{sp.name}</Link></p></span>)}
    </div>
    </div >
  }
}