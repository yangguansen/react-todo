import React from 'react';
import './index.css';

class testRoute extends React.Component {
	constructor( props ) {
		super( props );
	}

	componentWillReceiveProps( nextProps ) {
		console.log( nextProps );
	}

	render() {
		return (
			<div className="test">TEST ROUTE{this.props.children}</div>
		)
	}
}

export default testRoute;