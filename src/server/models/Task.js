const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    completed: {type: Boolean, required: true},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Tasks', schema)
