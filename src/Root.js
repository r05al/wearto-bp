import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './components/App';
import css from '../public/styles.css';

const store = createStore(reducer);

export default class Root extends Component {
  render() {
    return (
    	<div>
    		<Provider store={store}>
    			<App />
    		</Provider>
    	</div>
    );
  }
}