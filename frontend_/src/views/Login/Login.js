import Nav from '../../components/Nav/Nav'
import { Form, Input, Button, message } from 'antd'
import snipaste from '../../assets/imgs/snipaste.png'
import { Link, useHistory } from 'react-router-dom'
// eslint-disable-next-line
import axios from 'axios';
import './login.css'

const Login = () => {
  // use antd form
  const [form] = Form.useForm()
  const history = useHistory()
  localStorage.removeItem('userInfo');

  const onFinish = async values => {
        try {
          // To login
          const res = await axios.post('http://localhost:5000/users/login', values)
          // If the login is successful
          if (res.data.success) { 
            localStorage.setItem('userInfo', res.data.username);
            localStorage.setItem('avatar', res.data.avatar);
            console.log(res.data);
            
            // Route jump
            history.replace('/')
          } else {
            message.error('Login Fail!' + res.data.errorMessage)
          }
          console.log('res', res)
        } catch (error) {
          message.error('Login Fail')
        }
}

  return (
    <div className='login-container'>
      <Nav />

      <div className='login-form-wrapper'>
        <div className='login-form'>
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
            <div className='tip'>
              Don't have an account?
              <Link to='/create-account' className='sign-up'>
                Sign Up
              </Link>
            </div>

            <Form.Item>
              <Button className='full-w' type='primary' htmlType='submit'>
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
