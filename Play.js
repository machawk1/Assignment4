import react from 'react'


const PlayandPauseToggle = ({isPlaying, onClick }) => {
    return <button onClick={onClick} >{isPlaying ? 'Pause' : 'Play'}</button>;

};

export default PlayandPauseToggle