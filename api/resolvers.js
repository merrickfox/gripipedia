export default {
	Query: {
		getUser: (parents, {username}, {models}) =>
			models.User.findOne({
				where:{
					username
				}
			}),
		allUsers: (parents, args, {models}) =>
			models.User.findAll(),

		getTechniques: (parents, {position, dominance, technique_type}, {models}) =>
			models.Technique.findAll({
				where:{
					position,
					dominance,
					technique_type
				}
			}),
		allTechniques: (parents, args, {models}) =>
			models.Technique.findAll(),
	},
	Mutation: {
		createUser: (parents, args, {models}) =>
			models.User.create(args),
		updateUser: (parents, {username, newUsername}, {models}) =>
			models.User.update({username: newUsername}, {where: {username}}),
		deleteUser: (parents, args, {models}) =>
			models.User.destroy({ where: args }),
		createTechnique: (parents, args, {models}) => {
			args.upvotes = 0;
			args.downvotes = 0;
			models.Technique.create(args)
		},
		deleteTechnique: (parents, args, {models}) =>
			models.Technique.destroy({ where: args }),
		upvoteTechnique: async (parents, {youtube_id}, {models}) => {
			const current = await models.Technique.findOne({
				where:{
					youtube_id
				}
			});
			models.Technique.update({upvotes: current.dataValues.upvotes + 1}, {where: {youtube_id}})
		},
		downvoteTechnique: async (parents, {youtube_id}, {models}) => {
			const current = await models.Technique.findOne({
				where:{
					youtube_id
				}
			});
			models.Technique.update({upvotes: current.dataValues.upvotes - 1}, {where: {youtube_id}})
		},

	}
}
