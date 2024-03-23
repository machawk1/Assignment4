
import React from 'react';


function Song({title = "We Didn't Start the Fire", artist = "Billy Joel", year = "1989"})
{
    return(
        <div className="Song">
            <h2>{title}</h2>
            <h2>{artist}</h2>
            <h2>{year}</h2>
        </div>

    );
}

export default Song
