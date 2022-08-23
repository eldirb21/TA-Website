import React from 'react'
import { Card, Modal } from 'react-bootstrap'
import { IoClose } from 'react-icons/io5'
export default function ModalCard({
  size = 'xl',
  show,
  title,
  onHide,
  children,
  ...res
}) {
  return (
    <>
      <Modal size={size} show={show} onHide={onHide}>
        <Modal.Body
          style={{
            position: 'absolute',
            right: 0,
            left: 0,
            top: -25,
          }}
        >
          <Card border="secondary">
            <Card.Header
              style={{
                flexDirection: 'row',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Card.Title as="h4">{title}</Card.Title>
              <IoClose onClick={onHide} size={20} />
            </Card.Header>
            <Card.Body>{children}</Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  )
}
