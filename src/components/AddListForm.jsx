import React from 'react';
import { connect } from 'react-redux';
import './AddListForm.css';

const introKeyCode = 13;
const escapeKeyCode = 27;

class AddListForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			value: '',
			addListFormVisible: false
		};

		console.log(
			JSON.stringify(this, null, 2)
		);
	}

	onSubmitHandle = (e) => {

		console.log(this);

		e.preventDefault();
		if (this.state.value && this.state.value.trim()) {
			this.props.addList(this.state.value.trim());
		}
	}

	onKeyUpHandle = (e) => {
		console.log('key up', e.keyCode);

		this.setState({
			...this.state,
			value: e.target.value
		});
	};

	RenderAddListButton = (props) => {

		return (
			<input id="addListButton" type="button" onClick={() => props.showAddListForm()} value="+ Add Another list"/>
		);
	}

	RenderAddListForm = (props) => {

		return (
	
			<form id="addListForm" onSubmit={this.onSubmitHandle}>
				<input type="text" name="newListName" id="newListName" placeholder="Introduce the name of the list" onKeyUp={(e) => this.onKeyUpHandle(e)} />
				<input type="submit" value="Add list" />
				<input type="button" value="X" onClick={() => props.hideAddListForm()} />
			</form>
		);
	}

	render() {
		return (
			<li id="addListColumn">
				{this.props.addListFormVisible ? this.RenderAddListForm(this.props) : this.RenderAddListButton(this.props)}
			</li>
		)
	};
}





const mapStateToProps = (state) => ({
	addListFormVisible: state.addListFormVisible
});

const mapDispatchToProps = (dispatch) => ({

	showAddListForm: () => {
		console.log('dispatch ADD_LIST_FORM_SHOW');
		dispatch({
			type: 'ADD_LIST_FORM_SHOW'
		});
	},

	hideAddListForm: () => {
		console.log('dispatch ADD_LIST_FORM_HIDE');
		dispatch({
			type: 'ADD_LIST_FORM_HIDE'
		});
	},

	addList: (title) => {
		console.log('dispatch ADD_LIST');
		dispatch({
			type: 'ADD_LIST',
			payload: {
				id: Date.now(),
				title: title,
			}
		});
	},
});

const connected = connect(mapStateToProps, mapDispatchToProps)(AddListForm);
export default connected;