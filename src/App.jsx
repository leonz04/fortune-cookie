import { useState } from 'react'
import phrases from './services/phrases.json'
import getRandomFromArr from './services/getRandomFromArr'
import Phrase from './components/Phrase';
import Button from './components/Button';
import wallpaper from './services/photos.json'
import './App.css'
import './index.css'



function App() {

  const initialPhrase = getRandomFromArr(phrases);
  const initWallaper = getRandomFromArr(wallpaper);

  

  const [quote,setQuote] = useState(initialPhrase);
  const [wallRandom, setWallRandom] = useState(initWallaper)

  const objStyle={
    backgroundImage: `URL(/fondo${wallRandom}.png)`,
  }

  return (
    <div className="app "style={objStyle}>
            <h1 className="app__title">Galleta de la fortuna</h1>

      <div className="app__card">
      < Phrase quote={quote}/>
      <Button 
      setQuote={setQuote}
      quote={quote}
      setWallRandom={setWallRandom}/>
      </div>
     </div>

  )
}

export default App
