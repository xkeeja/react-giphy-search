import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
    const {gifIds, setSelectedGif} = props;
    return (
        <div className="gif-list">
            {gifIds.map((gifId) => <Gif id={gifId} key={gifId} setSelectedGif={setSelectedGif} />)}
        </div>
    );
};

export default GifList;