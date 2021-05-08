import React from 'react';
import axios from 'axios';
import ReactDOM from  'react-dom';
import Article from '../article';

var wikiResult = [];

const clickli = async (event) => {
  var e = event.target.innerHTML;
  localStorage.setItem("event", e);
  Article();
  var win = window.open('/wikipage','_self');
  win.focus();
  
  }

const getResult = async (a) => {
        await axios.get('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search='+a)
        .then(
          wikiResponse => {
            const data = wikiResponse.data;
            wikiResult = data;
            //localStorage.setItem("wikiResult", wikiResult);
            //alert('Data received!');
          })
          .catch(() => {
            alert('no data');
          }
        );
}

const submitHandler =async (event, type) =>{
    var text = event;
    //console.log(event+'1111');
    
    if(text!=="")
    {
      if(document.getElementById(type)) document.getElementById(type).style.visibility = "visible";
      //alert("Submited: "+text);
      await getResult(text);
      console.log(wikiResult);
      var temp = [];
      if(wikiResult[1] != null) temp = wikiResult[1];
      //console.log(temp);
      var i = 0;

      var list =await temp.map((res)=>
        <li id = {'li'+i++} onClick={clickli}>{res}</li>
      );
      const element = (
        <ul  id='searchul' >{list}</ul>
      );
     
      console.log(element);
      ReactDOM.render(element, document.getElementById(type));
        
    }
    else
    {
      if(document.getElementById(type)) document.getElementById(type).style.visibility = "hidden";
      //alert("Please enter what you want to search!");
    }
}

export default submitHandler;

