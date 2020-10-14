import React from "react"
import PropTypes from 'prop-types';

function GameInfo({name, href, metacritic, background_image, released }) {
    return (
        <div>
            <span>{name}</span>    
            <img src={background_image} />
            <span>Metacritic: {metacritic}</span>
            <span>Release Date: {released}</span>
            <button href={href}>Like</button>
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
