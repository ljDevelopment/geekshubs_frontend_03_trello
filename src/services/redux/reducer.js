const initialState = {
	table : [
		{
			id : 0,
			items :
			[
				{
					id: 0,
					text: 'todo00',
					completed: false
				},
				{
					id: 1,
					text: 'todo01',
					completed: false
				}
			]
		},
	]
};

function reducer(state = initialState, action) {
	console.log('reducer. action:', action);

	switch (action.type) {
		case 'ADD_ITEM':
			return {
				...state,
				table : state.table.map(
					(element) => {
						if (element.id === action.listId)
						{
							element.items.push(action.payload);
						}
						return element;
					}
				)
			}

		case 'ADD_LIST':
			return {
				...state,
				table : [
					...state.table,
					{
						id: action.id,
						items: []
					}
				]
			}
	
		default:
			return state;
	}
}


export default reducer;