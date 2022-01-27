const User = require('./User');
const Content = require('./Content');

User.belongsToMany(Content, {
    foreignKey: ''
});

Content.hasOne(User, {
    foreignKey: ''
})

module.exports = {
    User,
    Content
}