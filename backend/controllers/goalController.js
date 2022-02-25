const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')
// @desc Get Goals
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res, next) => {
	const goals = await Goal.find({ user: req.user._id })

	res.status(200).json(goals)
})

// @desc Set Goal
// @route POST /api/goals
// @access private
const setGoal = asyncHandler(async (req, res, next) => {
	if (!req.body.text) {
		res.status(400)
		throw new Error('Please add a text field!')
	}

	const goal = await Goal.create({ text: req.body.text, user: req.user._id })

	res.status(200).json({
		message: 'The goal was successfully added!',
		data: goal,
	})
})

// @desc Update Goal
// @route PUT /api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res, next) => {
	const { id } = req.params
	const { text } = req.body

	const goal = await Goal.findById(id)

	if (!goal) {
		res.status(400)
		throw new Error('Goal not found!')
	}

	const user = await User.findById(req.user.id)

	if (!user) {
		res.status(401)
		throw new Error('User not found')
	}

	// Make sure the logged in user matches the goal user
	if (goal.user.toString() !== user.id) {
		res.status(401)
		throw new Error('User not authorized...')
	}

	const updatedGoal = await Goal.findByIdAndUpdate(id, { text }, { new: true })

	res
		.status(200)
		.json({ message: 'The goal was successfully updated!', data: updatedGoal })
})

// @desc Delete Goal
// @route Delete /api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res, next) => {
	const { id } = req.params

	const goal = await Goal.findById(id)

	if (!goal) {
		res.status(400)
		throw new Error('Goal not found!')
	}

	const user = await User.findById(req.user.id)
	// console.log(user)

	if (!user) {
		res.status(401)
		throw new Error('User not found')
	}

	// Make sure the logged in user matches the goal user
	if (goal.user.toString() !== user.id) {
		res.status(401)
		throw new Error('User not authorized...')
	}

	await goal.remove()

	res.status(200).json({ message: `The goal was deleted!` })
})

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
}
