import { createSelector } from "reselect";

const status = ( state ) => {return state.tabStatus};
const list = ( state ) => {return state.eventList};

export const setListByTabStatus = createSelector(
	[ list, status ],
	( l, s ) => {
		switch ( s ) {
			case 'all':
				return l;
			case 'active':
				return l.filter( v => !v.complete );
			case 'complete':
				return l.filter( v => v.complete )
		}
	}
)