import Nav from '../../components/Nav/Nav'
import { Form, Input, Button } from 'antd'
import snipaste from '../../assets/imgs/snipaste.png'
import { Link, useHistory } from 'react-router-dom'
import './login.css'

const Login = () => {
  // use antd's form
  const [form] = Form.useForm()
  const history = useHistory()

  const onFinish = values => {
    console.log('values', values)
    // Route jump
    history.replace('/')
    // To login
  }

  return (
    <div className='login-container'>
      <Nav />

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
  )
}

export default Login
