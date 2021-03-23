import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./scss/main.css";

import MovesContainer from "./components/MovesContainer";
import HeadContainer from "./components/HeadContainer";
import StatContainer from "./components/StatContainer";
import AbilityContainer from "./components/AbilityContainer";

function App() {
  const [team, setTeam] = useState([
    {
      name: "Squirtle",
      uuid: uuidv4(),
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      number: 7,
      type: "Water",
      exp: 100,
      ability: {
        name: "Pick Up",
        description: "May pick up items from the floor",
      },
      stats: {
        hp: { current: 20, total: 20 },
        atk: { current: 9, total: 9 },
        def: { current: 11, total: 11 },
        spa: { current: 10, total: 10 },
        spd: { current: 12, total: 12 },
        spe: { current: 9, total: 9 },
      },
      moves: [
        {
          name: "Tackle",
          type: "normal",
          damageType: "phys",
          pp: { current: 5, max: 35 },
          description: "tackles hard",
        },
      ],
      collapsed: true,
    },
    {
      name: "Bulbasaur",
      uuid: uuidv4(),
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      number: 1,
      type: "Grass",
      exp: 100,
      stats: {
        hp: { current: 20, total: 20 },
        atk: { current: 9, total: 9 },
        def: { current: 11, total: 11 },
        spa: { current: 10, total: 10 },
        spd: { current: 12, total: 12 },
        spe: { current: 9, total: 9 },
      },
      moves: ["Tackle", "Vine Whip", "Growl"],
      collapsed: true,
    },
    {
      name: "Charmander",
      uuid: uuidv4(),
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
      number: 4,
      type: "Fire",
      exp: 100,
      stats: {
        hp: { current: 20, total: 20 },
        atk: { current: 9, total: 9 },
        def: { current: 11, total: 11 },
        spa: { current: 10, total: 10 },
        spd: { current: 12, total: 12 },
        spe: { current: 9, total: 9 },
      },
      moves: ["Scratch", "Ember", "Growl"],
      collapsed: true,
    },
    {
      name: "Caterpie",
      uuid: uuidv4(),
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
      number: 10,
      type: "Bug",
      exp: 100,
      stats: {
        hp: { current: 20, total: 20 },
        atk: { current: 9, total: 9 },
        def: { current: 11, total: 11 },
        spa: { current: 10, total: 10 },
        spd: { current: 12, total: 12 },
        spe: { current: 9, total: 9 },
      },
      moves: ["Tackle", "String Shot"],
      collapsed: true,
    },
    {
      name: "Pidgey",
      uuid: uuidv4(),
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
      number: 16,
      type: "Flying",
      exp: 100,
      stats: {
        hp: { current: 20, total: 20 },
        atk: { current: 9, total: 9 },
        def: { current: 11, total: 11 },
        spa: { current: 10, total: 10 },
        spd: { current: 12, total: 12 },
        spe: { current: 9, total: 9 },
      },
      moves: ["Tackle", "Gust", "Sand Attack"],
      collapsed: true,
    },
    {
      name: "Pikachu",
      uuid: uuidv4(),
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      number: 25,
      type: "Electric",
      exp: 100,
      stats: {
        hp: { current: 20, total: 20 },
        atk: { current: 9, total: 9 },
        def: { current: 11, total: 11 },
        spa: { current: 10, total: 10 },
        spd: { current: 12, total: 12 },
        spe: { current: 9, total: 9 },
      },
      moves: ["Thundershock", "Tackle", "Growl"],
      collapsed: true,
    },
  ]);

  const collapse = (x) => {
    let temp = team.map((t) => {
      if (t.uuid === x) {
        return { ...t, collapsed: !t.collapsed };
      } else return { ...t, collapsed: true };
    });

    setTeam(temp);
  };
  return (
    <div className="card-stack">
      {team.map((t) => (
        <div key={t.uuid} className="card" onClick={() => collapse(t.uuid)}>
          <HeadContainer mon={t} />
          {t.collapsed === false ? (
            <div>
              <AbilityContainer ability={t.ability} />
              <MovesContainer moves={t.moves} />
              <StatContainer stats={t.stats} />
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
