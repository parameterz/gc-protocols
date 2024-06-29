import React, { useState, useEffect } from 'react';
import ProtocolSelector from './components/ProtocolSelector';
import ImageViewer from './components/ImageViewer';
import NavigationControls from './components/NavigationControls';
import './App.css';

function App() {
  const [protocols, setProtocols] = useState([]);
  const [currentProtocol, setCurrentProtocol] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/protocols/protocolList.json')
      .then(res => res.json())
      .then(data => setProtocols(data));
  }, []);

  const handleProtocolSelect = (file) => {
    if (file) {
      fetch(`/protocols/${file}`)
        .then(res => res.json())
        .then(data => setCurrentProtocol(data));
    } else {
      setCurrentProtocol([]);
    }
    setCurrentIndex(0);
  };

  const currentImage = currentProtocol.length > 0 ? currentProtocol[currentIndex] : null;

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % currentProtocol.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + currentProtocol.length) % currentProtocol.length);
  };

  const handleSkip = (index) => {
    if (index >= 0 && index < currentProtocol.length) {
      setCurrentIndex(index);
    }
  };

  return (
    <div>
      <h1>Echo Protocol Viewer</h1>
      <ProtocolSelector protocols={protocols} onSelect={handleProtocolSelect} />
      {currentImage && (
        <>
          <div className="description">
            <h2>{currentImage.title}</h2>
            <p>{currentImage.description}</p>
          </div>
          <div className="imageViewer">
            <ImageViewer currentImage={currentImage} />
          </div>
        </>
      )}
      {currentProtocol.length > 0 && (
        <div className="navigationControls">
          <NavigationControls
            currentIndex={currentIndex}
            total={currentProtocol.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSkip={handleSkip}
          />
        </div>
      )}
    </div>
  );
}

export default App;
