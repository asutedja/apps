import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider }from 'react-redux'
import Blog from './components/Blog.js'
import reducer from './components/reducer/reducer'

const store = createStore(reducer)

render(
	<Provider store={store}>
  	<Blog />
  	</Provider>,
  document.getElementById('app')
) 