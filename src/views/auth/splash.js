import React, { useEffect } from 'react'
import { Button, Card, Container, Image } from 'react-bootstrap'
import { useHistory } from 'react-router'
export default function Splash() {
const navigation=	useHistory()
  useEffect(() => {
		navigation.replace('auth/login')
	}, [])
	
  return (
    <Container fluid>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          height: '100vh',
        }}
      >
        <img
          alt="logo"
          style={{
            height: 100,
            width: 100,
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Wikimedia-logo.svg/800px-Wikimedia-logo.svg.png"
        ></img>
      </div>
    </Container>
  )
}
