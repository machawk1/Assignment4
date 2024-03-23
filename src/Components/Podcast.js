import React from 'react';

function Podcast({season, episode, episodeTitle}) {
    const displaySeason = season ? ` Season ${season}` : '';
    return (
        <div>
            <h2>{episodeTitle}</h2>
            <p>{displaySeason}Episode {episode}</p>
        </div>
    );
}

export default Podcast