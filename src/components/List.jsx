import React from 'react';
import { connect } from 'react-redux';
import './List.css';
import Card from './Card'
import AddCardForm from './AddCardForm'

function List(props) {

	return (
		<li className="list">
			<div className="listTitle">
				<input type="button" value="-" onClick={() => props.removeList(props.list.id)} />
				<div>
					{props.list.title}
				</div>
			</div>
			<ul>
				{props.cards.map((c, i) => (
					<Card card={c} key={i} />
				))}
				<AddCardForm listId={props.listId} />
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

	removeList: (listId) => {

		dispatch({
			type: 'REMOVE_LIST',
			listId: listId,
		});
	}
})

const connected = connect(mapStateToProps, mapDispatchToProps)(List);
export default connected;