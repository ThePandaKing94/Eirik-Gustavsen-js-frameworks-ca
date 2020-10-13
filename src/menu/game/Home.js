import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Search from "../constants/Search";

function Homelist() {
  // keep all the games in the "store"
  const [games, setGames] = useState([])
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch all the games from the backend
  // we are using a proxy since the backend is not CORS enabled
  const getDetails = async () => {
    axios.get("https://api.rawg.io/api/games").then(response => {
      console.log(response.data.results)
      setGames(response.data.results)
      setFilteredGames(response.data.results)
    }).catch(error => {
      console.log(error)
    }).finally(() => setLoading(false));
  };
  // get all the games when this component loads
  useEffect(() => {
    getDetails()
  }, [])

  const filterGames = function (e) {
    const searchValue = e.target.value.toLowerCase();
    const filteredArray = games.filter(function (game) {
      const lowerCaseName = game.title.toLowerCase();
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
    <div>
      <h1>Games</h1>
      <Search handleSearch={filterGames} />
      <div>
      {filteredGames.map((games) =>
          <Homelist name={games.name}  href={games.href} rating={games.rating} released={games.released} />
       )}
      </div>
      
    </div>
  )
}
export default Homelist;
