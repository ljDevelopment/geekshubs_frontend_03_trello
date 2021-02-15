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
							element.cards.push(action.payload);
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

			let sourceListIndex, sourceList, sourceCards;
			state.board.forEach((e, i) => {

				if (e.id == sourceListId) {

					sourceListIndex = i;
					sourceList = e;
					sourceCards = e.cards;
				}
			});

			if (sourceListId == destinationListId) {

				sourceCards.splice(destinationIndex, 0, sourceCards.splice(sourceIndex, 1)[0])
				return state;
			}

			let destinationListIndex, destinationList, destinationCards;
			state.board.forEach((e, i) => {

				if (e.id == destinationListId) {

					destinationListIndex = i;
					destinationList = e;
					destinationCards = e.cards;
				}
			});

			destinationCards.splice(destinationIndex, 0, sourceCards[sourceIndex]);
			sourceCards.splice(sourceIndex, 1);

			return state;

		default:
			return state;
	}
}


export default reducer;