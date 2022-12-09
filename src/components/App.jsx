import React, {useState} from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const giphy = require('giphy-api')({
    apiKey: 'RKWkK2mD8DS9QUIjO1UqhTtTFtMNRxt1',
    https: true
});

const App = () => {
    const [selectedGif, setSelectedGif] = useState("gG6OcTSRWaSis");
    const [gifIds, setGifIds] = useState(["13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm", "PnpkimJ5mrZRe", "LmNwrBhejkK9EFP504", "5ntdy5Ban1dIY", "ZG719ozZxGuThHBckn", "gG6OcTSRWaSis", "TilmLMmWrRYYHjLfub", "kHrKpJiCbOmkWD4xT9"]);
    
    const changeGifList = (keyword) => {
        giphy.search({
            q: keyword,
            rating: 'g',
            limit: 10
        }, (err, res) => {
                const newGifIds = res.data.map((gif) => gif.id);
                setGifIds(newGifIds); 
            });
                
    };
    
    return (
        <div>
            <div className="left-scene">
                <SearchBar changeGifList={changeGifList} />
                <div className="selected-gif">
                    <Gif id={selectedGif}/>
                </div>
            </div>
            <div className="right-scene">
                <GifList gifIds={gifIds} setSelectedGif={setSelectedGif} />
            </div>
        </div>
    );
};

export default App;