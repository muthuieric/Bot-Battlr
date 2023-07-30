import React from "react";

const BotCollection = ({ bots,title}) => {
  return (
    <div className="bot-collection">
      <h2>{title}</h2>
      {bots.map((bot) => (
        <div className="mt-8 bg-white rounded w-80 m-2 border-2"  key={bot.id}>
         <img className="bg-gray-300 w-full h-32 sm:h-48 object-cover" src={bot.avatar_url} alt={bot.name} />
         <div className="mt-4 " >
         <h1 className="font-bold text-2xl">{bot.name}</h1>
         <p className="text-gray-500"style={{ maxWidth: "100%", wordWrap: "break-word" }}>{bot.catchphrase}</p>
         </div>
         <div className="mt-4  text-gray-500 border-t border-gray-400 pt-2">
         <p>Health: {bot.health}</p>
         <p>Damage: {bot.damage}</p>
         <p>Armor: {bot.armor}</p>
         </div>
       </div>
      ))}
    </div>
  );
};

export default BotCollection;

