import { useEffect, useState } from 'react'
import Card from './Components/Card'
import './Styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  // function onClick() {
  //   // Maybe create an individual boolean state for each element that can tell if
  //   // its been clicked before
  //   // setCount
  // }

  // useEffect(() => {
  //   // if (selection is correct) {
  //   //   setCount(prevCount => prevCount + 1)
  //   // } else {
  //   //   const highScore = prevCount;
  //   //   setCount(0)
  //   // }
  // }, [count])

  function renderCards(e) {
    console.log(e.target.name);
    const difficulty = e.target.name;
    let n = 0;
    switch(difficulty) {
      // Maybe create an array of n randomly selected elements and then just use that array
      // Avoids issue of new elements being selected each render
      case 'easy':
        n = 8;
        break;
      case 'medium':
        n = 16;
        break;
      case 'hard':
        n = 24;
        break;
      case 'very hard':
        n = 30;
        break;
    }
    console.log(n);
    for (let i = 0; i < n; i++) {
      console.log('rendered');
      return (
        <Card count={count} />
      )
    }
  }

//   const n = 8; // Or something else

// [...Array(n)].map((e, i) => <Card key={i} count={count} />)

  return (
    <div className='container'>
      <h2>Choose difficulty</h2>
      <div className='diff--container'>
        <button onClick={renderCards} name='easy'>Easy</button>
        <button onClick={renderCards} name='medium'>Medium</button>
        <button onClick={renderCards} name='hard'>Hard</button>
        <button onClick={renderCards} name='very hard'>Very Hard</button>
      </div>
      <ul>
        {renderCards}
      </ul>
      {/* {[...Array(setDifficulty)].map((e, i) => <Card key={i} count={count} />)} */}
      {/* {setDifficulty && <Card count={count} />} */}
    </div>
  )
}

export default App
