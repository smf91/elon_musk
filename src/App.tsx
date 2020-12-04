import React from 'react'
import {Provider} from 'react-redux'
import store from './Redux/redux-store'
import './App.scss'
// ----------
import Header from './Component/Header/Header'
import Content from './Component/Content/Content'


function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
          <div className="container">
            <Header/>
            <Content/>
          </div>
      </div>
    </Provider>
  )
}

export default App;
