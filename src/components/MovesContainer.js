const MovesContainer = ({ moves }) => {
  return (
    <div>
      <h2 className="pb-05">Moves</h2>
      <div className="moves-container pb-05">
        {moves.map((m) => (
          <div key={m.name} className={m.type + "-border mx-0 moves-card"}>
            <div>
              <img
                alt="type"
                src={`${process.env.PUBLIC_URL}/assets/types/${m.type}.png`}
                className="type-bubble-move"
              />
            </div>
            <div>
              <h3>
                {m.name}
                <span className="thin"> ({m.damageType})</span>
              </h3>
            </div>
            <div className="tiny">
              <p> {m.hasOwnProperty("power") ? "POW: " + m.power : "Status"}</p>
              <p>ACC: {m.accuracy}</p>
              <p>
                PP:{m.pp.current}/{m.pp.max}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovesContainer;
