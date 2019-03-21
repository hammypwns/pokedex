import React from 'react';
import './styles/DetailView.css';
import introgif from '../assets/intro.gif'

const DetailView = ({ pokemon }) => {
  let { id, name, sprite, type, /*moves,*/ region, height, height2, weight, abilities } = pokemon;

  if (pokemon.id === undefined) {
    sprite = introgif;
    return (
      <section className="detail-view">
        <img src={sprite} className='sprite-image' alt="sprite" />
        <div className='data-wrapper'>
          <p className ='data-name'>Welcome to the React Pokédex!</p><br />
          <p className ='data-id'>You can choose a generation by clicking a ball on the left. {id}</p> <br/>
          <p className='data-type'>Click on a Pokémon to view more details! {type}</p>
        </div>
      </section>
    )
  }

  else {
    return (
      <section className="detail-view">

        <img src={sprite} className='sprite-image' alt="sprite"/>

        {/* <p className='btns'>
          <button className='shiny-btn' onClick={() => this.handleSpriteChange(id)}>Default</button>
          <button className='shiny-btn' onClick={() => this.handleSpriteChange(id)}>Shiny</button>
        </p> */}

        <div className='data-wrapper'>
          <p className ='data-name'>Name: {name}</p>
          <p className ='data-info'>Pokédex #: {id}</p>
          <p className='data-info'>Region: {region}</p>
          <p className='data-info'>Type: {type}</p>
          {/* <p className='data-info'>Default Move: {moves}</p><br /> */}
          <p className='data-info'>Abilities: {abilities}</p>
          <p className='data-info'>Height: {height}' {height2}"</p>
          <p className='data-info'>Weight: {weight}lbs</p>
        </div>

      </section>
    )
  }
}

export default DetailView;