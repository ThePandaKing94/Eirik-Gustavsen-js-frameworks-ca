import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import GameInfo from '../constants/GameInfo';
import Search from "../constants/Search";

function Home() {
  const [games, setGames] = useState([])
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);


  const getDetails = async () => {
    axios.get("https://api.rawg.io/api/games").then(response => {
      console.log(response.data.results)
      setGames(response.data.results)
      setFilteredGames(response.data.results)
    }).catch(error => {
      console.log(error)
    }).finally(() => setLoading(false));
  };

  useEffect(() => {
    getDetails();
  }, [])

  const filterGames = function (e) {
    const searchValue = e.target.value.toLowerCase();
    const filteredArray = games.filter(function (game) {
      const lowerCaseName = game.name.toLowerCase();
      if (lowerCaseName.includes(searchValue)) {
        return true;
      }
      return false;
    });
    // set filtered games to the new array
    setFilteredGames(filteredArray);
  };

  if (loading) {
    return <Spinner animation="border" className="spinner" />;
  }
  return (
    <main >
      <h1>Games</h1>
      <Search handleSearch={filterGames} />
      <div id="gameDiv">
        {filteredGames.map((games) =>
          <GameInfo name={games.name} background_image={games.background_image} metacritic={games.metacritic} released={games.released} id= {games.id} />
        )}
      </div>
    </main>
  )
}
export default Home;
