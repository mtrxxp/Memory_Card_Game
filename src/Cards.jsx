import React from 'react';
import { useState } from 'react';

const images = [
  '/images/image1.jpeg',
  '/images/image2.jpeg',
  '/images/image3.jpeg',
  '/images/image4.jpeg',
  '/images/image5.jpeg',
  '/images/image6.jpeg',
  '/images/image7.jpeg',
  '/images/image8.jpeg',
  '/images/image9.jpeg',
  '/images/image10.jpeg',
  '/images/image11.jpeg',
  '/images/image12.jpeg'
];

function Cards() {
  const [count, setCount] = useState(0);
  const [record, setRecord] = useState(0);
  const [clicks, setClicks] = useState(Array(12).fill(0));
  const [shuffledButtons, setShuffledButtons] = useState(images.map((image, index) => ({ image, index })));

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleButtonClick = (index) => {
    const newClicks = [...clicks];
    newClicks[index] += 1;

    if (newClicks[index] === 2) {
      if (count > record) setRecord(count);
      setCount(0);
      newClicks.fill(0);
    } else {
      setCount(count + 1);
    }

    setClicks(newClicks);
    setShuffledButtons(shuffleArray(shuffledButtons));
  };

  return (
    <div className="container">
      {shuffledButtons.map((button, index) => (  
        <button key={button.index} onClick={() => handleButtonClick(button.index)} className="Cards" style={{backgroundImage: `url(${button.image})`}}>
        </button>
      ))}
      <h2 className="score">Your score = {count}</h2>
      <h2 className="record">Your record = {record}</h2>
      <div style={{padding: '10px'}}></div>
    </div>
  );
}

export default Cards;