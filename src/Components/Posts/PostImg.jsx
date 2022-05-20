import { Col, Figure } from "react-bootstrap";

export const PostImg = ({ img, setShow }) => {
  return (
    <Col xs={12} md={2}>
        <Figure
            onClick={ () => setShow({ img, ok:true}) } 
        >
            <Figure.Image
                className="img-grid"
                width={300}
                alt="300x25rem"
                src={img}
            />
        </Figure>
    </Col>
  )
}