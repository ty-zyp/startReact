// import React, { Component } from 'react'

// export default class News extends Component {

//   render() {
//     return (
//       <div>News</div>
//     )
//   }
// }

import React from 'react'
import { Button } from 'antd';
import {
  WechatOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'  
export default function News () {


  const navigate = useNavigate()
  const goDetail = () => {
    console.log('跳转',navigate)
    navigate('/home/message/detail', { state: { id: '001', title: '我是消息1' } })
  }
  const forward = () => {
    navigate(1)
  }
  const back = () => {
    navigate(-1)
  }

  return (
    <div>
      News页面
      <br />
      <button onClick={goDetail}>跳转到消息页面</button>
      <br />
      <button onClick={forward}>前进</button>
      <br />
      <button onClick={back}>后退</button>
      <Button type="primary">Primary Button</Button>
      <Button>Primary Button</Button>
      <WechatOutlined style={{color:'red'}} />
    </div>

  )
}

