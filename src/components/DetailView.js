import React from 'react';
import './styles/DetailView.css';
import introgif from '../assets/intro.gif'

const DetailView = ({ pokemon }) => {
  let { id, name, sprite, shiny, type, region, height, height2, weight, abilities } = pokemon;

  if (pokemon.id === undefined) {
    sprite = introgif;
    return (
      <section className="detail-view">
        <img src={sprite} className='sprite-image' alt="sprite" />
        <div className='data-wrapper' style={{textAlign: "center"}}>
          <p className='data-name'>Welcome to the React Pokédex!</p><br />
          <p className='data-info'>You can choose a generation by clicking a ball on the left. {id}</p> <br/>
          <p className='data-info'>Click on a Pokémon to view more details! {type}</p>
        </div>
      </section>
    )
  }

  else if (pokemon.id === 201) {
    return (
      <section className="detail-view">
          <img src={sprite} className='sprite-image' alt="sprite"
            onMouseOver={e => (e.currentTarget.src = shiny)}
            onMouseOut={e => (e.currentTarget.src = sprite)} />

        <div className='data-wrapper'>
          <p className='data-name unown'>name: {name.toLowerCase()}</p>
          <p className='data-info unown'>pokedex #: {id}</p>
          <p className='data-info unown'>region: {region.toLowerCase()}</p>
          <p className='data-info unown'>type: {type.toLowerCase()}</p>
          <p className='data-info unown'>abilities: {abilities.toLowerCase()}</p>
          <p className='data-info unown'>height: {height}' {height2}"</p>
          <p className='data-info unown'>weight: {weight}lbs</p>
        </div>

      </section>
    )
  }

  else {
    return (
      <section className="detail-view">
          <img src={sprite} className='sprite-image' alt="sprite"
            onMouseOver={e => (e.currentTarget.src = shiny)}
            onMouseOut={e => (e.currentTarget.src = sprite)} />

        <div className='data-wrapper'>
          <p className='data-name'>Name: {name}</p>
          <p className='data-info'>Pokédex #: {id}</p>
          <p className='data-info'>Region: {region}</p>
          <p className='data-info'>Type: {type}</p>
          <p className='data-info'>Abilities: {abilities}</p>
          <p className='data-info'>Height: {height}' {height2}"</p>
          <p className='data-info'>Weight: {weight}lbs</p>
        </div>

      </section>
    )
  }
}

export default DetailView;