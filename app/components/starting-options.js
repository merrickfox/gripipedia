import React from 'react'
import { connect } from 'react-redux'
import { setPosition, setElevation, setTechniqueType , setPositionStage} from '../actions/position'
import { autobind } from "core-decorators";

class StartingOptions extends React.Component {

	@autobind
	selectOption (option, setter) {
		setter(option);
		this.props.setPositionStage(this.props.stage + 1);
		console.log(this.props)
	}

	@autobind
	buttonOptions () {
		const {
			stage,
			setPosition,
			setElevation,
			setTechniqueType
		} = this.props;

		if (stage === 1) {
			return(
				<div>
					<h2>Where are you having trouble?</h2>
					<button onClick={() => {this.selectOption('GUARD', setPosition)}}>
						Guard
					</button>
					<button onClick={() => {this.selectOption('HALF_GUARD', setPosition)}}>
						Half Guard
					</button>
					<button onClick={() => {this.selectOption('SIDE_CONTROL', setPosition)}}>
						Side Control
					</button>
					<button onClick={() => {this.selectOption('MOUNT', setPosition)}}>
						Mount
					</button>
					<button onClick={() => {this.selectOption('BACK', setPosition)}}>
						Back
					</button>
				</div>
			)
		} else if (stage === 2) {
			return (
				<div>
					<h2>While you're on the...</h2>
					<button onClick={() => {this.selectOption('TOP', setElevation)}}>
						Top
					</button>
					<button onClick={() => {this.selectOption('BOTTOM', setElevation)}}>
						Bottom
					</button>
				</div>
			)
		} else if (stage === 3) {
			return (
				<div>
					<h2>Show me ..</h2>
					<button onClick={() => {this.selectOption('SWEEPS', setTechniqueType)}}>
						Sweeps
					</button>
					<button onClick={() => {this.selectOption('SUBMISSIONS', setTechniqueType)}}>
						Submissions
					</button>
				</div>
			)
		}

	}

	render () {
		return(
			<div>
				{this.buttonOptions()}
			</div>
		)
	}

}

const mapStateToProps = state => {
	return {
		position: state.position,
		elevation: state.elevation,
		technique_type: state.techniqueType,
		stage: state.stage
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setPosition: (position) => dispatch(setPosition(position)),
		setElevation: (elevation) => dispatch(setElevation(elevation)),
		setTechniqueType: (type) => dispatch(setTechniqueType(type)),
		setPositionStage: (stage) => dispatch(setPositionStage(stage)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StartingOptions)
