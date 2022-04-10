
import React, {Component} from 'react';
import './App.css';
import Header from './component/header';
import Gameboard from './component/gameboard';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      resetCounter:false,
      score:0,
    }
  }
  Change( score){
   
    if(this.state.score!=score){
      this.setState({score: score});
    }
    
  }
  render(){
    return <div>
              <Header score={this.state.score}/>
              <div className='container'>
                <p className='text'> Get a point for each 00' pink outfit lady you find! </p>
                <p className='text'> Do not click on the same one! </p>
                <Gameboard Change={this.Change.bind(this)}/>
              </div>
              
          </div>
  }
}

export default App;
