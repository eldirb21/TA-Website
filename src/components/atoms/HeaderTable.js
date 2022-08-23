import React from 'react'
import {
  Button,
  Card,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from 'react-bootstrap'
import { IoFilterSharp } from 'react-icons/io5'
import { TbSortAscending2 } from 'react-icons/tb'

export default function HeaderTable({ onClick, btntitle }) {
  return (
    <Card.Header>
      <Row className="justify-content-center">
        <Col md="7 mb-3">
          <Button onClick={onClick} className="btn-sm" variant="primary">
            <i className="nc-icon nc-simple-add mr-2" />
            {btntitle}
          </Button>
        </Col>
        <Col md="5">
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}
          >
            <InputGroup size="sm" className="mr-3">
              <Form.Control
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Keyword"
                aria-label="Small"
                type="text"
              />
              <InputGroup.Text style={{ height: 31 }} id="inputGroup-sizing-sm">
                Search
              </InputGroup.Text>
            </InputGroup>

            <Dropdown
              className="mr-3"
              style={{
                justifyContent: 'center',
                display: 'flex',
              }}
              align={'end'}
            >
              <Dropdown.Toggle
                style={{ borderWidth: 0 }}
                variant="link"
                bsPrefix="p-0"
              >
                <TbSortAscending2 size={25} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              className="mr-2"
              style={{ justifyContent: 'center', display: 'flex' }}
              align={'end'}
            >
              <Dropdown.Toggle
                style={{ borderWidth: 0 }}
                variant="link"
                bsPrefix="p-0"
              >
                <IoFilterSharp size={25} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
			{/* <div>
				<p>10 perpages</p>
			</div> */}
    </Card.Header>
  )
}
