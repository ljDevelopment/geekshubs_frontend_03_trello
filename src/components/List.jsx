import React from 'react';
import { connect } from 'react-redux';
import './List.css';
import Card from './Card'

function List(props) {

	return (
		<li className="list">
			{props.list.title}
			<ul>
				{props.cards.map((c, i) => (
					<Card card={c} key={i} />
				))}
				<li className="addCardButton">
					<a onClick={() => props.addItem(props.listId)} href="#">+ Add another card</a>
				</li>
			</ul>
		</li>
	);
}
const mapStateToProps = (state, props) => ({
	board: state.board,
	list: state.board.find(e => e.id === props.listId),
	cards: state.board.find(e => e.id === props.listId).cards
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (listId) => {

		console.log('dispatch ADD_LIST');
		dispatch({
			type: 'ADD_ITEM',
			listId: listId,
			payload:
			{
				id: Date.now(),
				text: 'new',
				completed: false
			}
		});
	}
})

const connected = connect(mapStateToProps, mapDispatchToProps)(List);
export default connected;