import Progress from "../reusables/Progress.js";

const HeadContainer = ({ mon }) => {
  const lvl = parseInt(Math.cbrt(mon.exp));
  const exp = mon.exp - Math.pow(lvl, 3);
  const nextlvl = Math.pow(lvl + 1, 3);

  return (
    <div className="head-container">
      <img alt="pokemon" src={mon.img} />
      <div>
        <h1>{mon.name}</h1>
        <div>
          <p className="progress-segment">
            <Progress value={exp / nextlvl} color="black" />
            <span>Lvl:{lvl}</span>
          </p>
          <p className="progress-segment">
            <Progress value={mon.stats.hp.current / mon.stats.hp.total} />
            <span>
              HP:{mon.stats.hp.current}/{mon.stats.hp.total}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadContainer;
