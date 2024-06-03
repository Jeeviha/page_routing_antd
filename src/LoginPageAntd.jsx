import React from 'react'
import { Form, Input,Button,Image,Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import "./LoginPageAntd.css";

const LoginPageAntd = () => {

  const navigate=useNavigate();

  const handle_submit=(e)=>
    {
        e.preventDefault()
        navigate("/student")
    }

  return (
    <div className='entire'>
      <div>
            <Image src='https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png?f=webp' width={400} height={400} style={{opacity:"0.7"}}/>
      </div>
      <div>
        <Card title="Welcome Back!" bordered={true} style={{borderRadius:"12px"}}>
      <Form onFinish={handle_submit} name="login_form" labelCol={{span:"7"}} wrapperCol={{span:"24"}}>
        <Form.Item label="Username:" name="user" rules={[{required:true, message:"Enter the username"}]}>
          <Input/>
        </Form.Item>
        <Form.Item label="Password:" name="pwd" rules={[{required:true, message:"Enter the password"}]}>
          <Input.Password/>
        </Form.Item>
        <Form.Item wrapperCol={{offset:"9",span:"4"}}>
          <Button type='primary' htmlType='submit'>Log In</Button>
        </Form.Item>
      </Form>
      </Card>
      </div>
    </div>
  )
}

export default LoginPageAntd
