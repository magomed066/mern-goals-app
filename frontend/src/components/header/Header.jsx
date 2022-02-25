import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaUserAlt } from 'react-icons/fa'

const Header = () => {
	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<Container>
				<Navbar.Brand to="/" as={Link}>
					Goals Setter
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link
							to="/login"
							as={Link}
							className="d-flex align-items-center"
						>
							<FaSignInAlt className="me-2" />
							Login
						</Nav.Link>
						<Nav.Link
							to="/register"
							as={Link}
							className="d-flex align-items-center"
						>
							<FaUserAlt className="me-2" />
							Register
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
