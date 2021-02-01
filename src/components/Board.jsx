import React from 'react';
import { connect } from 'react-redux';
import './Board.css';
import List from './List'

function Board(props) {
	console.log(
		JSON.stringify(props, null, 2)
	);
	return (
		<div className='board'>
			<ul>
				{props.board.map((list, i) => (
					<List listId={list.id} key={i}/>
				))}
				<li>
					<a id="addListButton" onClick={() => props.addList()} href="#">+ Add another list</a>
				</li>
			</ul>
		</div>
	);
}

const mapStateToProps = (state) => ({
	board: state.board
});

const mapDispatchToProps = (dispatch) => ({
	addList: () => {

		console.log('dispatch ADD_LIST');
		dispatch({
			type: 'ADD_LIST',
			id: Date.now(),
		});
	},
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Board);
export default connected;