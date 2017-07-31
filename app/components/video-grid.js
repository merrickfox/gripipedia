import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'
import SingleVideo from './video'
import {fetchVideoFromId} from '../api/youtube-api'

class VideoGrid extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			youtube_data: null
		};
	}

	async componentWillReceiveProps(nextProps) {
		if (!nextProps.data.loading && nextProps.data.getTechniques) {
			const ids = nextProps.data.getTechniques.map((obj) => obj.youtube_id);

			const data = await fetchVideoFromId(ids);
			this.setState({
				youtube_data: data.items
			});
		}
	}

	render () {
		const {
			loading,
			getTechniques
		} = this.props.data;

		return (
			<div>
				{loading &&
					<div>Loading...</div>
				}

				{getTechniques &&
				this.state.youtube_data &&
				this.state.youtube_data.map(item => (
					<SingleVideo key={item.id} {...item} />
				))
				}

			</div>
		)
	}

}

const Techniques = gql`
  query techniques($position: String!, $dominance: String!, $technique_type: String!) {
  		getTechniques(position: $position, dominance: $dominance, technique_type: $technique_type) {
  			title,
				position,
				dominance,
				technique_type,
				youtube_id,
				upvotes
			}
  }
`;


export default graphql(Techniques, {
	options: ({ url: { query }, ...rest }) => ({ variables: { position: query.position || rest.position, dominance: query.dominance || rest.dominance, technique_type: query.technique_type || rest.technique_type } })
})(VideoGrid);