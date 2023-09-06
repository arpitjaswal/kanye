import React from 'react';

const Button = () => {
  const playAudio = () => {
    const audio = new Audio('src/assets/buttonsound.mp3'); 
    audio.play();
  };

  const fetchQuote = () => {
    fetch("https://api.kanye.rest/")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        document.getElementById("quote").innerHTML = res.quote;
      });
  };

  const handleButtonClick = () => {
    playAudio();
    fetchQuote();
  };

  return (
    <>
      <button onClick={handleButtonClick}>
        Go back in the past!
      </button>
    </>
  );
};

export default Button;
