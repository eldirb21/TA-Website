import React, { useState } from 'react'
import { Dropdown, Pagination } from 'react-bootstrap'
import {
  Badge,
  Button,
  Card,
  InputGroup,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Form,
  Col,
} from 'react-bootstrap'
import datas from 'services/datas/data-sampel'
import { IoFilterSharp } from 'react-icons/io5'
import { TbSortAscending2 } from 'react-icons/tb'
import HeaderTable from 'components/atoms/HeaderTable'
import CustomerAdd from './CustomerAdd'
import { BsThreeDotsVertical } from 'react-icons/bs'
export default function Customers() {
  const [data, setdata] = useState(datas)
  const [pages, setpages] = useState(1)
  const [modalShow, setmodalShow] = useState(false)
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <HeaderTable
                btntitle="Add Customer"
                onClick={() => setmodalShow(!modalShow)}
              />
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
													<td width="20">
                        <Dropdown
                          className="my-dropdown-toggle"
                          style={{ justifyContent: 'center', display: 'flex' }}
                          align={'end'}
                        >
                          <Dropdown.Toggle
                            style={{ borderWidth: 0 }}
                            variant="link"
                            bsPrefix="p-0"
                          >
                            <BsThreeDotsVertical />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#">Edit</Dropdown.Item>
                            <Dropdown.Item href="#">Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
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
      <CustomerAdd
        show={modalShow}
        onHide={() => setmodalShow(false)}
        title="Customer Add"
        data={[]}
      />
    </>
  )
}
