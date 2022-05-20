import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { uploadNewPost } from '../../../Actions/posts';
import { DescriptionTextArea } from './DescriptionTextArea';
import { DescriptionTitle } from './DescriptionTitle';


export const SetDescription = () => {

  const { title, mainimage, images, description }= useSelector(state => state.newpost)
  const { uid, name, image }= useSelector(state => state.auth)
  const post = ({ 
        user: { 
            uid,
            name, 
            image
        }, 
        postId: uuidv4(),  
        title, 
        mainimage, 
        images, 
        description,
        date: new Date()
    })

  const dispatch = useDispatch();

  return (
    <div
        className='d-flex align-items-center flex-column m-4'
    >
        <DescriptionTitle />
        <DescriptionTextArea />
      <Button className='next-button' onClick={ () => dispatch( uploadNewPost(post) ) } > Finalizar</Button>
    </div>
  )
}
