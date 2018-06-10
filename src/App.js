import React, { Component } from 'react';
import './styles/App.css';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import GifModal from './components/GifModal';

class App extends Component {

  state = {
    gifs: [],
    selectedGif: null,
    modalIsOpen: false,
  }

  getGifs = async (e) => {

    e.preventDefault();
    const term = e.target.value;
    const api_call = await fetch(`https://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=${process.env.REACT_APP_KEY}`);
    const data = await api_call.json();
    console.log(data);

    this.setState({
      gifs: data.data
    });

  }

  openModal(gif) {
    this.setState({
      selectedGif: gif,
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      selectedGif: null,
      modalIsOpen: false
    });
  }


  render() {
    return (
      <div className="header">
      <h1 className="title">React Gif Search</h1>
      <div className="app">
        <SearchBar getGifs={this.getGifs}/>
        <GifList  gifs={this.state.gifs}
                  onGifSelect={selectedGif => this.openModal(selectedGif) }/>
        <GifModal modalIsOpen={this.state.modalIsOpen}
                  selectedGif={this.state.selectedGif}
                  onRequestClose={() => this.closeModal()} />
      </div>
      </div>
    );
  }
}

export default App;
