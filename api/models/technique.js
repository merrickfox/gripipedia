export default (sequelize, DataTypes) => {
	const Technique = sequelize.define("Technique", {
		title: DataTypes.STRING,
		youtube_id: DataTypes.STRING,
		position: DataTypes.STRING,
		dominance: DataTypes.STRING,
		technique_type: DataTypes.STRING,
		upvotes: DataTypes.INTEGER,
		downvotes: DataTypes.INTEGER,
	});

	return Technique;
};