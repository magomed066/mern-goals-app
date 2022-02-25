const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
	{
		lastName: {
			type: String,
			required: [true, 'Please add last name!'],
		},
		firstName: {
			type: String,
			required: [true, 'Please add first name!'],
		},
		email: {
			type: String,
			required: [true, 'Please add an email!'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please add a password!'],
		},
	},
	{
		timestamps: true,
	},
)

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		return next()
	}

	const salt = await bcrypt.genSalt(10)
	this.password = await bcrypt.hash(this.password, salt)
})

userSchema.method('comparePasswords', async function (password) {
	return await bcrypt.compare(password, this.password)
})

module.exports = mongoose.model('User', userSchema)
