import React, { Component } from 'react'
import { Routes, Route,Link } from 'react-router-dom';
import Detail from './detail'
export default class Message extends Component {
  render () {
    const msgArr = [
      { id: '001', title: '我是消息1' },
      { id: '002', title: '我是消息2' },
      { id: '003', title: '我是消息3' },
    ];
    return (
      <div>
        <div>Message</div>

          {msgArr.map(item => {
            return <div key={item.id}> 
              {/* params传参 */}
              {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}

              {/* searchParams传参 */}
              {/* <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

              {/* state传参 */}
              <Link to={`/home/message/detail` } state={{id:item.id,title:item.title}}>{item.title}</Link>
            </div>
            
          })}

        <hr />
        <div>
          <Routes>
        
            {/* <Route path='/detail/:name/:age' element={ <Detail />} /> */}

            {/* searchParams传参 */}
            <Route path='/detail' element={<Detail />} />
            
            {/* state传参 */}
            <Route path='/detail' element={ <Detail />} />
        </Routes>
        </div>
      </div>
      
    )
  }
}
