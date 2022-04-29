import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  return (
    <Nav 
        fill variant='tabs' 
        defaultActiveKey='/home' 
        style={{
            'background':'#C1E2FF',
            'padding':'10px 10px 0px 10px',
        }}
    >
        <Nav.Item >
            <Nav.Link
                style={{'color':'black'}} 
                as={Link} 
                to={'/profile'} 
                eventKey='link-1'
            >
                    Profile
            </Nav.Link>
        </Nav.Item>
        
        <Nav.Item >
            <Nav.Link
                style={{'color':'black'}} 
                as={Link} 
                to={'/home'} 
                eventKey='link-2'
            >
                    Home
            </Nav.Link>
        </Nav.Item>

        <Nav.Item >
            <Nav.Link
                style={{'color':'black'}} 
                as={Link} 
                to={'/newpost'} 
                eventKey='link-3'
            >
                    <FontAwesomeIcon icon={faFolderPlus} />
                    { ' NEW POST!' }
            </Nav.Link>
        </Nav.Item>
    </Nav>
  )
 }
