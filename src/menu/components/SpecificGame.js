import React from "react";
import PropTypes from 'prop-types';

function GameInfo({name, background_image, description, id}) {
    return (
        <div>
            <span>{name}</span>    
            <img src={background_image} />
            <span>Description: {description}</span>
            <a href={"/details?id=" +id}>Visit Video Game Site</a>
        </div>
    )
}

GameInfo.defaultProps = {
    name: 'No name'
};

GameInfo.propTypes = {
    name: PropTypes.string,
    background_image: PropTypes.string,
    metacritic: PropTypes.number,
    released: PropTypes.string,
    href: PropTypes.string
}

export default GameInfo;
