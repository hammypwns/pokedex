import React from 'react';
//import sprites from '../assets/sprites.png';
import './styles/PokeCell.css';

/*
const PokeCell = ({ key, pokeImg, handleOnClick }) => {

  const style = { backgroundImage: pokeImg }

  return <button onClick={() => handleOnClick(key)} style={style} className="poke-cell"></button>
};

export default PokeCell;
*/

const PokeCell = ({ id, handleOnClick, pokeImg }) => {

  //const style = { backgroundImage: `url(${pokeImg})` };

  return <button onClick={() => handleOnClick(id)} className="poke-cell"><img src={pokeImg} className='poke-cell-image' alt={id} /></button>
  //return <button onClick={() => handleOnClick(id)} style={style} className="poke-cell">1</button>
};

export default PokeCell;