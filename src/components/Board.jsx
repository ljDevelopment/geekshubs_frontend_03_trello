import React from 'react';
import { connect } from 'react-redux';
import './Board.css';
import AddListForm from './AddListForm'
import List from './List'


class Board extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='board'>
				<ul>
					{this.props.board.map((list, i) => (
						<List listId={list.id} key={i} />
					))}
					<AddListForm />
				</ul>
			</div>
		)
	};
}


const mapStateToProps = (state) => ({
	board: state.board,
});

const mapDispatchToProps = (dispatch) => ({
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Board);
export default connected;