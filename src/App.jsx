import { Routes, Route, useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import Welcome from './pages/Welcome';
import Celebration from './pages/Celebration';

function App() {
  const audioRef = useRef(null);
  const location = useLocation();

  const startMusic = async () => {
    try {
      await audioRef.current.play();
      return true;
    } catch (error) {
      console.error('Music playback failed:', error);
      return false;
    }
  };

  // Stop music whenever user returns to Welcome page
  useEffect(() => {
    if (location.pathname === '/' && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [location.pathname]);

  return (
    <>
      <audio
        ref={audioRef}
        src="/diwalisong.mp3"
        loop
        preload="auto"
      />

      <Routes>
        <Route
          path="/"
          element={<Welcome onStartMusic={startMusic} />}
        />

        <Route
          path="/celebration"
          element={<Celebration />}
        />
      </Routes>
    </>
  );
}

export default App;