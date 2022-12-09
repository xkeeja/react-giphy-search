import React from 'react';

const Gif = (props) => {
    const {id, setSelectedGif} = props;
    const url = `https://media.giphy.com/media/${id}/giphy.gif`;
    
    const handleClick = () => {
        setSelectedGif(id);
    };
    
    return (
        <img src={url} alt="gif" className="gif" onClick={handleClick} />
    );
};

export default Gif;