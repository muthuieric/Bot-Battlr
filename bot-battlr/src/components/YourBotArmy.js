import React from "react";

const YourBotArmy = ({ enlistedBots }) => {
  return (
      <div className=" flex flex-wrap flex-row ">
      {enlistedBots.map((bot) => (
        <div className="mt-8 bg-white rounded w-80 m-2 border-2 flex-shrink-0" key={bot.id}>
          <img className="bg-gray-300 w-full h-32 sm:h-48 object-cover rounded-t" src={bot.avatar_url} alt={bot.name} />
          <div className="p-4">
            <h1 className="font-bold text-2xl">{bot.name}</h1>
            <p className="text-gray-500 break-words">{bot.catchphrase}</p>
            <div className="mt-4 text-gray-500 border-t border-gray-400 pt-2">
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
            </div>
            {/* You can add a button to remove the bot from the enlistedBots list if desired */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
