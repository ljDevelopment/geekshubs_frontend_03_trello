import logo from './logo.svg';
import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import Table from './components/Table'

function App(props) {
  return (
    <div className="App">
        <pre>
			<Table />
			{
				JSON.stringify(props, null, 2)
			}
		</pre>
    </div>
  );
}

const mapStateToProps = state => ({state : state}) 
const mapDispatchToProps = (dispacth) => ({

})

const connectAccp = connect(mapStateToProps, mapDispatchToProps)(App)
export default connectAccp;
