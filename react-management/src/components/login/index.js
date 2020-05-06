import React from 'react'
import {Form, Input, Button, message, Icon,} from 'antd'
import axios from 'axios'
const FormItem = Form.Item

class FormLogin extends React.Component{

  handleSubmit = () => {
    
    let userInfo = this.props.form.getFieldsValue()
    this.props.form.validateFields((err, values) => { // 登陆校验
      if (!err) {
        axios.post('http://rap2.taobao.org:38080/app/mock/253046/login',{
            username:`${userInfo.username}`,
            password:`${userInfo.password}`,
        }).then(res=>{
          // console.log(res)
          if(res.data.code === 200){
            message.success(`${userInfo.username}恭喜登陆成功`)
            this.props.history.push('/home')

          }
        })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
          <Form layout="horizontal" style={{width:300,margin:'200px auto'}}>
          <FormItem>
            {
              getFieldDecorator('username', {
                initialValue: 'admin', 
                rules: [{ required: true, message: '用户名不能为空' },]
              })(
                <Input prefix={<Icon type="user"></Icon>} placeholder="请输入用户名" autoFocus></Input>
              )
            }
            </FormItem>
            <FormItem>
            {
              getFieldDecorator('password', {
                initialValue: '123456',
                rules: [{ required: true, message: '密码不能为空' },]
              })(
                <Input.Password prefix={<Icon type="lock"></Icon>} placeholder="请输入密码" />
              )
            }
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>登陆</Button>
            </FormItem>
          </Form>
      </div>
    )
  }
}
export default Form.create()(FormLogin)