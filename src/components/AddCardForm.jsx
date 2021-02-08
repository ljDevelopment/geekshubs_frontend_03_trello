import React from 'react';
import { connect } from 'react-redux';
import './AddCardForm.css';

const escapeKeyCode = 27;

class AddCardForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			value: '',
			formVisible: false
		};
	}

	onSubmitHandle = (e) => {

		e.preventDefault();

		if (this.state.value && this.state.value.trim()) {
			this.props.addCard(this.props.list.id, this.state.value.trim());
			this.setShowForm(false);
		}
	}

	onKeyUpHandle = (e) => {
		
		if (e.keyCode === escapeKeyCode) {
			this.setState({
				...this.state,
				value: ""
			});
			this.setShowForm(false);
			return;
		}

		this.setState({
			...this.state,
			value: e.target.value
		});
	};

	setShowForm = (show) => {
		this.setState({
			...this.state,
			formVisible: show,
			value: ""

		});	
	}

	renderAddCardIdle = (props) => {

		return (
			<input className="addCardButton" type="button" onClick={() => this.setShowForm(true)} value="+ Add another card" />
		);
	}

	renderAddCardForm = (props) => {

		return (

			<form className="addCardForm" onSubmit={this.onSubmitHandle}>
				<input type="text" className="newCardName" placeholder="Enter a title for this card..." onKeyUp={(e) => this.onKeyUpHandle(e)} />
				<div className="addCardFormButtons">
					<input type="submit" className="addCardSubmit" value="Add card" />
					<input type="button" className="addCardCloseButton" value="X" onClick={() => this.setShowForm(false)} />
				</div>
			</form>
		);
	}

	render() {
		return (
			<li className={this.state.formVisible ? "addCard" : "addCardIdle"}>
				{this.state.formVisible ? this.renderAddCardForm(this.props) : this.renderAddCardIdle(this.props)}
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