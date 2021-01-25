const initialState = {
	visibility: 'ALL',
	todos: [
	],
};

function reducer(state = initialState, action) {
	console.log('reducer. action:', action);

	switch (action.type) {
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