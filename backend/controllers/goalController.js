const asyncHandler = require('express-async-handler')

// @desc Get Goals
// @route GET /api/goals
// @access private
const getGoals = asyncHandler(async (req, res, next) => {
	res.status(200).json({ message: 'Get Goals' })
})

// @desc Set Goal
// @route POST /api/goals
// @access private
const setGoal = asyncHandler(async (req, res, next) => {
	if (!req.body.text) {
		res.status(400)
		throw new Error('Please add a text field!')
	}

	res.status(200).json({ message: 'Set Goal', data: req.body.text })
})

// @desc Update Goal
// @route PUT /api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res, next) => {
	res.status(200).json({ message: `Update goal ${req.params.id}` })
})

// @desc Delete Goal
// @route Delete /api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res, next) => {
	res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
}
