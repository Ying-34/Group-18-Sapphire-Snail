import React from 'react';

const NoteDiv = (props) => {
    var tmp = [];
    for (var i = 0; i < localStorage.noteNo; i++) {
      tmp.push(i);
    }
    var t = 1;
    var indents = tmp.map((res)=>
        <span id={'note'+ t++} className='indent' ></span>
    );  
  
    return (
    <span id="noteDiv">
        {indents}
    </span>
    );
}

 export default NoteDiv ;