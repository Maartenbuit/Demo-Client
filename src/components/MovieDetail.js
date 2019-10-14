import React from 'react'
import { Link } from 'react-router-dom'

export default class MovieDetail extends React.Component {
  render() {
    if (this.props.chars === undefined) return "The force is loading characters"
    if (this.props.movies === undefined) return "The force is loading movies"
    if (this.props.planets === undefined) return "The force is loading planets"
    if (this.props.spaceships === undefined) return "The force is loading starships"
    if (this.props.moviesCrawl === undefined) return "The force is loading movies"
    //console.log("movies1", this.props.movies)
    const { chars, movies, moviesCrawl, planets, spaceships } = this.props
    // console.log('CRAWL', moviesCrawl) 
    // const movies = this.props.movies
    const movieId = this.props.movieId
    const thisMovieUrl = `https://swapi.co/api/films/${movieId}/`
    // eslint-disable-next-line
    const thisMovie = movies.filter(movie => movie.url == thisMovieUrl)
    // eslint-disable-next-line
    const thisMovieCrawl2 = moviesCrawl.filter(a => a.id == movieId)
    const thisMovieCrawl = thisMovieCrawl2[0]
    // console.log('TEST', thisMovieCrawl)
    const movieChars = thisMovie[0].characters
    const moviePlanets = thisMovie[0].planets
    const movieSpaceships = thisMovie[0].starships
    //console.log('planet', thisMovie)
    const theseChars = chars.filter(char => movieChars.includes(char.url))
    const thesePlanets = planets.filter(planet => moviePlanets.includes(planet.url))
    const theseSpaceships = spaceships.filter(sp => movieSpaceships.includes(sp.url))
    //const thisMovieId = thisMovie[0].episode_id

    //console.log('THIS Chars', theseChars)
    return <div className='movie-details'><h1>{thisMovieCrawl.name}</h1>
      <div className='movie-crawl'>
        <iframe title={thisMovieCrawl.crawlUrl} src={thisMovieCrawl.crawlUrl} width="560" height="315"></iframe>
      </div>
      <div className='display'>
      <div className='movie-chars'>
        <h2>Characters:</h2>
        {theseChars.map(char =>
          <span key={char.url}><p><Link to={`/characters/${char.name}`}>{char.name}</Link></p></span>)}
      </div>
      <div className='movie-planets'>
        <h2>Planets:</h2>
        {thesePlanets.map(planet =>
          <span key={planet.url}><p><Link to={`/planets/${planet.name}`}>{planet.name}</Link></p></span>)}
      </div>
      <div className='movie-spaceships'>
      <h2>Starships:</h2>
      {theseSpaceships.map(sp =>
        <span key={sp.url}><p><Link to={`/starships/${sp.name}`}>{sp.name}</Link></p></span>)}
        </div>
    </div>
    </div >
  }
}