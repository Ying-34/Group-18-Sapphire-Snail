import { Popover } from 'antd';
import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/core/styles';
import { Input } from 'antd';
//import ReactDOM from  'react-dom';

const { TextArea } = Input;

const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '0px solid',
      lineHeight: 1.5,
      borderRadius: '200px',
      background: 'rgba(161, 239, 255 ,0.6)',
      borderColor: '#0063cc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: 'rgba(137, 198, 211 ,1)',
        borderColor: '#0062cc',
        boxShadow: '0 0 0 0.2rem rgba(247, 207, 160 ,0.5)',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: 'rgba(114, 161, 171  ,1)',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(247, 207, 160 ,0.5)',
      },
    },
  })(Button);

class FloatNotes extends React.Component {
  state = {
    clicked: false,
    hovered: false,
    id: localStorage.noteNo,
    value: '',
    title: this.props.noteTit,
    content: this.props.content
  };

  hide = () => {
    this.setState({
      clicked: false,
      hovered: false,
    });
  };
  
  delete =()=>{
    console.log(this.state.id);
  }

  handleHoverChange = visible => {
    this.setState({
      hovered: visible,
      clicked: false,
    });
  };

  handleClickChange = visible => {
    if(this.props.admin!=='yes'){
        this.setState({
        clicked: visible,
        hovered: false,
        });
    }
  };

  Editor = ({ onChange, value }) => (
    <>
        <TextArea  rows={4} placeholder="note content here" onChange={onChange} value={value} maxLength={200} style={{fontSize: 16 }}/>
    </>
  );

  noteChange =(e)=>{
    this.setState({
      value: e.target.value,
    });

    if (!e.target.value) {
      return;
    }
    this.setState({
        content: e.target.value
    });
    console.log(this.state.content);
  }

  titChange =(e)=>{
    if (!e.target.value) {
      return;
    }
    this.setState({
      title: e.target.value
  });
  }

  render() {
    const hoverContent = <div>{this.state.content}</div>;
    const clickContent = <this.Editor onChange={this.noteChange} value={this.state.value}/>;

    console.log(this.props);

    //document.getElementById('notes').style.left = this.props.x-100+'px';
    //document.getElementById('notes').style.top = this.props.y-20+'px';
    return (
      <span id={"Popover"+ localStorage.noteNo} style={{
        position: 'absolute',
        zIndex: 1,
        left: this.props.x,
        top: this.props.y
        }}>
        <Popover
            style={{ width: 500}}
            content={hoverContent}
            title={this.state.title}
            trigger="hover"
            visible={this.state.hovered}
            onVisibleChange={this.handleHoverChange}
        >
            <Popover
            content={
                <div>
                {clickContent}
                {/*eslint-disable-next-line*/}
                <a   onClick={this.hide}>Close</a>
                {/*eslint-disable-next-line*/}
                <a style={{float:'right'}} onClick={this.delete}>Delete</a>
                </div>
            }
            title={<Input placeholder="title" onChange={this.titChange}/>}
            trigger="click"
            visible={this.state.clicked}
            onVisibleChange={this.handleClickChange}
            >
            <BootstrapButton  color="primary" variant="contained" disableRipple >{this.state.title}</BootstrapButton>
            </Popover>
        </Popover>
      </span>
    );
  }
}

export default FloatNotes;