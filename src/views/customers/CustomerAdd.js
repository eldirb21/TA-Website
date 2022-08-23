import ModalCard from 'components/atoms/ModalCard'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

export default function CustomerAdd({ show, title, onHide, data }) {
  return (
    <ModalCard size="xl" show={show} onHide={onHide} title={title}>
      <Form>
        <Row>
          <Col className="pr-1" md="5">
            <Form.Group>
              <label>Company (disabled)</label>
              <Form.Control
                defaultValue="Creative Code Inc."
                disabled
                placeholder="Company"
                type="text"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col className="px-1" md="3">
            <Form.Group>
              <label>Username</label>
              <Form.Control
                defaultValue="michael23"
                placeholder="Username"
                type="text"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col className="pl-1" md="4">
            <Form.Group>
              <label htmlFor="exampleInputEmail1">Email address</label>
              <Form.Control placeholder="Email" type="email"></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="pr-1" md="6">
            <Form.Group>
              <label>First Name</label>
              <Form.Control
                defaultValue="Mike"
                placeholder="Company"
                type="text"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col className="pl-1" md="6">
            <Form.Group>
              <label>Last Name</label>
              <Form.Control
                defaultValue="Andrew"
                placeholder="Last Name"
                type="text"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Form.Group>
              <label>Address</label>
              <Form.Control
                defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                placeholder="Home Address"
                type="text"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="pr-1" md="4">
            <Form.Group>
              <label>City</label>
              <Form.Control
                defaultValue="Mike"
                placeholder="City"
                type="text"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col className="px-1" md="4">
            <Form.Group>
              <label>Country</label>
              <Form.Control
                defaultValue="Andrew"
                placeholder="Country"
                type="text"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col className="pl-1" md="4">
            <Form.Group>
              <label>Postal Code</label>
              <Form.Control placeholder="ZIP Code" type="number"></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Form.Group>
              <label>About Me</label>
              <Form.Control
                cols="80"
                defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                          that two seat Lambo."
                placeholder="Here can be your description"
                rows="4"
                as="textarea"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'flex-end' }}>
          <Col md="1" className="mr-4">
            <Button
              className="btn-fill pull-right"
              type="submit"
              variant="info"
            >
              Cancel
            </Button>
          </Col>
          <Col md="1" className="mr-4">
            <Button
              className="btn-fill pull-right "
              type="submit"
              variant="info"
            >
              Save
            </Button>
          </Col>
        </Row>
        <div className="clearfix"></div>
      </Form>
    </ModalCard>
  )
}
