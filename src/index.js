import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import reducers from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import routes from './router';

const RouteWithSubRoutes = route => (
	<Route exact path={route.path} render={props => (
		route.rediect ? (
			<Redirect to={route.rediect}></Redirect>
		) : (
			<route.component {...props} routes={route.routes}/>
		)

	)
	}/>
);

let store = createStore( reducers, composeWithDevTools() );

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				{/*react-router v4*/}
				{/*将router配置通过对象结构的方式，渲染成<Route/>*/}
				{routes.map( ( route, i ) => <RouteWithSubRoutes key={i} {...route} /> )}
			</div>

		</Router>
	</Provider>,
	document.getElementById( 'root' ) );

registerServiceWorker();
