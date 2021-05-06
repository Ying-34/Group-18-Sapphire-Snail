import { Divider } from 'antd';
import React from 'react';
import CommentBox from './CommentBox';
//import ReactDOM from  'react-dom';
import './Forum.css';

const Forum =()=>{

    return(
          <div id='divForum' className="App">
              <Divider style={{ borderWidth: 3, borderColor: 'skyblue'}} />
              <h1>Comment</h1>
              <div id='commentBoxDiv'>
                  <CommentBox />
                  <CommentBox />
              </div>
          </div>
    );
}

export default Forum;