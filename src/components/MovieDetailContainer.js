import React from 'react'
import { connect } from 'react-redux'
import MovieDetail from './MovieDetail'
import { getChars } from '../actions'
import { getApiMovies } from '../actions'
import { getPlanets } from '../actions'
import { emptyStore } from '../actions'
import { getSpaceships } from '../actions'

class MovieDetailContainer extends React.Component {
    componentDidMount() {
      this.props.emptyStore()
      this.props.getChars()
      this.props.getApiMovies()
      this.props.getPlanets()
      this.props.getSpaceships()
    }

    render() {
      const movieId = this.props.match.params.id

      // console.log('SP', this.props.spaceships)
      return <MovieDetail
        chars={this.props.chars}
        movies={this.props.movies}
        planets={this.props.planets}
        spaceships={this.props.spaceships}
        movieId={movieId}
      />
    }
  }

function mapStateToProps(state) {
  return {
    chars: state.details,
    movies: state.apiMovies.results,
    spaceships: state.spaceships,
    planets: state.planets
  }
}

const mapDispatchToProps = { getChars, getApiMovies, getPlanets, getSpaceships, emptyStore }

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailContainer)