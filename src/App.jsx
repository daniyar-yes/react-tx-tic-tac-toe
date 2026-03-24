import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    console.log(`hi from event Click on ${value}`);
    setValue('X')
  }

  function handleMouseHover() {
    console.log(`hi from hover event on ${value}`)
  }
  return (
    <button 
      className="square" 
      onClick={handleClick}
      onMouseEnter={handleMouseHover}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
