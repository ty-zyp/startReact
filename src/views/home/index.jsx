import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import MyNavLink from '../../components/MyNavLink';
import News from './news'
import Message from './message'
export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <div>Home</div>
          <hr />
          <MyNavLink to="/home/news">news</MyNavLink>&nbsp;&nbsp;
          <MyNavLink to="/home/message">message</MyNavLink>
        </div>
        <hr />
        <div>
          <Routes>
            <Route path="/news" element={<News />} />
            <Route path="/message/*" element={<Message />} />
            <Route path="/" element={<News />} /> 
          </Routes>
        </div>
      </div>
    )
  }
}
