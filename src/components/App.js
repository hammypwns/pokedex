import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import axios from 'axios';
import Pokemon from '../Pokemon';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    /*fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`, {crossDomain: true})
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });
      })
      .catch(err => console.log(err));*/

      axios.get(`http://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => {
          const pokemon = new Pokemon(res.data);

          this.setState({ pokemon });
        })
  }

  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;