import React, {useEffect, useState} from 'react';
import Podcast from './Podcast.js';
import Song from './Song.js';
import ShuffleToggle from './Shuffle.js';
import PlayandPauseToggle from './Play.js';
import PreviousToggle from './Previous.js';
import NextToggle from './Next.js'
import Status from './StatusComp.js'
import '../App.css';



const UpdatedPlaylist = () => {
    const[playlist, setPlaylist] = useState([]);
    const[currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const[isPlaying, setIsPlaying] = useState(false);
    const[status, setStatus] = useState('');


useEffect(() => {
    const fetchAudioTracks = async () => {
    const response = await fetch('http://localhost:3001/tracks');
    const data = await response.json();
    setPlaylist(data);
};

fetchAudioTracks();
}, []);


const manageShuffle = () => {
    console.log('Shuffling')
    const shuffledPlaylist = shuffleArray([...playlist]);
    setPlaylist(shuffledPlaylist);
    setCurrentTrackIndex(0);
};

const managePlayPause = () => {
    setIsPlaying(!isPlaying);
    console.log('test')
    console.log(playlist[currentTrackIndex])
    if (status.includes('Playing')) {
        setStatus('Paused');
    } else if (playlist[currentTrackIndex].episodeTitle) {
      setStatus('Playing: ${playlist[currentTrackIndex].episodeTitle}');
    } else {
        setStatus('Playing: ${playlist[currentTrackIndex].title}');
    }   

};

const manageDoubleClick = (title, episodeTitle) => {
    if (episodeTitle) {
        setStatus('Playing: ${episodeTitle}');
    } else {
        setStatus('Playing: ${title}');
    }
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i >0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [array[1], array[j]] = [array[j], array[i]];
    }
    return array;
};


const previousToggle = () => {
    setCurrentTrackIndex((previousIndex)=> (previousIndex=== 0 ? playlist.length-1 : previousIndex-1));
    if(playlist[currentTrackIndex].episodeTitle) {
        setStatus(`playing: ${playlist[currentTrackIndex].episodeTitle}`);
    } else {
        setStatus(`playing: ${playlist[currentTrackIndex].title}`);
    }

};




const nextToggle = () => {
    console.log('nextToggle is running')
    setCurrentTrackIndex((previousIndex)=> (previousIndex=== playlist.length-1 ? 0 : previousIndex +1 ));
    if(playlist[currentTrackIndex].episodeTitle) {
        setStatus(`playing: ${playlist[currentTrackIndex].episodeTitle}`);
    } else {
        setStatus(`playing: ${playlist[currentTrackIndex].title}`);

    }
  
};

function foo () {
    console.log('foo')
}

return (
    <div className='shuffled-playlist'>
      <h3>Playlist</h3>
      <h4>Click a title to play!</h4>
      <div className='player-Controls'>
        <ShuffleToggle theAction={manageShuffle} anotherFunction={foo} />
        <PlayandPauseToggle isPlaying={isPlaying} onClick={managePlayPause} />
        <PreviousToggle theAction={previousToggle} />
        <NextToggle theAction={nextToggle} />
      </div>
      <div className='status' status={status}></div> 
      {playlist.map((item, index) => (
        <div  
          key={index}
          className="playlist-item"
          style={{ padding: '2px', backgroundColor: index === currentTrackIndex ? '#ccc' : 'Transparent'}}
          onDoubleClick={() => manageDoubleClick(item.title, item.episodeTitle)}
        >
            {item.title && item.artist && item.year && (
                <Song title={item.title} artist={item.artist} year={item.year} />
            )}
            {item.episode && item.episodeTitle && ( 
                <Podcast
                    episode={item.episode}
                    episodeTitle={item.episodeTitle}
                    season={item.season}
                />
            )}
        </div>
      ))}
    </div>
  );
            }

export default UpdatedPlaylist;








































