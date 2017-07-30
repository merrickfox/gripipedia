import React from 'react'
import { connect } from 'react-redux'
import { setPosition, setDominance, setTechniqueType , setPositionStage} from '../actions/position'
import { autobind } from 'core-decorators';
import { techniqueMap } from '../config/technique-map';

class StartingOptions extends React.Component {

	@autobind
	selectOption (option, setter) {
		setter(option);
		this.props.setPositionStage(this.props.stage + 1);
	}

	@autobind
	goBack () {
		this.props.setPositionStage(this.props.stage - 1);
	}

	@autobind
	buttonOptions () {
		const {
			stage,
			setPosition,
			setDominance,
			setTechniqueType
		} = this.props;

		if (stage === 1) {
			return(
				<div className="option-set">
					<h2>Where are you having trouble?</h2>
					<div className="buttons">
						{techniqueMap.positions.map(item => (
							<button
								className="btn-primary"
								onClick={() => {this.selectOption(item.option, setPosition)}}
								type="button"
								key={item.option}
							>
								{item.name}
							</button>
						))}
					</div>
				</div>
			)
		} else if (stage === 2) {
			return (
				<div className="option-set">
					<h2>While you're on the...</h2>
					<div className="buttons">
						{techniqueMap.dominance.map(item => (
							<button
								className="btn-primary"
								onClick={() => {this.selectOption(item.option, setDominance)}}
								type="button"
								key={item.option}
							>
								{item.name}
							</button>
						))}
					</div>
					<div>
						<button className="btn-warn" onClick={() => {this.goBack()}}>
							Back
						</button>
					</div>
				</div>
			)
		} else if (stage === 3) {
			return (
				<div className="option-set">
					<h2>Show me ..</h2>
					<div className="buttons">
						{techniqueMap.technique_type.map(item => (
							<button
								className="btn-primary"
								onClick={() => {this.selectOption(item.option, setTechniqueType)}}
								type="button"
								key={item.option}
							>
								{item.name}
							</button>
						))}
					</div>
					<div>
						<button className="btn-warn" onClick={() => {this.goBack()}}>
							Back
						</button>
					</div>
				</div>
			)
		} else {
			return null;
		}

	}

	render () {
		return(
			<div className="button-options">
				{this.buttonOptions()}

				{ /*language=SCSS*/ }
				<style jsx>{`

      		.button-options {
      			display: flex;
      			justify-content: center;
      		}

          .button-options :global(> .option-set .buttons) {
            display: flex;
            flex-direction: row;
          }

          .button-options :global(> .option-set h2) {
            margin: 16px;
          }

          .button-options :global(> .option-set) {
            display: flex;
            justify-content: center;
            flex-direction: column;
						text-align: center;
          }
    		`}</style>
			</div>
		)
	}

}

const mapStateToProps = state => {
	return {
		position: state.position,
		dominance: state.dominance,
		technique_type: state.techniqueType,
		stage: state.stage
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setPosition: (position) => dispatch(setPosition(position)),
		setDominance: (dominance) => dispatch(setDominance(dominance)),
		setTechniqueType: (type) => dispatch(setTechniqueType(type)),
		setPositionStage: (stage) => dispatch(setPositionStage(stage)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StartingOptions)
