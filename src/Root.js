import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './components/App';
import css from '../public/styles.css';
import { Router, Route, browserHistory } from 'react-router';
import NewClothingItem from './components/NewClothingItem';
import EditClothingItem from './components/EditClothingItem';
import NewLook from './components/NewLook';
import EditLook from './components/EditLook';


const store = createStore(reducer);

export default class Root extends Component {
  render() {
    return (
    	<div>
    		<Provider store={store}>
    			<Router history={browserHistory}>
    				<Route path="/" component={App}>
              <Route path="items/new" component={NewClothingItem} />
              <Route path="items/:id/edit" component={EditClothingItem} />
		    			<Route path="looks/new" component={NewLook} />
		    			<Route path="looks/:id/edit" component={EditLook} />
	    			</Route>
	    		</Router>
    		</Provider>
    	</div>
    );
  }
}