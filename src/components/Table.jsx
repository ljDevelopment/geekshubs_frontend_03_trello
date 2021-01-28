import React from 'react';
import { connect } from 'react-redux';
import './Table.css';
import List from './List'

function Table(props) {
	const onKeyUpHandle = (e) => {
		console.log('key up', e.keyCode);

		if (e.keyCode === 13 && e.target.value.trim()) {
			props.addTodo(e.target.value.trim());
			e.target.value = '';
		}
	};
	console.log(
		JSON.stringify(props, null, 2)
	);
	return (
		<div className='controls'>
			<input
				type='text'
				placeholder='add todo here'
				onKeyUp={(e) => onKeyUpHandle(e)}
			/>
			<div className='filterSelector'>
				<button onClick={() => props.addList()}>+ Add another list</button>
				<button onClick={() => props.changeVisibility('ALL')}>
					All
		  </button>
				<button
					onClick={() => props.changeVisibility('COMPLETED')}
				>
					Completed
		  </button>
				<button
					onClick={() => props.changeVisibility('NO_COMPLETED')}
				>
					No Completed
		  </button>
		  </div>
		  {props.table.map((list, i) => (
			 <div key={i}>a</div>
		  ))}
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
	addTodo: (text) => {
		console.log('dispatch ADD_TODO');

		dispatch({
			type: 'ADD_TODO',
			payload: text,
			completed: false,
			id: Date.now(),
		});
	},
	changeVisibility: (setting) =>
		dispatch({
			type: 'CHANGE_VISIBILITY',
			payload: setting,
		}),
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Table);
export default connected;