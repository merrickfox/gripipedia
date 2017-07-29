import React from 'react'
import { connect } from 'react-redux'
import { setPosition } from '../actions/position'

class StartingOptions extends React.Component {

	componentDidMount () {
		console.log('props', this.props)
		this.props.setPosition('HALF_GUARD');
	}

	render () {
		return(
			<div>
				starting options
			</div>
		)
	}

}

const mapStateToProps = ({ count }) => ({ count })

const mapDispatchToProps = (dispatch) => {
	return {
		setPosition: (position) => dispatch(setPosition(position))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StartingOptions)
