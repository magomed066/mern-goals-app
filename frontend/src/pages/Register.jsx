import React, { useState, useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'

const Register = () => {
	const [data, setData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		password2: '',
	})

	const { firstName, lastName, email, password, password2 } = data

	const onChange = (e) => {
		setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const onSubmit = (e) => {
		e.preventDefault()

		console.log(data)
	}

	return (
		<Row className="justify-content-center mt-5">
			<Col xs={12} sm={12} md={5}>
				<h3 className="d-flex align-items-center justify-content-center">
					<FaUser className="me-2" />
					Register
				</h3>
				<p className="text-center">Please create an account!</p>

				<Form onSubmit={onSubmit}>
					<Form.Group className="mb-3">
						<Form.Label>First Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter first name"
							name="firstName"
							value={firstName}
							onChange={onChange}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Last name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter last name"
							name="lastName"
							value={lastName}
							onChange={onChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							name="email"
							value={email}
							onChange={onChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							name="password"
							value={password}
							onChange={onChange}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Confirm password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Confirm password"
							name="password2"
							value={password2}
							onChange={onChange}
						/>
					</Form.Group>

					<Button variant="dark" type="submit" className="col-12">
						Submit
					</Button>
				</Form>
			</Col>
		</Row>
	)
}

export default Register
