import React from 'react';
import { defaultValue, switchTab, setEventList } from './store/actions';
import localStorageOperate from './localStorage';
import { connect } from "react-redux";
import Tab from './components/tab';
import List from './components/listItem';
import { setListByTabStatus } from "./selector";


class TodoList extends React.Component {
	constructor( props ) {
		super( props );

		this.addEvent = this.addEvent.bind( this );

		this.handleStatusChange = this.handleStatusChange.bind( this );
		this.deleteItem = this.deleteItem.bind( this );
	}

	componentDidMount() {
		const list = this.getDataFromStorage();

		this.props.addEventList( list );

		this.props.switchTab( this.props.match.params.status );
	}

	getDataFromStorage = () => {
		return JSON.parse( localStorageOperate.getItem() );
	}

	componentWillReceiveProps( next ) {
		if ( this.props.match.params.status !== next.match.params.status ) {
			this.props.switchTab( next.match.params.status );
		}
	}

	addEvent( e ) {

		if ( e.which === 13 ) {

			const temp = this.props.eventList;

			temp.push( {
				title: e.target.value, complete: false
			} );

			const { addEventList } = this.props;
			addEventList( temp );

			e.target.value = '';

			localStorageOperate.saveItem( JSON.stringify( temp ) );
		}
	}

	deleteItem( key ) {

		const index = this.props.eventList.findIndex( v => v.title === key.title );

		const temp = this.props.eventList;
		temp.splice( index, 1 );
		this.props.addEventList( temp );
		localStorageOperate.saveItem( JSON.stringify( temp ) );
	}

	handleStatusChange( e ) {
		const temp = this.props.eventList;

		const index = temp.findIndex( v => v.title === e.title );

		temp[ index ].complete = !temp[ index ].complete;

		this.props.addEventList( temp );

		localStorageOperate.saveItem( JSON.stringify( this.props.eventList ) );
	}

	render() {
		const { tabStatus, switchTab, eventList, visibilityList } = this.props;

		return (

			<div className="main">
				<p className="main-name">Todos</p>

				<input className="todo" type="text" placeholder={defaultValue} onKeyUp={this.addEvent}/>

				<ul className="list-ul">
					{visibilityList.map( ( v, i ) => {
						return (
							<List key={i} item={v} onDelete={this.deleteItem} onStatusChange={this.handleStatusChange}></List> )
					} )}
				</ul>

				<Tab left={eventList} onTabChange={switchTab} tabStatus={tabStatus}></Tab>

			</div>

		)
	}
}

const mapStateToProps = ( state ) => {

	return {
		tabStatus: state.tabStatus,
		eventList: state.eventList,

		//	这里会自动绑定数据,当参数发生变化，visibilityList会自动变化
		visibilityList: setListByTabStatus( state )
	}
}
const mapDispatchToProps = ( dispatch, ownProps ) => {
	return {
		switchTab: ( tab ) => {
			dispatch( switchTab( tab ) )
		},
		addEventList: ( list ) => {
			dispatch( setEventList( list ) );
		}
	}

}

export default connect( mapStateToProps, mapDispatchToProps )( TodoList );