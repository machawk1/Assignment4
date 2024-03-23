import React, {useEffect, useState} from 'react';
import Podcast from './Components/Podcast.js';
import Song from './Components/Song.js';
import ShuffleToggle from './Components/Shuffle.js';
import PlayandPauseToggle from './Components/Play.js';
import previousToggle from './Components/Previous.js';
import nextToggle from './Components/Next.js'
import Status from './Components/StatusComp.js'


function Playlist() {
    const song = [
        {title: "We Didn't Start the Fire", artist: "Billy Joel", year: 1989},
        {title: "We Didn't Start the Fire", artist: "Fall Out Boy", year: 2023},
        {title: "West Coast", artist: "OneRepublic", year: 2022},
    ];
    let podcast=[
        {Season: undefined, episode: 578, episodeTitle: 'The Secret Sauce Behind Short-Term Rental Success(Part 1)'},
        {Season: undefined, episode: 579, episodeTitle: 'The Secret Sauce Behind Short-Term Rental Success(part 2)'},
        {episode: 7, episodeTitle: "Kickstarter: Perry Chen(2018)"} ,
    ];  

    return(
        <div className= "playlist">
            <h2>Songs Playlist</h2>
            {song.map((song, index) => (
                <Song key={index} {...song} className="song" />
            ))} ,

        

            <h2>Podcasts Playlist</h2> ,

            {podcast.map((podcast, index) => (
                <Podcast key={index} {...podcast} className="podcast" />
            ))}
            </div>
    );
    }

    

    export default Playlist




