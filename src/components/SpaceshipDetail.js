import React from 'react'

export default class SpaceshipDetail extends React.Component {
  render() {
    // eslint-disable-next-line 
    if (this.props.ships == []) return "The force is loading characters"
    const { ships, spaceshipName } = this.props
    // eslint-disable-next-line 
    const thisSp2 = ships.filter(ships => ships.name == spaceshipName)
    const thisSp = thisSp2[0]
    // eslint-disable-next-line 
    if (thisSp == undefined) return 'Loading the Force...'
    console.log('thisChar', thisSp)
    return <div className ='sp-detail'><h3>Starship: {spaceshipName}</h3>
    <div className='sp-list'>
      <br></br>
      <p>Model: {thisSp.model}</p>
      <p>Crew: {thisSp.crew} people</p>
      <p>Cost: {thisSp.cost_in_credits} credits</p>
      <p>Hyperdrive Rating: {thisSp.hyperdrive_rating} Lightyear speed</p>
      <p>Speed: {thisSp.max_atmosphering_speed} KM/H</p>
      <p>Length: {thisSp.length} meter</p>
      
    
    </div>
    </div>
  }
}