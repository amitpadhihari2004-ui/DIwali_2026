
import FlowerBloom from '../components/FlowerBloom';
import { useNavigate } from 'react-router-dom';

function Celebration() {
  const navigate = useNavigate();

  return (
    <div className="celebration-page">

      {/* Falling Flowers */}
      <div className="petals">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} style={{ '--i': i }} />
        ))}
      </div>

      {/* Fireworks */}
      <div className="fireworks">
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
      </div>

      {/* Main Content */}
      <div className="celebration-content">

        <p className="celebration-label">
          A FESTIVAL OF LOVE AND LIGHT
        </p>

        <FlowerBloom />

        <h1>Happy Diwali 2026</h1>

        <h2>
          ✨ May Your Life Bloom With Happiness ✨
        </h2>

        <p className="celebration-message">
          May every diya bring you hope,
          every flower bring you joy,
          and every light bring endless prosperity.
        </p>

        <div className="celebration-diyas">
          🪔 🪔 🪔
        </div>

        <button
          className="home-btn"
          onClick={() => navigate('/')}
        >
          ↩ Back to Welcome
        </button>

        <p className="celebration-footer">
          Made with love ❤️ from padhihari familyfor Diwali 2026
        </p>

      </div> 
    </div>
  );
}

export default Celebration;
