const initialState = {
	board: [
		{
			id: 0,
			title: "list1",
			cards:
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


		case 'ADD_LIST':
			return {
				...state,
				board: [
					...state.board,
					{
						...action.payload,
						cards: []
					}
				]
			}

		case 'REMOVE_LIST':
			return {
				...state,
				board: state.board.filter(l => l.id !== action.listId)
			}

		case 'REMOVE_CARD':
			return {
				...state,
				board: state.board.map(
					(element) => {
						element = {
							...element,
							cards: element.cards.filter(c => c.id !== action.cardId)
						}
						return element;
					}
				)
			}

		case 'ADD_CARD':
			return {
				...state,
				board: state.board.map(
					(element) => {
						if (element.id === action.listId) {

							const cards = [...element.cards];
							cards.push(action.payload);
							
							return {
								...element,
								cards: cards
							}
						}
						return element;	
					}
				)
			}

		case 'MOVE':
			const { sourceListId, sourceIndex, destinationListId, destinationIndex } = action;

			if (sourceListId == destinationListId
				&& sourceIndex == destinationIndex) {
				return state;
			}

			let element = null;
			let destinationListIndex = -1;
			const newState = {
				...state,
				board : state.board.map((e, i) => {

					if (e.id == destinationListId)
					{
						destinationListIndex = i;
					}
					
					if (e.id != sourceListId) {
						return e;
					}

					element = e.cards[sourceIndex];

					const copy = {
						...e,
						cards: [...e.cards]
					};  
					copy.cards.splice(sourceIndex, 1);

					return copy;
				})
			}

			newState.board[destinationListIndex].cards = [...newState.board[destinationListIndex].cards]
			newState.board[destinationListIndex].cards.splice(destinationIndex, 0, element);

			return newState;

		default:
			return state;
	}
}


export default reducer;