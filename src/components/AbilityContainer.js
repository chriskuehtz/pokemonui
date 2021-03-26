const AbilityContainer = ({ ability }) => {
  return (
    <div className="pb-05">
      <h2 className="pb-05">Ability</h2>
      <div className="card border">
        <h3>{ability.name}</h3>
        <p className="thin">{ability.description}</p>
      </div>
    </div>
  );
};

export default AbilityContainer;
