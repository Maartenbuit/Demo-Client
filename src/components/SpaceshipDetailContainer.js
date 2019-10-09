import React from 'react'
import { connect } from 'react-redux'
import SpaceshipDetail from './SpaceshipDetail'
import { getSpaceships } from '../actions'
import { emptyStore } from '../actions'

class SpaceshipDetailContainer extends React.Component {
  componentDidMount() {
    this.props.emptyStore()
    this.props.getSpaceships()
  }

  render() {
    console.log('PROPS',this.props.match.params.spaceshipName)
    const spaceshipName = this.props.match.params.spaceshipName

    // console.log('SP', this.props.spaceships)
    return <SpaceshipDetail
      ships={this.props.ships}
      spaceshipName={spaceshipName}
    />
  }
}

function mapStateToProps(state) {
return {
  ships: state.spaceships,
  }
}

const mapDispatchToProps = { getSpaceships, emptyStore }

export default connect(mapStateToProps, mapDispatchToProps)(SpaceshipDetailContainer)