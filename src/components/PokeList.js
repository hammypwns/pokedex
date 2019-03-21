import React, { Component } from 'react';
import PokeCell from './PokeCell';
import axios from 'axios';
import { generations } from '../generations';
import './styles/PokeList.css';

class PokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: [],
    };
  }

  async fetchCells() {
    let cells = [];
    const start = generations[this.props.generation].begin;
    const end = generations[this.props.generation].end;
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
        {this.state.cells}
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