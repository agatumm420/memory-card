import React, {Component} from 'react';
import Score from './score.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../styles/header.css'
const styles={
    stars:{
        color:'#fff',
        width:50,
        height:50
    }
}
const Header =(props)=>{
   
   
        return <div className='header'>
                  <div className='logo'>
                      <FontAwesomeIcon icon={faStar} style={styles.stars}/>
                        <p>00's pink outfits memory game</p>
                        <FontAwesomeIcon icon={faStar} style={styles.stars}/>
                  </div>
                    <Score score={props.score}/>
                </div>
    
}
export default Header;