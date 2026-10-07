import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BasicJsx from './component/BasicJsx';


function App() {
  return (
    <>
      <Container className='my-5'>
        <Row>
          <Col md={12}>
            <BasicJsx />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
