import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'
import Router from 'next/router'

class SingleVideo extends React.Component {

	render () {
		const {
			snippet
		} = this.props;

		return (
			<div>
				<a href={`https://www.youtube.com/watch?v=${this.props.id}`}>
					<h4>{snippet.title}</h4>
					<img src={snippet.thumbnails.default.url} alt=""/>
				</a>
			</div>
		)
	}

}



export default SingleVideo;