import { autobind } from 'core-decorators';
import { techniqueMap } from '../config/technique-map';

class TechniqueForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			youtube_value: '',
			youtube_id: '',
			position: '',
			dominance: '',
			technique_type: '',
		};
	}

	@autobind
	youtubeIdParser (url) {
		const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
		const match = url.match(regExp);
		return (match&&match[7].length==11)? match[7] : false;
  }

	@autobind
	handleYoutubeUrlChange(event) {
		const value = event.target.value
		this.setState({value});
		console.log(this.youtubeIdParser(value))
	}

	@autobind
	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	@autobind
	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Which position is this technique from?:
					<select
						name="position"
						id="position"
						value={this.state.position}
						onChange={this.handleChange}
					>
						{techniqueMap.position.map(item => (
							<option
								value={item.option}
								key={item.option}
							>
								{item.name}
							</option>
						))}
					</select>
				</label>

				<label>
					From top (or dominant) or bottom?:
					<select
						name="dominance"
						id="dominance"
						value={this.state.position}
						onChange={this.handleChange}
					>
						{techniqueMap.dominance.map(item => (
							<option
								value={item.option}
								key={item.option}
							>
								{item.name}
							</option>
						))}
					</select>
				</label>

				<label>
					What kind of technique is demonstrated?:
					<select
						name="technique_type"
						id="technique_type"
						value={this.state.position}
						onChange={this.handleChange}
					>
						{techniqueMap.technique_type.map(item => (
							<option
								value={item.option}
								key={item.option}
							>
								{item.name}
							</option>
						))}
					</select>
				</label>

				<label>
					Youtube URL:
					<input type="text" value={this.state.value} onChange={this.handleYoutubeUrlChange} />
				</label>
				<input type="submit" value="Submit" />

				{ /*language=SCSS*/ }
				<style jsx>{`

      		form {
      			display: flex;
						flex-direction: column;
      			justify-content: center;
      		}

    		`}</style>
			</form>
		);
	}

}

export default TechniqueForm;