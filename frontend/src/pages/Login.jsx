import React, { useState, useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { FaUser, FaSignInAlt } from 'react-icons/fa'

const Login = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = data

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
					<FaSignInAlt className="me-2" />
					Login
				</h3>
				<p className="text-center">Login and start setting goals!</p>

				<Form onSubmit={onSubmit}>
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

					<Button variant="dark" type="submit" className="col-12">
						Submit
					</Button>
				</Form>
			</Col>
		</Row>
	)
}

export default Login
