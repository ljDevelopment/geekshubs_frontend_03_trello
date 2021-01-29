import React from 'react';
import { connect } from 'react-redux';
import './Item.css';

function Item(props) {

	return (
		<li>
			<b>{props.listid}</b>
			{JSON.stringify(props)}
		</li>
	);
}
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
})

const connected = connect(mapStateToProps, mapDispatchToProps)(Item);
export default connected;