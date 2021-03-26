import Progress from "../reusables/Progress.js";

const ExpContainer = ({ exp }) => {
  const lvl = parseInt(Math.cbrt(exp));
  const currentExp = exp - Math.pow(lvl, 3);
  const nextlvl = Math.pow(lvl + 1, 3) - Math.pow(lvl, 3);
  const expToNextLvl = nextlvl - currentExp;
  return (
    <div className="pb-05">
      <h2 className="pb-05">Experience</h2>
      <div className="card border">
        <div className="progress-segment-reverse">
          <span className="bold">Lvl:</span>
          <span className="bold">{lvl}</span>
          <Progress value={currentExp / nextlvl} color="blue" />
        </div>
        <p className="my-05 thin subline">
          <span>To next Level: {expToNextLvl}</span>
          <span>Total Exp: {exp}</span>
        </p>
      </div>
    </div>
  );
};

export default ExpContainer;
