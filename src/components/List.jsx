import React from 'react';
import { connect } from 'react-redux';
import './List.css';
import Item from './Item'

function List(props) {

	return (
		<li>
			<button onClick={() => props.addItem(props.list.id)}>+</button>
				<ul>
					{props.list.items.map((item, i) => (
						<Item item={item} key={i} />
					))}
				</ul>
		</li>
	);
}
const mapStateToProps = (state) => ({
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