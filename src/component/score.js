import React, {useEffect, useState}from 'react';
const Score=(props)=>{
    const [score, setScore]= useState(0);
    const [best, setBest]= useState(0);
    useEffect(()=>{
        setScore(props.score);
        if(props.score>best){
            setBest(props.score);
        }
    },[props.score])
    return <div className='score-box'>
                <p>Score: {score} </p>
                <p>Best score: {best}</p>

        </div>
}
export default Score;