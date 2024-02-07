// App.jsx
import React, { useEffect, useState } from 'react';
import BasicTabs from './components/BasicTabs';
import Intro from './components/Intro';
import './App.css';
import Footer from './components/Footer';

function App() {

  const [showFrame, setShowFrame] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the frame after
    const timeoutId = setTimeout(() => {
      setShowFrame(false);
    }, 2000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  if (showFrame) {
    return (
      <Intro />
    );
  } else {
    return (
      <>
        <BasicTabs />
        <Footer />
      </>
    );
  }

}

export default App;
