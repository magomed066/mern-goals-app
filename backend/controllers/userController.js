const asyncHandler = require('express-async-handler')
const generateToken = require('../helpers/generateToken')
const User = require('../models/userModel')

// @desc Register new user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res, next) => {
	const { firstName, lastName, email, password } = req.body

	if (!lastName || !firstName || !email || !password) {
		res.status(400)
		throw new Error('Please add all fields')
	}

	const userExists = await User.findOne({ email })

	if (userExists) {
		res.status(400)
		throw new Error('User already exists!')
	}

	const user = await User.create({
		email,
		firstName,
		lastName,
		password,
	})

	if (user) {
		res.status(201).json({
			message: 'User registered!',
			user: {
				_id: user._id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				token: generateToken(user._id),
			},
		})
	} else {
		res.status(400)
		throw new Error('Invalid user data...')
	}
})

// @desc Login user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body

	const user = await User.findOne({ email })

	if (user && (await user.comparePasswords(password))) {
		res.status(201).json({
			_id: user._id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			token: generateToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error('Invalid cridentials')
	}
})

// @desc Get user data
// @route Get /api/users/:id
// @access private
const getUserData = asyncHandler(async (req, res, next) => {
	const { _id, firstName, lastName, email } = await User.findById(req.user._id)

	res.status(200).json({
		_id,
		firstName,
		lastName,
		email,
	})
})

module.exports = {
	registerUser,
	loginUser,
	getUserData,
}
