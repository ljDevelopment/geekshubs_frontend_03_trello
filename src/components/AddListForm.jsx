import React from 'react';
import { connect } from 'react-redux';
import './AddListForm.css';

const escapeKeyCode = 27;

class AddListForm extends React.Component {

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
			this.props.addList(this.state.value.trim());
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

	renderAddListIdle = (props) => {

		return (
			<input id="addListButton" type="button" onClick={() => this.setShowForm(true)} value="+ Add another list" />
		);
	}

	renderAddListForm = (props) => {

		return (

			<form id="addListForm" onSubmit={this.onSubmitHandle}>
				<input type="text" name="newListName" id="newListName" placeholder="Enter list title..." onKeyUp={(e) => this.onKeyUpHandle(e)} />
				<div id="addListFormButtons">
					<input type="submit" id="addListSubmit" value="Add list" />
					<input type="button" id="addListCloseButton" value="X" onClick={() => this.setShowForm(false)} />
				</div>
			</form>
		);
	}

	render() {
		return (
			<li id="addListColumn" className={this.state.formVisible ? "addListColumn" : "addListColumnIdle"}>
				{this.state.formVisible ? this.renderAddListForm(this.props) : this.renderAddListIdle(this.props)}
			</li>
		)
	};
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

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