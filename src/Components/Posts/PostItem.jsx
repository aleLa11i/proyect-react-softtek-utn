import { Button, Card, Image, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import * as moment from 'moment';

export const PostItem = ( {data} ) => {
  console.log(moment.locale());
  const navigate = useNavigate();
  
  return (
    <div
    >
        <Card
          className='my-3 post-item' 
        >
          <ListGroup.Item>
            <Image 
              className='img-face-post me-3'
              src={ data.user.image } 
              circle 
            />
            { data.user.name }
          </ListGroup.Item>

          <Card.Body>
            <Card.Img 
              className='post-img'
              variant="top" 
              src={ data.mainimage } 
            />
            <Card.Title>
              { data.title }
            </Card.Title>
            <Card.Text>
              <p
                className='txt-post-overflow'
              >
              { data.description }
              </p>
              <h6
                className='time-post'
              >
                { moment(data.date).calendar() }
              </h6>
            </Card.Text>
          </Card.Body>

          <Button 
            className='mb-3 mx-4'
            variant="primary"
            onClick={ ()=> navigate(`/p/${data._id}`) }
          >
            Ver
          </Button>
        </Card>
    </div>
  );
};
