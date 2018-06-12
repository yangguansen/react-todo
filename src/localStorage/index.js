const localStorageOperate = {
	name: 'todo',

	saveItem ( string ) {
		if ( typeof string !== 'string' ) {
			throw new Error( 'arguments must be String' );
		}
		window.localStorage.setItem( this.name, string );
	},

	getItem(){
		return window.localStorage.getItem(this.name) || '[]';
	}
}

export default localStorageOperate;