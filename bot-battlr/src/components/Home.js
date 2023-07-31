import { useEffect, useState } from "react";
import BotCollection from "./BotCollection";

const Home = () => {
  const [bots, setBots] = useState(null)


  useEffect(() => {
    fetch('https://bot-battlr-bejy.onrender.com/bots')
      .then(res =>  res.json())
      .then(data => {
        setBots(data);
      })
  }, [])

  return (
    <div className="home">
      {bots && <BotCollection  bots={bots} title={"Select your Bot Army"}/>}
    </div>
  );
}
 
export default Home;