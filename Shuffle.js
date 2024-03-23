import React from 'react';

const ShuffleToggle = ({theAction, anotherFunction}) => {
    return <button onClick={theAction} onMouseOver={anotherFunction}>Shuffle Now!</button>;
    
};

export default ShuffleToggle

