import React from 'react';
import { Card, Figure, Button } from 'react-bootstrap';

export const Profile = () => {
  return (
    <div
      className='m-2'
    >
      <div
        className='d-flex m-5'
      >
        <Figure>
          <Figure.Image
            className='rounded-circle'
            width={300}
            height={300}
            alt="150x150"
            src="https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg?w=2000"
          />
        </Figure>
        <div
          className='d-flex flex-column justify-content- mx-5'
        >
          <h1>
            Nombre
          </h1>
          <h4>
            Username
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi placeat provident modi quam amet, temporibus nihil vitae alias nostrum quos sint quo quae quod expedita harum optio in quasi beatae.
          </p>
        </div>
      </div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
