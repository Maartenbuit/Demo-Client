import React from 'react'
import { Link } from 'react-router-dom'

export default class EventList extends React.Component{
  render(){
    if (this.props.movies == 0) return "The Force is Loading..."
    console.log('movies:', this.props.movies)
    return (
      <div className='movie-list'>
        <h1>The Movies:</h1>
        <div className='moviebox'>
        {this.props.movies.map(movie =>
          <div className='movies' key={movie.id}>
            <h3><Link to={`/movies/${movie.id}`}>{movie.name}</Link></h3>
            <Link to={`/movies/${movie.id}`}><img className='moviesPictureBox' src={movie.picUrl} alt={movie.name} /></Link>
            
            </div>
          )}
      </div>
      </div>
    )
  }
}

