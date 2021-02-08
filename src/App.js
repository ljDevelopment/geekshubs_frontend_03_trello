import logo from './logo.svg';
import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import Board from './components/Board'

function App(props) {
  return (
    <div className="App">
		<Board />
    </div>
  );
}

const mapStateToProps = state => ({state : state}) 
const mapDispatchToProps = (dispacth) => ({

})

const connectAccp = connect(mapStateToProps, mapDispatchToProps)(App)
export default connectAccp;
