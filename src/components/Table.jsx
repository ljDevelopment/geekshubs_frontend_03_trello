import React from 'react';
import { connect } from 'react-redux';
import './Table.css';
import List from './List'

function Table(props) {
	console.log(
		JSON.stringify(props, null, 2)
	);
	return (
		<div className='controls'>
				<button onClick={() => props.addList()}>+ Add another list</button>
			<ul>
				{props.table.map((list, i) => (
					<List list={list} key={i}/>
				))}
			</ul>
		</div>
	);
}

const mapStateToProps = (state) => ({
	table: state.table,
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

const connected = connect(mapStateToProps, mapDispatchToProps)(Table);
export default connected;