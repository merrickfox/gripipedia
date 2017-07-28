export default {
	Query: {
		getUser: (parents, {username}, {models}) =>
			models.User.findOne({
				where:{
					username
				}
			}),
		allUsers: (parents, args, {models}) =>
			models.User.findAll()
	},
	Mutation: {
		createUser: (parents, args, {models}) =>
			models.User.create(args),
		updateUser: (parents, {username, newUsername}, {models}) =>
			models.User.update({username: newUsername}, {where: {username}}),
		deleteUser: (parents, args, {models}) =>
			models.User.destroy({ where: args }),
	}
}
