const AbilityContainer = ({ ability }) => {
  return (
    <div class="pb-05">
      <h2 className="pb-05">Ability</h2>
      <div className="card">
        <h3>{ability.name}</h3>
        <p class="thin">{ability.description}</p>
      </div>
    </div>
  );
};

export default AbilityContainer;
