import React from 'react';
import { Col, Container, Figure, Image, Row } from 'react-bootstrap';

export const HomeItem = () => {
  return (
    <div
    className="d-flex justify-content-between align-items-center p-4 m-3"
    style={{
      'background':'#EDEDED'
    }}
  >
    <div
      className="d-flex align-items-center"
    >
      <Figure>
        <Figure.Image
          className='rounded-circle'
          width={110}
          height={110}
          alt="150x150"
          src="https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg?w=2000"
        />
      </Figure>
      <hr 
      style={{
        'height':'200px',
        'width':'3px',
        'margin':'0px 70px'
      }}
      />
      <h3>
        Nombre
      </h3>
    </div>
    
    <h1>
      Titulo
    </h1>

    <div
      className="d-flex align-items-center"
    >
      <img
        src='https://mdbootstrap.com/img/new/standard/city/041.webp'
        className='img-thumbnail'
        alt='...'
        style={{ maxWidth: '17rem', 'marginRight': '100px' }}
      />
      <Container>
        <Row>
          <Col>
            <img
              src='https://mdbootstrap.com/img/new/standard/city/041.webp'
              className='m-1'
              alt='...'
              style={{ maxWidth: '8rem' }}
            />
          </Col>
          <Col>
            <img
              src='https://mdbootstrap.com/img/new/standard/city/041.webp'
              className='m-1'
              alt='...'
              style={{ maxWidth: '8rem' }}
            />
          </Col>
          <Col>
            <img
              src='https://mdbootstrap.com/img/new/standard/city/041.webp'
              className='m-1'
              alt='...'
              style={{ maxWidth: '8rem' }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src='https://mdbootstrap.com/img/new/standard/city/041.webp'
              className='m-1'
              alt='...'
              style={{ maxWidth: '8rem' }}
            />
          </Col>
          <Col>
            <img
              src='https://mdbootstrap.com/img/new/standard/city/041.webp'
              className='m-1'
              alt='...'
              style={{ maxWidth: '8rem' }}
            />
          </Col>
          <Col>
            <img
              src='https://mdbootstrap.com/img/new/standard/city/041.webp'
              className='m-1'
              alt='...'
              style={{ maxWidth: '8rem' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  </div>
  )
}
