import React from 'react';
import { connect } from 'react-redux';
import './Card.css';

function Card(props) {

	return (
		<li className="Card">
			{props.card.text}
		</li>
	);
}
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
})

const connected = connect(mapStateToProps, mapDispatchToProps)(Card);
export default connected;