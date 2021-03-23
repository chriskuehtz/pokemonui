const MovesContainer = ({ moves }) => {
  return (
    <div>
      <h2 className="pb-05">Moves</h2>
      <div className="moves-container pb-05">
        {moves.map((m) => (
          <div key={m} className="moves-card mx-0">
            <div>
              <p>{m.type}</p>
              <p>{m.damageType}</p>
            </div>
            <div>
              <h3>{m.name}</h3>
              <p className="thin">{m.description}</p>
            </div>
            {m.pp.current}/{m.pp.max}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovesContainer;
