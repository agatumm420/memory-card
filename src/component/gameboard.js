import React, { Component,useEffect, useState}from 'react';
import Card from './card';
import uniqid from 'uniqid';
const pics=[
    {
        src:'https://i.pinimg.com/564x/a8/13/e4/a813e436f0523e6f4d93830179029039.jpg',
        nr:1
    },
    {
        src:'https://i.pinimg.com/564x/02/03/f9/0203f9b4be6d0a710d75139912d55ce8.jpg',
        nr:2
    },
    {
        src:'https://i.pinimg.com/564x/14/1c/51/141c51f772c26257543c2ba74acd7e09.jpg',
        nr:3
    },
    {
        src:'https://i.pinimg.com/564x/53/12/4b/53124bbff014c3e8d64b74cf81d6c916.jpg',
        nr:4
    },
    {
        src:'https://i.pinimg.com/564x/c6/6c/39/c66c39d5139c1772bf09abf816494a18.jpg',
        nr:5
    },
    {
        src:'https://i.pinimg.com/564x/d9/35/5d/d9355da8dc325441c273464e2f2c2ab1.jpg',
        nr:6
    },
    {
        src:'https://i.pinimg.com/564x/98/bf/8b/98bf8b2ff26a3818e7f0cfbf150dbb34.jpg',
        nr:7
    },
    {
        src:'https://i.pinimg.com/564x/50/90/c8/5090c8d502ed63d73665d54a43bd77dd.jpg',
        nr:8
    },
    {
        src:'https://i.pinimg.com/564x/6a/f2/f7/6af2f7bff0f52bfdfa02b9c10c0dda85.jpg',
        nr:9
    },
    {
        src:'https://i.pinimg.com/564x/cf/1c/b7/cf1cb76f1dabf13ee5b8343ca931df1b.jpg',
        nr:10
    },
    {
        src:'https://i.pinimg.com/564x/bb/59/d1/bb59d1b79250dd61cebfaa50344c49e9.jpg',
        nr:11  
    },
    {
            src:'https://i.pinimg.com/564x/58/c7/24/58c724b23fff6e0fef4ffae76fef9029.jpg',
            nr:12

        }   
    


]
const colors=[
    {
        backgroundColor:'#F90F8F',
    },
    {
        backgroundColor:'#F75FB0'
    },
    {
        backgroundColor:'#FAA6CF'
    },
    {
        backgroundColor:'#F62DD2'
    },



]
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
const styles={
    color1:{
        backgroundColor:'#F90F8F',
    },
    color2:{
        backgroundColor:'#F75FB0'
    },
    color3:{
        backgroundColor:'#FAA6CF'
    },
    color4:{
        backgroundColor:'#F62DD2'
    }
}
class Gameboard extends Component{
   constructor(props){
       super(props)
       this.state={
           clicked:[],
           shuffle:false,
           score:0,
       }
   }
   sendDatatoParent(){
        this.props.onClick(this.state.resetCounter, this.state.score);
   }
   onClick(nr){
       if(this.state.clicked.includes(nr)){
            
            this.setState({score:0});
            this.setState({clicked:[]})
            this.props.Change( this.state.score);
           
       }
       else{
            let joined = this.state.clicked.concat(nr);
            
            this.setState({clicked:joined});
            this.setState({score: ++this.state.score});
            console.log(this.state.clicked);
            this.setState({shuffle:true});
            shuffleArray(pics);
            
                this.setState({shuffle:false});
            
            
            this.props.Change( this.state.score);
       }
        
   }
   
   render(){
       return <div className='gameboard'  resetCounter={this.state.resetCounter} score={this.state.score}>
              {
                  pics.map((pic, index)=>{
                      return <Card src={pic.src} number={pic.nr} shuffle={this.state.shuffle} onClick={this.onClick.bind(this)} stylez={index%4==0?styles.color1: (index%4==1? styles.color2: (index%4==2? styles.color3: styles.color4) )} key={uniqid()}/>
                  })
              }
       </div>
   }
}
export default Gameboard ;