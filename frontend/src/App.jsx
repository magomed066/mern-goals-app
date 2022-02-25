import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Dashboard, Login, Register } from './pages'
import { Header } from './components'
import { Container, Row, Col } from 'react-bootstrap'

const App = () => {
	return (
		<>
			<Router>
				<Container>
					<Row>
						<Col xs={12} sm={12} md={12}>
							<Header />
							<Routes>
								<Route path="/" element={<Dashboard />} />
								<Route path="/register" element={<Register />} />
								<Route path="/login" element={<Login />} />
							</Routes>
						</Col>
					</Row>
				</Container>
			</Router>
		</>
	)
}

export default App
