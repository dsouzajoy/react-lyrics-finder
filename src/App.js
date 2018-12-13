import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

class App extends Component {
  
constructor(props) {
    super(props);
    this.state = {
     artist:null,
        song:null,
        lyrics:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange = (e) => {
    this.setState({
        ...this.state,
        [e.target.id]:e.target.value
    });
}

handleSubmit = (e) => {
    e.preventDefault();
    this.setState({...this.state,lyrics:"Loading..."});
    var getString = 'https://api.lyrics.ovh/v1/'+this.state.artist+'/'+this.state.song;
        fetch(getString)
      .then(response => response.json())
      .then(data =>{ 
            if(data.lyrics !== undefined){
            this.setState({...this.state,lyrics:data.lyrics})
                }else{
                     this.setState({...this.state,lyrics:"Lyrics not found"})
                }
        });
}

  render() {
       var {artist,song,lyrics} = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="form-div container">
        <form onSubmit={this.handleSubmit}>
         <input type="text" id="artist" placeholder="enter artist name" onChange={this.handleChange}/><br />
        <input type="text" id="song" placeholder="enter song name" onChange={this.handleChange}/><br />
        <button className="waves-effect waves-light btn" type="submit">Find Lyrics</button>
        </form>
        </div>
        <div className="disp-lyrics container">
        {lyrics}
        </div>
        <div className="make-space">
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
