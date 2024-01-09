// import logo from './logo.svg';
import React from 'react';
import PlayerList from './Player/PlayerList';
import axios from 'axios'
import PlayerForm from './Player/PlayerForm';
import PlayerSingle from './Player/PlayerSingle';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props); // assigns our props to our contructor
    this.state = {
      players: [],
      currentPlayer: {},
    }

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this); // allows us to use the function in our class
  }

  componentDidMount(){
    const url = 'http://localhost:4000/players';

    axios.get(url)
      .then((Response) => {
        this.setState({
          players: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    })
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav>
            <div className="nav-wrapper blue darken-1">
              <a href="/" className="brand-logo">Soccer</a>
            </div>
          </nav>
        </div>

        <div className="row">
          <div className='col s3'>< PlayerList players={this.state.players} // we are passing players and updateCurrentPlayer as props
            updateCurrentPlayer={this.updateCurrentPlayer}/>
          </div>
          <div className='col s9'>< PlayerSingle player={this.state.currentPlayer}/></div>
        </div>

        <div className="row">
          <div className='col s12'>< PlayerForm /></div>
        </div>
      </div>
    );
  }
}

export default App;
