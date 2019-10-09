import React from 'react'
import { connect } from 'react-redux'
import PlanetDetail from './PlanetDetail'
import { getPlanets } from '../actions'
import { emptyStore } from '../actions'

class PlanetDetailContainer extends React.Component {
  componentDidMount() {
    this.props.emptyStore()
    this.props.getPlanets()
  }

  render() {
    // console.log('PROPS',this.props.match.params.planetName)
    const planetName = this.props.match.params.planetName

    // console.log('SP', this.props.spaceships)
    return <PlanetDetail
      planets={this.props.planets}
      planetName={planetName}
    />
  }
}

function mapStateToProps(state) {
return {
  planets: state.details,
  }
}

const mapDispatchToProps = { getPlanets, emptyStore }

export default connect(mapStateToProps, mapDispatchToProps)(PlanetDetailContainer)