import { Divider } from 'antd';
import React from 'react';
import AddComment from './AddComment'
//import ReactDOM from  'react-dom';
import './Forum.css';

const Forum =()=>{
    localStorage.setItem('commentIndex', 1);

    return(
          <div id='divForum' className="App">
              <Divider style={{ borderWidth: 3, borderColor: 'skyblue'}} />
              <h1>Comment</h1>
              <AddComment/>
          </div>
    );
}

export default Forum;

