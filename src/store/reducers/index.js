import { combineReducers } from 'redux';
import * as types from '../actions';

function addNum( state = 0, action ) {

	switch ( action.type ) {
		case types.ADD_NUM:
			return state + action.num
		default:
			return state;
	}
}

function tabStatus( state = "all", action ) {
	switch ( action.type ) {
		case types.SWITCH_TAB:
			return action.tabStatus
		default:
			return state;
	}
}

function eventList( state = [], action ) {

	switch ( action.type ) {
		case types.EVENT_LIST:

			//	对象和数组要返回新的值，而不是原值，如果return action.eventList,则不会渲染视图
			return [ ...action.eventList ]
		default:
			return state
	}
}

function setVisibityList( state = [], action ) {
	switch ( action.type ) {
		case types.VISIBITY_LIST:
			return [ ...action.list ]
		default:
			return state
	}
}

const todoApp = combineReducers( {
	addNum,
	tabStatus,
	eventList,
	setVisibityList
} );

export default todoApp;

