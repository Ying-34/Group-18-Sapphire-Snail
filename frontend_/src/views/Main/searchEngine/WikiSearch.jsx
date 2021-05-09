import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from  'react-dom';
import '../style.css';
//import loadwiki from './loadwiki';

class WikiSearch extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      searchText: '', 
      winHeight: window.innerHeight+'px', 
      winWidth: window.innerWidth+'px',
      url: '',
      wikiResult: [],
      wikiContent: [],
      wikia: []
    };
  }

  componentDidMount(){
  }

  getResult = async (a) => {
    await axios.get('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search='+a)
    .then(
      wikiResponse => {
        const data = wikiResponse.data;
        this.setState({wikiResult: data});
        //alert('Data received!');
        //console.log(this.state.wikiResult);
      })
      .catch(() => {
        alert('no data');
      }
    );
  }

  openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  loadwiki = async () =>{
    var pages = this.state.wikiContent.query.pages;
    var content = '';
    console.log(pages);
    for(var x in pages)
    {
      console.log(pages[x].extract);
      //document.getElementById("wikip").innerHTML+=pages[x];
      //ReactDOM.render('', document.getElementById('divLi'));
      ReactDOM.render(pages[x].title, document.getElementById('wikit'));
      ReactDOM.render('introduction', document.getElementById('wikit2'));
      //ReactDOM.render(pages[x].extract, document.getElementById('wikip'));
      content = pages[x].extract;
    }
    const temp1 = content.split('==');
    console.log(temp1);
    var i = 0;
    var b = 0;
    temp1.forEach(t=>
    {
      if(b===1)
      {
        var s2 = t.slice(2);
        this.state.wikia.push('p1'+s2);
        b=0;
        //console.log('2:'+s2);
      }
      //console.log(t);
      else if(i!==0)
      {
        if(t[0] === '=')
        {
          var s1 = t.slice(2);
          this.state.wikia.push('h3'+s1);
          b = 1;
          //console.log('1:'+s1);
        }
        else
        {
          if(t[0] !== '\n')
          {
            var s4 = t;
            this.state.wikia.push('h2'+s4);
          }
          else{
            var s5 = t;
            this.state.wikia.push('p1'+s5);
          }
        }
      }
      else
      {
        var s3 = t;
        this.state.wikia.push('p1'+s3);
        //console.log('3:'+s3);
      }
      i++;
    }
    );
    //console.log(this.state.wikip1);
    //console.log(this.state.wikih2);
    console.log(this.state.wikia);
    var para1 = this.state.wikia.map((res)=>
        res[0]==='h'
        ? 
          res[1]==='2'
          ? <h2 className="title2">{res.slice(2)}</h2>
          : <h3 className="title3">{res.slice(2)}</h3>
        : 
        <p className="para">{res.slice(2)}</p>
    );
    ReactDOM.render(para1, document.getElementById('divLi'));
  }

  clickli = async (event) => {
    await axios.get('https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&exchar=100&explaintext&format=json&titles='+event.target.innerHTML)
    .then(
      wikiResponse => {
        const data = wikiResponse.data;
        this.setState({wikiContent: data});
        //alert('Data received!');
        //console.log(this.state.wikiContent);
        this.loadwiki();
        //document.getElementById("wikip").innerHTML=this.state.wikiContent;
      })
      .catch(() => {
        //alert('no data');
      }
    );
  }

  submitHandler = async (event) =>{
    event.preventDefault();
    var text = this.state.searchText;
    if(text!=="")
    {
      //alert("Submited: "+text);
      await this.getResult(text);
      console.log(this.state.wikiResult);
      var temp = this.state.wikiResult[1];
      var i = 0;
      console.log(temp);
      var list = await temp.map((res)=>
        <li id = {'li'+i++} onClick={this.clickli}>{res}</li>
      );
      const element = (
        <ul  id='searchul' >{list}</ul>
      );
      this.state.wikia = [];
      ReactDOM.render('', document.getElementById('wikit'));
      ReactDOM.render('', document.getElementById('wikit2'));
      ReactDOM.render('', document.getElementById('wikip'));
      ReactDOM.render(element, document.getElementById('divLi'));
    }
    else
    {
      alert("Please enter what you want to search!");
    }
  }
  myChangeHandler = (event) => {
    this.setState({searchText: event.target.value});
  }

    render(){
        return(
            <div className="App">
              <h1>Wikipedia forum</h1>
              <form id='sub' onSubmit={this.submitHandler}>
                <input placeholder="Wiki Search" type='text' onChange={this.myChangeHandler}/>
                <input  type='submit' value='Go!'/>
              </form>
              <h1 id="wikit"> </h1>
              <h2 id="wikit2" className='title2'> </h2>
              <div id="divLi"></div>
              
              <p id="wikip" className="para"></p>
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
}

export default WikiSearch;