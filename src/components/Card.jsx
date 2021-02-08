import React from 'react';
import { connect } from 'react-redux';
import './Card.css';

function Card(props) {

	return (
		<li className="Card">
			<input type="button" value="-" onClick={() => props.removeCard(props.card.id)} />
			<div className="CardTitle">
				<div>
					{props.card.text}
				</div>
			</div>
		</li>
	);
}
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

	removeCard: (cardId) => {

		dispatch({
			type: 'REMOVE_CARD',
			cardId: cardId,
		});
	}
})

const connected = connect(mapStateToProps, mapDispatchToProps)(Card);
export default connected;