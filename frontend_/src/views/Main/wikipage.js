import React from 'react';
import Article from './article';
import Nav from '../../components/Nav/Nav'
import Forum from './ForumEngine/Forum';
import ReactDOM from  'react-dom';
import FloatNotes from './notes/FloatNotes';
import NoteDiv from './notes/NoteDiv';
import 'react-router-dom';


//import SearchPic from './searchEngine/SearchPic';

class wikipage extends React.Component {

  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0 };
  }

  createNote = async (event) => {

    console.log(event.key);
    if(event.key === '`' && localStorage.keyboardInUse !== 'yes')
    {
      localStorage.noteNo++;
      await ReactDOM.render(<NoteDiv/>,document.getElementById('notes'));
      ReactDOM.render(<FloatNotes x={localStorage.x-20+'px'} 
      y={localStorage.y-20+'px'} 
      content='note content'
      noteTit='note'
      />,document.getElementById('note'+localStorage.noteNo));
    }
  }

  
  _onMouseMove(e) {

    localStorage.setItem('x', e.pageX);
    localStorage.setItem('y', e.pageY);

    //this.setState({ x: e.screenX, y: e.screenY });
  }

  render(){
    localStorage.setItem('keyboardInUse','no');
    localStorage.setItem('noteNo',0);
    //console.log(this.props.match.params.pageName);

    document.addEventListener('mousemove', this._onMouseMove);

    return (
        <div id="wikiPage" style={{background:'rgba(190, 255, 161 ,0.2)', zIndex:-1}} onKeyPress={this.createNote} tabIndex="0">
          <Nav />

          <FloatNotes x='20%'
          y='12%'
          content='hit ` key on keybord to create notes.
          If not working then click the page once.
          always keep note title short is a good habit'
          noteTit='tips'
          hoverTit='tips for create notes'
          admin='yes'/>

          <span id="notes" />
          <Article pageName={this.props.match.params.pageName}/>
          <Forum />
        </div>
      );
    }
}

    export default wikipage