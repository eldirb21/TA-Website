import React, { useState } from 'react'
import { Pagination } from 'react-bootstrap'
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import datas from 'services/datas/data-sampel'

export default function Report() {
  const [data, setdata] = useState(datas)
	const [pages, setpages] = useState(1)
  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card className="strpied-tabled-with-hover">
            <Card.Header>
              <Card.Title as="h4">Report Collection</Card.Title>
            </Card.Header>
            <Card.Body className="table-full-width table-responsive px-0">
              <Table className="table-hover table-striped">
                <thead>
                  <tr>
                    <th className="border-0">ID</th>
                    <th className="border-0">Name</th>
                    <th className="border-0">Salary</th>
                    <th className="border-0">Country</th>
                    <th className="border-0">City</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((x, i) => {
                    return (
                      <tr>
                        <td>{x.ID}</td>
                        <td>{x.Name}</td>
                        <td>{x.Salary}</td>
                        <td>{x.Country}</td>
                        <td>{x.City}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
							<Pagination className="ml-3">
                {[1, 2, 3, 4, 5, 6].map((x, i) => (
                  <Pagination.Item
                    key={i}
                    activeLabel=""
                    active={x == pages}
                    onClick={() => setpages(x)}
                  >
                    {x}
                  </Pagination.Item>
                ))}
              </Pagination>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
