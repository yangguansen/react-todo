export const defaultValue = 'what needs to be done?';

export const tabStatus = "0";

export const ADD_NUM = 'ADD_NUM';

export const SWITCH_TAB = 'SWITCH_TAB';

export const EVENT_LIST = 'EVENT_LIST';
export const VISIBITY_LIST = 'VISIBITY_LIST';


export function addNum( num ) {
	return {
		type: ADD_NUM,
		num: num
	}
}

export function switchTab( status ) {

	return {
		type: SWITCH_TAB,
		tabStatus: status
	}
}

export function setEventList( list ) {
	return {
		type: EVENT_LIST,
		eventList: list
	}
}

export function setVisibityList( list ) {
	return {
		type: VISIBITY_LIST,
		list
	}
}