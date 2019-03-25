import React, { Component } from 'react';
import PokeCell from './PokeCell';
import axios from 'axios';
import { generations } from '../generations';
import './styles/PokeList.css';
import pokeball from '../assets/pokeball.gif';

let loadingName;
const loadingNames = ["Loading...", "Gotta Load 'em All", "Becoming the Very Best...",
    "Connecting to PokéDatabase...", "Scanning Pokéballs...", "Consulting with Professor Oak...",
    "Making Poffins...", "Teaching Pikachu to Surf...", "Fixing Misty's Bike...",
    "Pulling Brock away from Nurse Joy...", "Ruining Team Rocket's Plans",
    "Light-years isn't time... It measures distance!", "Challenging Elite Four...",
    "Selling Nuggets...", "Stocking Up on Rare Candies", "Flying on Pidgey (But Not Charizard)"]


const LoadingComponent = () => {
  loadingName = loadingNames[Math.floor(Math.random()*loadingNames.length)];
  return (
    <section className='loading'>
      <img src = {pokeball} className='pokeballGif' alt="Pokeball gif"></img> <br/>
      {loadingName}
    </section>
  )
}

class PokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: [],
      loading: false,
    };
  }

  async fetchCells() {
    let cells = [];
    const start = generations[this.props.generation].begin;
    const end = generations[this.props.generation].end;
    this.setState({ loading: true });
    console.log(`loading cells for gen ${this.props.generation}`);
    for (let i = start; i <= end; i++) {
      try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)

      const {data} = await response;

      cells[i-1]=
        <PokeCell
            key={data.id}
            id={data.id}
            handleOnClick={this.props.handleOnClick}
            pokeImg={data.sprites.front_default}
        />
      }
      catch (error) {
        console.log(error);
      }
    };

    console.log(`done loading cells for gen ${this.props.generation}`)
    this.setState({ loading: false });
    this.setState({cells});
    console.log(this.state.cells);
  }

  componentDidMount() {
    this.fetchCells();
  }

  componentDidUpdate(prevProps) {
    // if(this.props.update === true){
    //   this.fetchCells();
    // }

    if (this.props.generation !== prevProps.generation) {
      this.fetchCells();
    }
  }

  render() {
    //console.log("Render Gen:");
    //console.log(this.props.generation);
    return (
      <section className="poke-list">
        {this.state.loading ? <LoadingComponent /> : this.state.cells}
      </section>
    )
  }
}

export default PokeList;













/*
 const PokeList = ({ handleOnClick }) => {

    for (let i = start; i <= end; i++) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            .then( res => {
                let data = res.data;
                cells[i-1]=
                    <PokeCell
                        key={data.id}
                        handleOnClick={handleOnClick}
                        pokeImg={data.sprites.front_default}
                    />
            });
    }

    console.log(cells);
//}
*/

/*
const PokeList = ({ handleOnClick }) => {

  for (let i = GEN1_START; i <= GEN1_END; i++) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then( res => {
            let data = res.data;
            cells[i-1]=
                <PokeCell
                    key={data.id}
                    id={data.id}
                    handleOnClick={handleOnClick}
                    pokeImg={data.sprites.front_default}
                />
        });
  }
*/

 /*
  const cells = pokeClasses.map(pokeClass => {
    return (
      <PokeCell
        key={pokeClass.id}
        id={pokeClass.id}
        //pokeClass={pokeClass}
        handleOnClick={handleOnClick}
        pokeImg='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png'
      />
    );
  });
  */

//  componentDidMount() {
//   let cells = [];

//   URLS.forEach(url => {
//     promises.push(axios.get(url));
//   })

//   axios.all(promises).then(results => {
//     results.forEach(res => {
//       let data = res.data;
//       cells.push(
//           <PokeCell
//               key={data.id}
//               id={data.id}
//               handleOnClick={this.props.handleOnClick}
//               pokeImg={data.sprites.front_default}
//           />)
//       console.log(cells);
//     })
//   });

//   console.log(cells);
// }