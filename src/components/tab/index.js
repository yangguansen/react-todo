import React from "react";
import { NavLink, withRouter } from 'react-router-dom';

class Tab extends React.Component {
	constructor( props ) {
		super( props )
	}

	render() {
		if ( this.props.left.length <= 0 ) {
			return null;
		}

		return ( <div className="tab">
				<span className="left-number">剩{this.props.left.filter( v => !v.complete ).length}项</span>
				<div className="tab-item">
					<NavLink to='/todo/all'>全部</NavLink>
					<NavLink to='/todo/active'>进行</NavLink>
					<NavLink to='/todo/complete'>完成</NavLink>
					<NavLink to="/test">测试</NavLink>
				</div>
			</div> )
	}
}

export default withRouter( Tab );