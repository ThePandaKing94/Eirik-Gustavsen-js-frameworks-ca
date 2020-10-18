import React, { useEffect, useState } from "react";
import SpecificGame from "../components/SpecificGame";
import Props from 'props';

function GameDetail(props) {
  // const gameId = props.match.params.id;

  console.log("hi");

  return (
    <div>
      {/* {gameId} */}
      <div id="gameDiv">

          <SpecificGame name={this.props.name} background_image={this.props.background_image} description={this.props.description} id= {this.props.id} />

      </div>
    </div>
  )
}

export default GameDetail();