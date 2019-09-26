
import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ContentWrapper (props) {
  return (
    <Container>
      <Row className='justify-content-center mb-5'>
        <Col lg='12' xl='10'>
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}

ContentWrapper.propTypes = {
  children: PropTypes.any
}
