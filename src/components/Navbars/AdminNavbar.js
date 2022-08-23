import React, { Component } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Button,
  Image,
} from 'react-bootstrap'

import routes from 'routes.js'
import { IoMdNotificationsOutline, IoMdPerson } from 'react-icons/io'
import { FiLogOut, FiSettings, FiShare2 } from 'react-icons/fi'
function Header() {
  const location = useLocation()
  const mobileSidebarToggle = (e) => {
    e.preventDefault()
    document.documentElement.classList.toggle('nav-open')
    var node = document.createElement('div')
    node.id = 'bodyClick'
    node.onclick = function () {
      this.parentElement.removeChild(this)
      document.documentElement.classList.toggle('nav-open')
    }
    document.body.appendChild(node)
  }

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name
      }
    }
    return 'Brand'
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
            <Nav.Item>
              <Nav.Link
                data-toggle="dropdown"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className="m-0"
              >
                <span className="d-lg-none ml-1">Dashboard</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto align-items-center" navbar>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <IoMdNotificationsOutline size={20} />
              </Nav.Link>
            </Nav.Item>
            <Dropdown align={'end'}>
              <Dropdown.Toggle
                aria-expanded={false}
                aria-haspopup={true}
                as={Nav.Link}
                data-toggle="dropdown"
                // id="navbarDropdownMenuLink"
                id="dropdown-basic"
                variant="default"
                className="m-0"
              >
                <Image
                  style={{
                    borderRadius: 100,
                    height: 30,
                    width: 30,
                  }}
                  src={require('../../assets/img/user.png')}
                />
              </Dropdown.Toggle>
              <Dropdown.Menu as={Nav.Item}>
                <Dropdown.Item
                  disabled
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    flexDirection: 'column',
                    alignItems: 'center',
                    display: 'flex',
                    paddingTop: 10,
                  }}
                >
                  <Image
                    style={{
                      borderRadius: 100,
                      height: 60,
                      width: 60,
                    }}
                    src={require('../../assets/img/user.png')}
                  />
                  <h5 style={{ fontWeight: '600', margin: 0 }}>John due</h5>
                  <p style={{ margin: 0 }}>0813-xxxx-xxxx</p>
                </Dropdown.Item>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <IoMdPerson style={{ marginRight: 20 }} />
                  Account
                </Dropdown.Item>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <FiSettings style={{ marginRight: 20 }} />
                  Settings
                </Dropdown.Item>
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <FiShare2 style={{ marginRight: 20 }} />
                  Sharing
                </Dropdown.Item>
                <div
                  style={{ height: 0.5, backgroundColor: 'rgba(0,0,0,.2)' }}
                />
                <Dropdown.Item
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  style={{ color: 'red' }}
                >
                  <FiLogOut style={{ marginRight: 20 }} />
                  Log out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
