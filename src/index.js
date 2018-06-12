import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import TodoApp from './App';
import reducers from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import TestRoute from './components/testRoute';

import registerServiceWorker from './registerServiceWorker';

let store = createStore( reducers, composeWithDevTools() );

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Route path='/todo/:status' exact component={TodoApp}></Route>

				<Route path='/test' component={TestRoute}></Route>
			</div>

		</Router>
	</Provider>,
	document.getElementById( 'root' ) );

registerServiceWorker();
