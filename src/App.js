import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./scss/main.css";

import MovesContainer from "./components/MovesContainer";
import HeadContainer from "./components/HeadContainer";
import StatContainer from "./components/StatContainer";
import AbilityContainer from "./components/AbilityContainer";
import ExpContainer from "./components/ExpContainer";

function App() {
  const [team, setTeam] = useState([
    {
      name: "Squirtle",
      uuid: uuidv4(),
      number: "007",
      type: "water",
      exp: 127,
      ability: {
        name: "Pick Up",
        description: "May pick up items from the floor",
      },
      stats: {
        hp: { current: 8, total: 20 },
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
          damageType: "P",
          power: 40,
          accuracy: 100,
          pp: { current: 5, max: 35 },
        },
        {
          name: "Headbutt",
          type: "normal",
          damageType: "P",
          power: 70,
          accuracy: 100,
          pp: { current: 5, max: 35 },
        },
        {
          name: "Withdraw",
          type: "normal",
          damageType: "ST",
          accuracy: 100,
          pp: { current: 5, max: 35 },
        },
        {
          name: "Water Gun",
          type: "water",
          damageType: "S",
          power: 40,
          accuracy: 100,
          pp: { current: 25, max: 25 },
        },
      ],
      collapsed: true,
    },
    {
      name: "Bulbasaur",
      uuid: uuidv4(),
      number: "001",
      type: "grass",
      exp: 100,
      stats: {
        hp: { current: 0, total: 20 },
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
      number: "004",
      type: "fire",
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
      number: "010",
      type: "bug",
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
      number: "016",
      type: "flying",
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
      number: "025",
      type: "electric",
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
        <div
          key={t.uuid}
          className={"card " + t.type + "-border"}
          onClick={() => collapse(t.uuid)}
        >
          <HeadContainer mon={t} />
          {t.collapsed === false ? (
            <div>
              <ExpContainer exp={t.exp} />
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
