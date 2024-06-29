import React from 'react';

function NavigationControls({ currentIndex, total, onPrevious, onNext, onSkip }) {
  const handleSkip = (event) => {
    const index = parseInt(event.target.value, 10) - 1;
    onSkip(index);
  };

  return (
    <div>
      <button onClick={onPrevious}>Previous</button>
      <span>{currentIndex + 1} / {total}</span>
      <button onClick={onNext}>Next</button>
      <input type="number" placeholder="Clip #" onChange={handleSkip} />
    </div>
  );
}

export default NavigationControls;
