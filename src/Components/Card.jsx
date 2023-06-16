import React from 'react';
import '../Styles/Card.css';
import teamArr from '../images'

export default function Card(props) {
  const [selected, setSelected] = React.useState(0);
  // Create a state of all active team logo elements?
  // Maybe its an object with each team and the amount of times its been selected

  function randomLogo(array) {
    const randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
  }

  function handleClick() {
    setSelected(prevState => prevState + 1);
    if (selected > 1) {
      return (
        <h1>YOU LOSE!</h1>
      )
    }
    console.log(selected);
  }

  // React.useEffect(() => {
  //   console.log('render');
  // }, []);

  return (
    <div className='card--container' selected={selected} onClick={handleClick}>
      <img className='logo' src={randomLogo(teamArr)} />
    </div>
  )
}
