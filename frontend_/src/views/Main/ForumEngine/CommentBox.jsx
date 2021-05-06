import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
//import ReactDOM from  'react-dom';
import './Forum.css';

const CommentBox = (props) =>{
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
  
    const like = () => {
      if(action!=='liked') 
      {
        setLikes(likes+1);
        if(action==='disliked')   setDislikes(dislikes-1);
        setAction('liked');
      }
      
    };
  
    const dislike = () => {
      if(action!=='disliked') 
      {
        setDislikes(dislikes+1);
        if(action==='liked')  setLikes(likes-1);
        setAction('disliked');
      }
    };

    /*
    const leaveComment = () => {
      var fatherId = "comment"+(localStorage.commentIndex);
      console.log(fatherId);
      ReactDOM.render(<CommentBox><div id={"comment"+(++localStorage.commentIndex)}/></CommentBox>, document.getElementById(fatherId));
    }*/
  
    const actions = [
      <Tooltip key="comment-basic-like" title="Like" >
        <span onClick={like}>
          {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
        </span>      </Tooltip>,
      <Tooltip key="comment-basic-dislike" title="Dislike">
        <span onClick={dislike}>
          {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
        </span>
      </Tooltip>,
      /*<span key="comment-basic-reply-to" style={{fontSize: 15 }} onClick={leaveComment}>Reply to</span>,*/
    ];

    console.log(props);
  
    return (
        <Comment
            actions={actions}
            // eslint-disable-next-line
            author={<a style={{fontSize: 15, fontFamily:"Segoe UI"}}>Han Solo</a>}
            avatar={
            <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
            />
            }
            content={
            <p style={{fontSize: 20,lineHeight:1.2 }}>
              {props.content.props.children}
            </p>
            }
            datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span style={{fontSize: 15 }}>{moment().fromNow()}</span>
            </Tooltip>
            }   
         >
        </Comment>
       
    );
}

export default CommentBox;