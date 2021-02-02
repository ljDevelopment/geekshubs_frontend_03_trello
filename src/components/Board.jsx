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
					<List listId={list.id} key={i} />
				))}
				<li id="addListColumn">
					{props.addListFormVisible ? AddListForm(props) : AddListButton(props)}
				</li>
			</ul>
		</div>
	);
}

function AddListButton(props) {

	return (

		<div id="addListButton">
			<a onClick={() => props.showAddListForm()} href="#">+ Add another list</a>
		</div>
	);
}

function AddListForm(props) {

	return (

		<form id="addListForm">
			<input type="text" name="newListName" id="newListName" placeholder="Introduce the name of the list" />
			<input type="button" value="Add list" />
			<input type="button" value="X" onClick={() => props.hideAddListForm()} />
		</form>
	);
}


const mapStateToProps = (state) => ({
	board: state.board,
	addListFormVisible: state.addListFormVisible
});

const mapDispatchToProps = (dispatch) => ({

	showAddListForm: () => {
		console.log('dispatch ADD_LIST_FORM_SHOW');
		dispatch({
			type: 'ADD_LIST_FORM_SHOW'
		});
	},

	hideAddListForm: () => {
		console.log('dispatch ADD_LIST_FORM_HIDE');
		dispatch({
			type: 'ADD_LIST_FORM_HIDE'
		});
	},

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