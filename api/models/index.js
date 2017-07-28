import Sequelize from "sequelize";
import user from './user';

const sequelize = new Sequelize('gripipedia_gql', 'merrick', 'gripipedia', {
	host: 'localhost',
	dialect: 'postgres'
});

const db = {
	User: sequelize.import('./user')
};

// Object.keys(db).forEach(function(modelName) {
// 	if ("associate" in db[modelName]) {
// 		db[modelName].associate(db);
// 	}
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;