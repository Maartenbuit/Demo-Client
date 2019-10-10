import React from 'react'
import { connect } from 'react-redux'
import CharDetail from './CharDetail'
import { getChars } from '../actions'
import { emptyStore } from '../actions'

class CharDetailContainer extends React.Component {
  componentDidMount() {
    this.props.emptyStore()
    this.props.getChars()
  }

  render() {
    // console.log('PROPS',this.props.match.params.charName)
    const charName = this.props.match.params.charName

    // console.log('SP', this.props.spaceships)
    return <CharDetail
      chars={this.props.chars}
      charName={charName}
    />
  }
}

function mapStateToProps(state) {
return {
  chars: state.details,
  }
}

const mapDispatchToProps = { getChars, emptyStore }

export default connect(mapStateToProps, mapDispatchToProps)(CharDetailContainer)