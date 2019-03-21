import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import axios from 'axios';
import Pokemon from '../Pokemon';
import './styles/App.css';
import pokeball1 from '../assets/pokeball1.png';
import pokeball2 from '../assets/pokeball2.png';
import pokeball3 from '../assets/pokeball3.png';
import pokeball4 from '../assets/pokeball4.png';
import pokeball5 from '../assets/pokeball5.png';
import pokeball6 from '../assets/pokeball6.png';
import pokeball7 from '../assets/pokeball7.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
      generation: 1,
      update: false,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleGenChange = this.handleGenChange.bind(this);
  }

  handleOnClick(id) {
      axios.get(`http://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => {
          const pokemon = new Pokemon(res.data);

          this.setState({ pokemon });
        })
  }

  handleGenChange(gen) {
    this.setState({ generation: gen, update: true })
    console.log(this.state);
  }

  render() {
    return (
      <>
      <div className = "Header">
        React Pokédex
      </div>

      <div className="App">
        <div className = "generations">
          <h1 className = "genHeader">Gen</h1>
          <button className = "genButton" onClick={() => this.handleGenChange(1)}><img src = {pokeball1} alt = "pokeball1" /><p>1</p></button>
          <button className = "genButton" onClick={() => this.handleGenChange(2)}><img src = {pokeball2} alt = "pokeball2" /><p>2</p></button>
          <button className = "genButton" onClick={() => this.handleGenChange(3)}><img src = {pokeball3} alt = "pokeball3" /><p>3</p></button>
          <button className = "genButton" onClick={() => this.handleGenChange(4)}><img src = {pokeball4} alt = "pokeball4" /><p>4</p></button>
          <button className = "genButton" onClick={() => this.handleGenChange(5)}><img src = {pokeball5} alt = "pokeball5" /><p>5</p></button>
          <button className = "genButton" onClick={() => this.handleGenChange(6)}><img src = {pokeball6} alt = "pokeball6" /><p>6</p></button>
          <button className = "genButton" onClick={() => this.handleGenChange(7)}><img src = {pokeball7} alt = "pokeball7" /><p>7</p></button>
        </div>
        <PokeList handleOnClick={this.handleOnClick} generation={this.state.generation} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
      </>
    );
  }
}

export default App;