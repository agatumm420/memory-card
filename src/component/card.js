import React, {useEffect, useState, Component}from 'react';
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
const styles={
    img:{
        width:170,
        height:250,
        borderRadius:25
        },
   
}
const Card =(props)=>{
    const Click=(ev)=>{
        const fieldName = ev.target.id;
     props.onClick(fieldName);
    }
   
    return <div className='card' style={props.stylez}  id={props.number}>
                <img src={props.src} style={styles.img} onClick={Click} id={props.number}/>
            </div>
}
export default Card;