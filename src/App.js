import logo from './logo.svg';
import './App.css';
import React from 'react';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div className="App">
        <pre>
			<button onClick={() => props.addRandomTodo()}>
				add todo
			</button>
			{
				JSON.stringify(props, null, 2)
			}
		</pre>
    </div>
  );
}

const mapStateToProps = state => ({state : state}) 
const mapDispatchToProps = (dispacth) => ({

	addRandomTodo: () => dispacth({
		type: 'ADD_TODO',
		payload: 'borra esta tarea'
	})
})
const connectAccp = connect(
	mapStateToProps, 
	mapDispatchToProps)(App)

export default connectAccp;
