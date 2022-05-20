import { faFolderPlus, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

const routes = [
    {
        route: '/profile',
        eventKey: 'link-1',
        name: 'Profile',
        icon: faUser
    },
    {
        route: '/home',
        eventKey: 'link-2',
        name: 'Home',
        icon: faHouse
    },
    {
        route: '/newpost',
        eventKey: 'link-3',
        name: 'NEW POST',
        icon: faFolderPlus
    }
]

export const NavBar = () => {
 const dispatch = useDispatch();
  return (
    <Nav 
        // inverse
        fill variant='tabs' 
        defaultActiveKey='link-2'  // guardar en local storage
    >
        {
            routes.map(({route, eventKey, icon, name}) => (
                <Nav.Item 
                    key={ eventKey }
                >
                    <Nav.Link
                        className='link'
                        as={Link} 
                        to={route} 
                        eventKey={eventKey}
                    >
                        <FontAwesomeIcon icon={icon} />
                        &nbsp;
                        &nbsp;
                        <h6
                            className='d-inline nav-text'
                        >
                            {name}
                        </h6>
                    </Nav.Link>
                </Nav.Item>
            ))
        }
        <Button 
            variant='danger'
            className='mb-2 mt-1 mx-2'
            onClick={ () => dispatch( startLogout() ) }
        >
            Logout
        </Button>
    </Nav>
  )
 }
