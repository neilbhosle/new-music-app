
import React from 'react';


const Podcast = ({ episodeTitle, episode, season, onItemClick }) => {
    return (
        <div onDoubleClick={onItemClick}>
            <h3>{episodeTitle}</h3>
            {episode && <p>Episode: {episode}</p>}
            {season && <p>Season: {season}</p>}
        </div>
    );
};

export default Podcast;