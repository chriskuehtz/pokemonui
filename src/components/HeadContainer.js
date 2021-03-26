import Progress from "../reusables/Progress.js";

const HeadContainer = ({ mon }) => {
  const lvl = parseInt(Math.cbrt(mon.exp));

  return (
    <div className="head-container">
      <img
        alt="pokemon"
        src={
          "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" +
          mon.number +
          ".png"
        }
        className={
          mon.stats.hp.current !== 0 ? "pokemon-img" : "pokemon-img fainted"
        }
      />
      <div>
        <div className="mb-05 head-line">
          <h2 className="mr-1">{mon.name}</h2>
          <h2 className="mr-1 lvl d-none d-tablet-block">Lvl:{lvl}</h2>
          <img
            alt="type"
            src={`${process.env.PUBLIC_URL}/assets/types/${mon.type}.png`}
            className="type-bubble-headline d-none d-tablet-block"
          />
        </div>

        <div>
          <Progress
            value={mon.stats.hp.current / mon.stats.hp.total}
            color="green"
          />
          <p className="my-05 subline">
            <span className="bold mr-1 d-tablet-none">Lvl:{lvl}</span>
            <span>
              HP:{mon.stats.hp.current}/{mon.stats.hp.total}
            </span>
            <img
              alt="type"
              src={`${process.env.PUBLIC_URL}/assets/types/${mon.type}.png`}
              className="type-bubble-head d-tablet-none"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadContainer;
