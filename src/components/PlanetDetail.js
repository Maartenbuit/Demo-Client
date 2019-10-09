import React from 'react'

export default class PlanetDetail extends React.Component {
  render() {
    if (this.props.planets == []) return "The force is loading planets"
    const { planets, planetName } = this.props

    const thisPlanet2 = planets.filter(planet => planet.name == planetName)
    const thisPlanet = thisPlanet2[0]
    if (thisPlanet2 == '') return 'Loading the Force...'
    console.log('planet', thisPlanet)
    return <div className='planet-detail'><h3>{planetName}</h3>
    <div className='planet-list'>

    <p></p>
    <p></p>
    <p></p>
    <p></p>


    </div>
    </div>
  }
}