// 3- Com o Context e o Provider criados, precisamos adicionar o Provider à aplicação:

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Provider from '../utils/Provider'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
