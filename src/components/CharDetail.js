import React from 'react'

export default class CharDetail extends React.Component {
  render() {
    if (this.props.chars == []) return "The force is loading characters"
    const { chars, charName } = this.props
    const thisChar2 = chars.filter(char => char.name == charName)
    const thisChar = thisChar2[0]
    if (thisChar == undefined) return 'Loading the Force...'
    console.log('thisChar', thisChar)
    return <div className ='char-detail'><h3>Character: {charName}</h3>
    <div className='char-list'>
      <br></br>
      <p>Date of Birth: {thisChar.birth_year}</p>
      <p>Eye Color: {thisChar.eye_color}</p>
      <p>Haircolor: {thisChar.hair_color}</p>
      <p>Height: {thisChar.height} CM</p>
      <p>Weight: {thisChar.mass} KG</p>
      
    
    </div>
    </div>
  }
}