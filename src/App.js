import React, { Component } from 'react';
import CardList from './components/CardList/card-list.component'
import SearchBox from './components/SearchBox/search-box.component'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      monsters: [],
      searchText: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(monsters => this.setState({ monsters: monsters }))
  }

  render() {
    const { monsters, searchText } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchText.toLowerCase()))
    return (
      <div className="App">
        <h1 style={{ marginBottom: '30px', marginTop: '0px', paddingTop: '100px' }}>Monsters Rolodex</h1>
        <SearchBox handleChange={(e) => this.setState({ searchText: e.target.value })} placeholder="Search Monsters"/>
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }

}

export default App;
