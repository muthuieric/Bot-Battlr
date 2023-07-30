import React, { useState } from "react";
import BotCard from "./BotCard";
import YourBotArmy from "./YourBotArmy";

const BotCollection = ({ bots, title}) => {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const handleEnlistBot = (bot) => {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const handleReleaseBot = (botId) => {
    setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
  };


  const handleDischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
        }
      });
  };
  return (
    <div>
      <div className="bg-lime-400">
      <YourBotArmy enlistedBots={enlistedBots} onReleaseBot={handleReleaseBot} />
      </div>
      <h2 className="font-bold text-4xl">{title}</h2>
      <div className=" flex flex-wrap flex-row ">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onEnlistBot={handleEnlistBot}
         onReleaseBot={handleReleaseBot}
         onDischargeBot={handleDischargeBot}
         />
      ))}
      </div>
    </div>
  );
};

export default BotCollection;
