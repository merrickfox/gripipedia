export default `
	type User {
		id: Int!
    username: String!
    createdAt: String!
    updatedAt: String! 
	}
	
	type Technique {
		id: Int!
		title: String!,
		youtube_id: String!,
		position: String!,
		dominance: String!,
		technique_type: String!,
		upvotes: Int!,
		downvotes: Int!,
	}
	
	type Query {
		allUsers: [User!]!
		getUser(username: String!): User
		allTechniques: [Technique!]!
		getTechniques(position: String!, dominance: String!, technique_type: String!): [Technique!]!
	}
	
	type Mutation {
		createUser(username: String!): User
		updateUser(username: String!, newUsername: String!): Int!
		deleteUser(username: String!): Int!
		createTechnique(youtube_id: String!, title: String!, position: String!, dominance: String!, technique_type: String!): Technique
		deleteTechnique(youtube_id: String!): Int!
		upvoteTechnique(youtube_id: String!): Technique!
		downvoteTechnique(youtube_id: String!): Technique!
	}
`;
