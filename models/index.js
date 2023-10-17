const User = require('./User');
const Club = require('./Club');

User.hasMany(Club, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Club.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User,Club };
