import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const routes = [
    {
        route: '/profile',
        eventKey: 'link-1',
        name: 'Profile'
    },
    {
        route: '/home',
        eventKey: 'link-2',
        name: 'Home'
    },
    {
        route: '/newpost',
        eventKey: 'link-3',
        name: 'NEW POST',
        icon: faFolderPlus
    }
]

export const NavBar = () => {
  return (
    <Nav 
        className='nav'
        fill variant='tabs' 
        defaultActiveKey='link-1'  // guardar en local estorash
    >
        {
            routes.map(({route, eventKey, icon, name}) => (
                <Nav.Item 
                    key={ eventKey }
                >
                    <Nav.Link
                        className='nav-link'
                        as={Link} 
                        to={route} 
                        eventKey={eventKey}
                    >
                        { icon && <FontAwesomeIcon icon={icon} /> }
                        { name }
                    </Nav.Link>
                </Nav.Item>
            ))
        }
    </Nav>
  )
 }
