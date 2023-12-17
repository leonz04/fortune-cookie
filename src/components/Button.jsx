import React from 'react'
import getRandomFromArr from '../services/getRandomFromArr'
import phrases from "../services/phrases.json"
import wallpaper from "../services/photos.json"

const Button = ({setQuote,quote,setWallRandom}) => {

  
  
    const changePhrase=() =>{  
      const newRandomPhrase=getRandomFromArr(phrases);   
 
      
      if (newRandomPhrase===quote){
        changePhrase();

      }else{
        setQuote(newRandomPhrase);

      }
        
        setWallRandom(getRandomFromArr(wallpaper))
    }
  return (
    <button className="app__btn" onClick={changePhrase}>Abrir Galleta</button>
  )
}

export default Button
