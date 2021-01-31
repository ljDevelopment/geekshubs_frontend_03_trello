const initialState = {
	board : [
		{
			id : 0,
			cards :
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
				board : state.board.map(
					(element) => {
						if (element.id === action.listId)
						{
							element.cards.push(action.payload);
						}
						return element;
					}
				)
			}

		case 'ADD_LIST':
			return {
				...state,
				board : [
					...state.board,
					{
						id: action.id,
						cards: []
					}
				]
			}
	
		default:
			return state;
	}
}


export default reducer;