const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
// @desc Get Goals
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res, next) => {
	const goals = await Goal.find()

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

	const goal = await Goal.create({ text: req.body.text })

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

	await goal.remove()

	res.status(200).json({ message: `The goal was deleted!` })
})

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
}
