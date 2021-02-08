import React from 'react';
import { connect } from 'react-redux';
import './AddCardForm.css';

const escapeKeyCode = 27;

class AddCardForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			value: '',
			addCardFormVisible: false
		};
	}

	onSubmitHandle = (e) => {

		e.preventDefault();

		if (this.state.value && this.state.value.trim()) {
			this.props.addCard(this.props.list.id, this.state.value.trim());
			this.setShowAddCardForm(false);
		}
	}

	onKeyUpHandle = (e) => {
		
		if (e.keyCode === escapeKeyCode) {
			this.setState({
				...this.state,
				value: ""
			});
			this.setShowAddCardForm(false);
			return;
		}

		this.setState({
			...this.state,
			value: e.target.value
		});
	};

	setShowAddCardForm = (show) => {
		this.setState({
			...this.state,
			addCardFormVisible: show
		});	
	}

	renderAddCardIdle = (props) => {

		return (
			<input className="addCardButton" type="button" onClick={() => this.setShowAddCardForm(true)} value="+ Add Another list" />
		);
	}

	renderAddCardForm = (props) => {

		return (

			<form className="addCardForm" onSubmit={this.onSubmitHandle}>
				<input type="text" placeholder="Introduce the name of the list..." onKeyUp={(e) => this.onKeyUpHandle(e)} />
				<div className="addCardFormButtons">
					<input type="submit" className="addCardSubmit" value="Add list" />
					<input type="button" className="addCardCloseButton" value="X" onClick={() => this.setShowAddCardForm(false)} />
				</div>
			</form>
		);
	}

	render() {
		return (
			<li className={this.state.addCardFormVisible ? "addCardColumn" : "addCardColumnIdle"}>
				{this.state.addCardFormVisible ? this.renderAddCardForm(this.props) : this.renderAddCardIdle(this.props)}
			</li>
		)
	};
}


const mapStateToProps = (state, props) => ({
	list: state.board.find(e => e.id === props.listId),
});

const mapDispatchToProps = (dispatch) => ({

	addCard: (listId, text) => {

		dispatch({
			type: 'ADD_ITEM',
			listId: listId,
			payload:
			{
				id: Date.now(),
				text: text,
				completed: false
			}
		});
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps)(AddCardForm);
export default connected;