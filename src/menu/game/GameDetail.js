import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
function GameDetail(props) {
  const gameId = props.match.params.id
  const [game, setGame] = useState([])
  const [loading, setLoading] = useState(true);
  const getGame = async () => {
    axios.get("https://api.rawg.io/api/games/" + gameId).then(response => {
      console.log(response)
      setGame(response.data)
    }).catch(error => {
      console.log(error)
    }).finally(() => setLoading(false));
  };
  useEffect(() => {
    getGame();
  }, [])
  if (loading) {
    return <Spinner animation="border" className="spinner" />;
  }
  const description = () => ({__html: game.description});
  return (
    <div>
      <div id="gameDiv">
        <h1>{game.name}</h1>
        <img src={game.background_image} />
        <div dangerouslySetInnerHTML={description()} />
        <a href={game.website}>Game website</a>
      </div>
    </div>
  )
}
export default GameDetail;