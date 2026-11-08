
function FlowerBloom() {
  return (
    <div className="flower-container">
      <div className="lotus">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="petal"
            style={{ '--angle': `${i * 45}deg` }}
          />
        ))}
        <div className="flower-center"></div>
      </div>
    </div>
  );
}

export default FlowerBloom;
