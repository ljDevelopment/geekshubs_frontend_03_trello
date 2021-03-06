import React from 'react';
import { connect } from 'react-redux';
import './List.css';
import Card from './Card'
import AddCardForm from './AddCardForm'
import { Droppable, Draggable } from 'react-beautiful-dnd';

class List extends React.Component {

	render() {
		return (
			<li className="list">

				<div className="listTitle">
					<input type="button" value="-" onClick={() => this.props.removeList(this.props.list.id)} />
					<div>
						{this.props.list.title}
					</div>
				</div>
				<Droppable droppableId={this.props.list.id.toString()}>
					{(provided, snapshot) => (
						<ul
							ref={provided.innerRef}
						>
							{this.props.cards.map((c, i) => (
								<Draggable
									key={c.id}
									draggableId={c.id.toString()}
									index={i}>
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
										>
											<Card card={c} key={i} />
										</div>
									)}
								</Draggable>
							))}

							<AddCardForm listId={this.props.listId} />
						</ul>
					)}
				</Droppable>
			</li>
		);
	}
}

const mapStateToProps = (state, props) => ({
	board: state.board,
	list: state.board.find(e => e.id === props.listId),
	cards: state.board.find(e => e.id === props.listId).cards
});

const mapDispatchToProps = (dispatch) => ({

	removeList: (listId) => {

		dispatch({
			type: 'REMOVE_LIST',
			listId: listId,
		});
	}
})

const connected = connect(mapStateToProps, mapDispatchToProps)(List);
export default connected;