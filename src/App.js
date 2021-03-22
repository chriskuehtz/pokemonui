import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./scss/main.css";

import MovesContainer from "./components/MovesContainer";
import HeadContainer from "./components/HeadContainer";

function App() {
  const [team, setTeam] = useState([
    {
      name: "Squirtle",
      uuid: uuidv4(),
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      number: 7,
      type: "Water",
      lvl: 5,
      hp: 20,
      moves: ["Tackle", "Withdraw", "Water Gun"],
      collapsed: true,
    },
    {
      name: "Bulbasaur",
      uuid: uuidv4(),
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      number: 1,
      type: "Grass",
      lvl: 5,
      hp: 21,
      moves: ["Tackle", "Vine Whip", "Growl"],
      collapsed: true,
    },
    {
      name: "Charmander",
      uuid: uuidv4(),
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
      number: 4,
      type: "Fire",
      lvl: 5,
      hp: 19,
      moves: ["Scratch", "Ember", "Growl"],
      collapsed: true,
    },
  ]);

  const collapse = (x) => {
    let temp = team.map((t) => {
      if (t.uuid === x) {
        return { ...t, collapsed: !t.collapsed };
      } else return t;
    });

    setTeam(temp);
  };
  return (
    <div className="card-stack">
      {team.map((t) => (
        <div key={t.uuid} className="card" onClick={() => collapse(t.uuid)}>
          <HeadContainer mon={t} />
          {t.collapsed === false ? <MovesContainer moves={t.moves} /> : ""}
        </div>
      ))}
    </div>
  );
}

export default App;
