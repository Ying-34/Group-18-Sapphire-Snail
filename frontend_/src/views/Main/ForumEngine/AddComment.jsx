import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import React from 'react';
import moment from 'moment';
import CommentBox from './CommentBox';
import './Forum.css';
import axios from 'axios';

const { TextArea } = Input;


const CommentList = ({ comments }) => {

  var t = 1;

  return(
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <div id={'comment'+t++} className="CommentBox" ><CommentBox {...props} /></div>}
  />
  );
};

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea  rows={4} onChange={onChange} value={value} maxLength={2000} style={{fontSize: 20 }}/>
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

class AddComment extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  componentDidMount =async()=>{
    try {
      await axios.get('http://localhost:5000/pageComments/get/'+localStorage.event)
        .then(res =>
          {
            //console.log(res.data);
             this.setState({ comments: res.data});
          }
        );
        //console.log(data)
      } catch (error) {
        console.log(error);
      } 
  }

  handleSubmit = async () => {
    localStorage.setItem('keyboardInUse','no');
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout( async() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          ...this.state.comments,
          {
            author: localStorage.userInfo,
            avatar: "https://i.ibb.co/DVTnXWx/Snail1.png",
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow()
          },
        ],
        
      });
      const data = {
        pageName: localStorage.event,
        comments: this.state.comments
      }

      //add comments to database
  
      try {
          await axios.post('http://localhost:5000/pageComments/add', data)
            .then(res => console.log(res.data));
            //console.log(data)
          } catch (error) {
            console.log(error);
            await axios.post('http://localhost:5000/pageComments/update', data)
            .then(res => console.log(res.data));
            console.log(data);
          } 
    }, 1000);

  };

  handleChange = e => {
    localStorage.setItem('keyboardInUse','yes');
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    //console.log(comments);

    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src={localStorage.avatar}
              alt={localStorage.userInfo}
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
    );
  }
}

export default AddComment;