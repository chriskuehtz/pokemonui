import react from "react";
import "../scss/main.css";

const HeadContainer = ({ mon }) => {
  return (
    <div className="head-container">
      <h1>{mon.name}</h1>
      <img src={mon.img} />
      <span>Lvl:{mon.lvl}</span>
      <span>HP:{mon.hp}</span>
    </div>
  );
};

export default HeadContainer;
