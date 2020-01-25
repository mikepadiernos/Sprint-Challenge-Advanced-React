import React from 'react';
import './css/App.css';
import Players from "./components/players/Players";

class App extends React.Component {

  state = {
    players: []
  };

  componentDidMount() {

    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(players => {
        console.log("fetch: players: ", players);
        this.setState({
          ...this.state,
          players: players
        });
      })
      .catch(err => console.log("error on fetch: ", err));

  }

  render() {
    return (
      <main className="app app-container">
        <header className="app-header">
          <h1 className="app-title">Players</h1>
        </header>
        <Players
          players={this.state.players}
        />
      </main>
    );
  }
}

export default App;
