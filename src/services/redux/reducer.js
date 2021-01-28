const initialState = {
	visibility: 'ALL',
	todos: [
	],
	table : [
		[
			{
				text: 'todo1',
				completed: false
			},
			{
				text: 'todo2',
				completed: false
			}
		]
	]
};

function reducer(state = initialState, action) {
	console.log('reducer. action:', action);

	switch (action.type) {
		case 'ADD_LIST':
			return {
				...state,
				table : [
					...state.table,
					[]
				]
			}

		case 'ADD_TODO':
			
			return {
				...state,
				todos : [
					...state.todos,
					{
						text: action.payload,
						completed: false
					}
				]
			}
	
		default:
			return state;
	}
}


export default reducer;