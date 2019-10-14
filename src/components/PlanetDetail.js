import React from 'react'

export default class PlanetDetail extends React.Component {
  render() {
    // eslint-disable-next-line 
    if (this.props.planets == undefined) return "The force is loading planets"
    const { planets, planetName } = this.props
    // console.log('PROPS', planets)
    // eslint-disable-next-line 
    const thisPlanet2 = planets.filter(planet => planet.name == planetName)
    const thisPlanet = thisPlanet2[0]
    // console.log('planet', thisPlanet)
   if (thisPlanet === undefined) return 'Loading the Force...'
    
    return <div className='planet-detail'><h3>Planet: {planetName}</h3>
    <div className='planet-list'>
    <br></br>
    <p>Diameter: {thisPlanet.diameter} km</p>
    <p>Gravity: {thisPlanet.gravity}</p>
    <p>Terrain: {thisPlanet.terrain}</p>
    <p>Population: {thisPlanet.population}</p>


    </div>
    </div>
  }
}