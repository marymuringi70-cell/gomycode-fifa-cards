import players from "../players";
import {Player} from "./Player";

export const PlayerList = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};
