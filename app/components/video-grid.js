import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'


export const VideoGrid = ({ data: { loading, allUsers, error } }) => {
	if (loading) return <div>Loading</div>;
	if (error) return <h1>ERROR</h1>;
	console.log('data', allUsers)
	return (
		<div>
			this is the video grid
		</div>
	);
}

export const TEST_QUERY = gql`
  {
  allUsers {
    id
    username
  }
	}
`;

export const withData = graphql(TEST_QUERY);
console.log(TEST_QUERY)


export default withData(VideoGrid);