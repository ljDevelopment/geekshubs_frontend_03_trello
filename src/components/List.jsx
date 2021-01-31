import React from 'react';
import { connect } from 'react-redux';
import './List.css';
import Item from './Item'

function List(props) {

	return (
		<li>
			<button onClick={() => props.addItem(props.listId)}>+ {props.listId}</button>
			<ul>

			{JSON.stringify(props)}<br/>
				{props.items.map((item, i) => (
					<Item item={item} key={i} />
				))}
			</ul>
		</li>
	);
}
const mapStateToProps = (state, props) => ({
	table: state.table,
	items : state.table.find(e => e.id === props.listId).items
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