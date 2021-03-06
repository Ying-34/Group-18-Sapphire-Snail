import Nav from '../../components/Nav/Nav'
import { Form, Input, Button, message } from 'antd'
import snipaste from '../../assets/imgs/snipaste.png'
import { Link, useHistory } from 'react-router-dom'
// eslint-disable-next-line
import axios from 'axios';
import './createAccount.css'

const CreateAccount = () => {
  // use antd form
  const [form] = Form.useForm()
  const history = useHistory()

  const onFinish = async ({ username, password }) => {
    const user = {
      username: username,
      password: password
    }
    try {
      //Need to modify
      await axios.post('http://localhost:5000/users/register', user)
                  .then(res => {
                    if(res.data.success){
                       // Route jump
                      history.replace('/login')
                    }else{
                      message.error(res.data.errorMessage)
                    }
                  })
                  .catch(err => message.error("Internal Server Error"));
     
    } catch (error) {
      message.error('Register Fail');
      console.log(error);
    }
  }

  return (
    <div className='create-account-container'>
      <Nav />

      <div className='create-account-form-wrapper flex-c'>
        <div className='create-account-form'>
          <div className='title-wrapper'>
            <img alt='logo' className='logo' src={snipaste} />
            Sapphire Snail
          </div>
          <div className='desc'>Start exploring your Wikipedia forum</div>

          <Form className='form' form={form} onFinish={onFinish}>
            <Form.Item
              name='username'
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder='Username' />
            </Form.Item>

            <Form.Item
              name='password'
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder='Password' />
            </Form.Item>
            <Form.Item
              name='confirm'
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!'
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(
                      new Error('The two passwords that you entered do not match!')
                    )
                  }
                })
              ]}
            >
              <Input.Password placeholder='Confirm Password' />
            </Form.Item>
            <div className='tip'>
              have an account
              <Link to='/login' className='sign-up'>
                Sign In
              </Link>
            </div>

            <Form.Item>
              <Button className='full-w' type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
