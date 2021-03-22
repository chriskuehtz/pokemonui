import react from "react";

const MovesContainer = ({ moves }) => {
  return (
    <div className="moves-container">
      {moves.map((m) => (
        <div key={m} className="card mx-0">
          {m}
        </div>
      ))}
    </div>
  );
};

export default MovesContainer;
