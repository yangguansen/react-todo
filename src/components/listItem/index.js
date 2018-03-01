import React from "react";

class List extends React.Component {
	constructor( props ) {
		super( props );
		this.completeItem = this.completeItem.bind( this, props.item );
		this.deleteItem = this.deleteItem.bind( this, props.item );
	}

	completeItem() {
		this.props.onStatusChange( this.props.item );
	}

	deleteItem() {
		//	传的是props中的item
		this.props.onDelete( this.props.item );
	}

	render() {
		return ( <li className={`item${this.props.item.complete ? ' complete' : ''}`}>
				<span className="toggle" onClick={this.completeItem}></span>
				<div>{this.props.item.title}</div>
				<p onClick={this.deleteItem}>X</p>
			</li> )
	}
}

export default List;