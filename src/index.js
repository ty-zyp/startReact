import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,HashRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <HashRouter> */}
      <Provider store={store}>
        <App />
      </Provider>
      
    {/* </HashRouter> */}
    </BrowserRouter>
  </React.StrictMode>
);

// redux不能更新状态，需要在subscribe方法里面更新执行render函数
// react-redux能自动更新状态， UI组件是包裹在容器组件里面的，可以实时更新。

// store.subscribe(() => {
//   root.render(
//     <React.StrictMode>
//       <BrowserRouter>
//       {/* <HashRouter> */}
//         <App />
//       {/* </HashRouter> */}
//       </BrowserRouter>
//     </React.StrictMode>
//   );
// })


