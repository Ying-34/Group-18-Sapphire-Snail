import React from 'react';
import axios from 'axios';
import ReactDOM from  'react-dom';


const SearchPic =()=>{

    var picName = [];
    var picLoc = '';

    axios.get('https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=images&format=json&titles='
    +localStorage.event)
    .then(
        wikiPic =>{
            const data = wikiPic.data;
            //console.log(picInfo);
            let pageId = Object.keys(data.query.pages)[0];
            let page = data.query.pages;
            if(page[pageId].images[0].title) picName = page[pageId].images[0].title; 
            console.log(picName);

            axios.get('https://www.mediawiki.org/w/api.php?origin=*&action=query&prop=pageimages&format=json&titles='+picName)
            .then(
                res => {
                    const data1 = res.data;
                    console.log(data1);
                    let pages = data1.query.pages;
                    let picId = Object.keys(pages)[0];
                    if(pages[picId].thumbnail) picLoc = pages[picId].thumbnail.source; 
                    console.log(picLoc);
                    const pic = (
                        <img alt={localStorage.event+"Pic"} src={picLoc}></img>
                    );
                    ReactDOM.render(pic, document.getElementById("divPic"));
                }
            )
        }
    )
    .catch(() => {
            //alert('no data');
    });

    return(
          <div id='divPic' className="App">
          </div>
    );
}

export default SearchPic;

