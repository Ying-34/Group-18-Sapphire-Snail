/*
 * @Author: your name
 * @Date: 2021-05-08 12:20:28
 * @LastEditTime: 2021-05-08 17:48:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Group-18-Sapphire-Snail 2111/frontend_/src/views/Login/Login.js
 */
import Nav from '../../components/Nav/Nav'
import { Form, Input, Button, message } from 'antd'
import snipaste from '../../assets/imgs/snipaste.png'
import { Link, useHistory } from 'react-router-dom'
import axios from '../../api/axios'
import './login.css'

const Login = () => {
  // use antd form
  const [form] = Form.useForm()
  const history = useHistory()

  const onFinish = async ({ username, password }) => {
         try {
            const res = await axios('/login', { username, password }, 'POST');
            if(res.data.success){
             //alert(res.data.username);
              // Route jump
              history.replace('/')
            }else{
              message.error(res.data.errorMessage)
            }
          } catch (error) {
              message.error('Internal Server Error')
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
