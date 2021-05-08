import React from 'react';
import axios from 'axios';
import ReactDOM from  'react-dom';
import './article.css';
//import SearchPic from './searchEngine/SearchPic';

var wikiContent = [];
var wikia = [];
var artTitle  = null;
var para1 = null;

const Loadwiki = () =>{   
    var pages = wikiContent.query.pages;
    var content = '';
    console.log(pages);
    
    for(var x in pages)
    {
      console.log(pages[x].extract);
      artTitle = pages[x].title;
      ReactDOM.render(artTitle,document.getElementById("wikit"));
      content = pages[x].extract;
    }
    const temp1 = content.split('==');
    //console.log(temp1);
    var i = 0;
    var b = 0;
    temp1.forEach(t=>
    {
      if(b===1)
      {
        var s2 = t.slice(2);
        wikia.push('p1'+s2);
        b=0;
        //console.log('2:'+s2);
      }
      //console.log(t);
      else if(i!==0)
      {
        if(t[0] === '=')
        {
          var s1 = t.slice(2);
          wikia.push('h3'+s1);
          b = 1;
          //console.log('1:'+s1);
        }
        else
        {
          if(t[0] !== '\n')
          {
            var s4 = t;
            wikia.push('h2'+s4);
          }
          else{
            var s5 = t;
            wikia.push('p1'+s5);
          }
        }
      }
      else
      {
        var s3 = t;
        wikia.push('p1'+s3);
        //console.log('3:'+s3);
      }
      i++;
    }
    );
    console.log(wikia);
    para1 = wikia.map((res)=>
        res[0]==='h'
        ? 
          res[1]==='2'
          ? <h2 className="title2">{res.slice(2)}</h2>
          : <h3 className="title3">{res.slice(2)}</h3>
        : 
        <p className="para" style={{zIndex:-1}}>{res.slice(2)}</p>
    );
    console.log(para1);
    localStorage.setItem('paraText', JSON.stringify(para1));
    ReactDOM.render(para1, document.getElementById('divp'));
    //ReactDOM.render(<SearchPic/>, document.getElementById('divPic1'));
    if(document.getElementById('navSearch')) document.getElementById('navSearch').style.visibility='visible';
}


const Article =(props)=>{
  console.log(props.pageName);
  axios.get('https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&exchar=100&explaintext&format=json&titles='+props.pageName)
  .then(
    wikiResponse => {
      const data = wikiResponse.data;
      wikiContent = data;
      //alert('Data received!'); 
      //console.log(wikiContent);  
      Loadwiki();
    })
    .catch(() => {
      //alert('no data');
    }
  );
    //ReactDOM.render(JSON.parse(localStorage.paraText),document.getElementById("divp"));
        return(
            <div className="App">
              <h1 id="wikit" className="title"> </h1>
              <div id="divPic1"></div>
              <div id="divp"></div>
              
              {/*
                <iframe
                id="searchResult"
                src={this.state.url}
                width={window.innerWidth-100+'px'}
                height={window.innerHeight-140+'px'}
                title="Child iFrame"
                >
                </iframe>
                */}
          </div>
      );
}

export default Article;