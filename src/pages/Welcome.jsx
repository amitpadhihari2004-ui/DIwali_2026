
import { useNavigate } from 'react-router-dom';
function Welcome({ onStartMusic })  {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <div className="particles">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="particle"></span>
        ))}
      </div>

      <div className="welcome-content">
        <div className="diya">🪔</div>

        <p className="small-title">THE FESTIVAL OF LIGHTS</p>

        <h1>Happy Diwali</h1>
        <h2>2026 ✨</h2>

        <p className="welcome-message">
          May your life shine with happiness,
          love, prosperity and endless blessings.
        </p>

       <button
  className="enter-btn"
  onClick={async () => {
    const success = await onStartMusic();
    navigate('/celebration');

    if (!success) {
      alert('Music could not play. Please check your MP3 file.');
    }
  }}
>
  Enter the Celebration ✨
</button>

        <p className="bottom-text">
          A little light can brighten the world
        </p>
      </div>
    </div>
  );
}

export default Welcome;
