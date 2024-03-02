import React from 'react'
import {useParams,useSearchParams,useLocation   } from 'react-router-dom'
import { Button, ConfigProvider } from 'antd';

export default function Detail () {
  // params传参
  // const params = useParams()
  // console.log("params:",params);// 打印 

  // searchParams传参
  // let [searchParams, setSearchParams] = useSearchParams()
	// console.log(searchParams.get('id'))
	// console.log(searchParams.get('title'))

  // state传参
  let location = useLocation(); 
  // console.log("params2:", location);
  const { state: { id } } = location;
  console.log(id)
  const msgArr = [
    { id: '001', title: '我是消息1',content:'我爱我家' },
    { id: '002', title: '我是消息2',content:'我爱我国' },
    { id: '003', title: '我是消息3',content:'我爱人民' },
  ];
  const newObj = msgArr.find((item) => item.id === id);
  console.log(newObj)
  return (
    <ConfigProvider
    theme={{
      token: {
        // Seed Token，影响范围大
        colorPrimary: '#00b96b',
        borderRadius: 2,

        // 派生变量，影响范围小
        colorBgContainer: 'orange',
      },
    }}
  >
    <div>
        <div>Detail</div>
        <Button>hello</Button>
      <div>
        <div>title:{ newObj.title}</div>
        <div>content:{ newObj.content}</div>
      </div>
      </div>
  </ConfigProvider>
  )
}
