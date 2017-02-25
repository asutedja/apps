import React from 'react'
import * as action from './reducer/reducer'
import { connect } from 'react-redux'

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				Hi!
			</div>
			)
	}
}

function mapStateToProps(state) {
	return {
		name:state.name
	}
}

export default connect(mapStateToProps)(App)