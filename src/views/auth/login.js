import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
var bg =
  'https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg'
export default function Login() {
  return (
    <Container
      className="vh-100 d-flex flex-column "
      fluid
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'cmultiply',
      }}
    >
      <div
        style={{
          background: `linear-gradient(rgba(8, 140, 111 ),rgba(255, 0, 0, 0.40))`,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Row className="h-100 " md="12">
        <Col
          className="mb-2 d-flex justify-content-center align-items-center"
          md="6"
        >
          <div
            className="col-8"
            style={{
              display: 'flex',
              alignSelf: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              style={{ height: 150 }}
              src={require('../../assets/img/reactlogo.png')}
            />
            <h3
              style={{
                padding: 0,
                margin: 0,
                marginBottom: 10,
                color: '#FFF',
                fontWeight: '700',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Colection App
            </h3>
            <p style={{ textAlign: 'center', color: '#FFF' }}>
              Lorem Ipsum is simply dummy text of the printing and industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s .
            </p>
          </div>
        </Col>
        <Col
          className="mb-2 d-flex justify-content-center align-items-center"
          md="6"
        >
          <form
            style={{
              opacity: 0.8,
              background: `linear-gradient(rgba(8, 110, 111 ),rgba(255, 0, 0, 0.40))`,
              borderWidth: 1,
              borderColor: 'red',
              padding: 50,
              borderRadius: 20,
              width: '80%',
            }}
          >
            <h5
              style={{
                padding: 0,
                margin: 0,
                marginBottom: 10,
                color: '#FFF',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Welcome To
            </h5>
            <h3
              style={{
                padding: 0,
                margin: 0,
                marginBottom: 10,
                color: '#FFF',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Collection App
            </h3>
            <p style={{ textAlign: 'center', color: '#FFF' }}>
              Lorem Ipsum is simply dummy text of the printing and industry.
            </p>
            <div className="mb-3">
              <input
                type="email"
                className="form-control rounded"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </Col>
      </Row>
    </Container>
  )
}
