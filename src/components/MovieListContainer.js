import React from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../actions'
import MovieList from './MovieList'
// import { normalize, schema } from 'normalizr';


class MovieListContainer extends React.Component {
  componentDidMount(){
    this.props.getMovies()
  }

  render(){

    // console.log('NORM', this.props.movies)
    return <MovieList 
    movies={this.props.movies}
    />
  }
}

function mapStateToProps(state){
  return { movies: state.movies }
}

const mapDispatchToProps = { getMovies }

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer)