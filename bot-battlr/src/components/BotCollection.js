import React, { useState } from "react";
import BotCard from "./BotCard";
import YourBotArmy from "./YourBotArmy";

const BotCollection = ({ bots }) => {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const handleEnlistBot = (bot) => {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  return (
    <div>
      <div className="bg-lime-400">
      <YourBotArmy enlistedBots={enlistedBots} />
      </div>

      <div className=" flex flex-wrap flex-row ">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onEnlistBot={handleEnlistBot} />
      ))}
      </div>
    </div>
  );
};

export default BotCollection;
