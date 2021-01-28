import React from 'react';
import { connect } from 'react-redux';
import './List.css';

function List(props) {

	return (
		<div>
			<ul>
				{props.list.map((todos) => (
					<li>todos</li>
				))}
			</ul>
		</div>
	);
}
const mapDispatchToProps = (dispatch) => ({
})

const connected = connect(null, mapDispatchToProps)(List);
export default connected;