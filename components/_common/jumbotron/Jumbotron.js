import './jumbotron.scss'

import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'react-bootstrap'

export default function Jumbotron (props) {
  return (
    <div className='subheader'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg='12' xl='10'>
            <h1>{props.title}</h1>
            {props.children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Jumbotron.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}
