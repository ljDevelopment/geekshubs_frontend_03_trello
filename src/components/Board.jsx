import React from 'react';
import { connect } from 'react-redux';
import './Board.css';
import AddListForm from './AddListForm'
import List from './List'
import { DragDropContext } from 'react-beautiful-dnd';

//https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/about/installation.md
class Board extends React.Component {

	onDragEnd = result => {
		console.log(result);
	}

	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
			<div className='board'>
				<ul>
					{this.props.board.map((list, i) => (
						<List listId={list.id} key={i} />
					))}
					<AddListForm />
				</ul>
			</div>
			</DragDropContext>
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