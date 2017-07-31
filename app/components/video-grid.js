import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'
import Router from 'next/router'

class VideoGrid extends React.Component {

	componentDidMount () {
		console.log('props', this.props.data)
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
				<div>

				</div>
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