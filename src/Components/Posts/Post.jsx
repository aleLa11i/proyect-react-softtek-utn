import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Row, Container, Image, Figure } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { PostImg } from "./PostImg";

export const Post = () => {
    const [show, setShow] = useState({
        img: null,
        ok: false
    })
    const navigate = useNavigate();
    const { id } = useParams();
    const { posts } = useSelector( state => state.posts );
    const data = posts.find( p => p._id === id );

    return (
        <>
        <Button 
            className='back-btn m-3'
            onClick={() => navigate(-1)}
        > 
            <FontAwesomeIcon icon={ faArrowLeftLong } />
        </Button>
        <div
            className="my-5 d-flex align-items-center justify-content-center"
            style={{'overflow':'hidden'}}
        >
            <Figure>
                <Image
                    className="object-fit-contain"
                    width={100}
                    height={100}
                    alt="130x130"
                    src={data.mainimage}
                />
            </Figure>
            <h1
                className="mx-5"
            >
                {data.title}
            </h1>
        </div>

        <h5
            className="m-5 d-flex justify-content-center"
        >
            {data.description}
        </h5>
        <hr />


        <Container
            className="my-5"
        >
            <Row>
                {
                    data?.images.map( img =>(
                        <PostImg key={img} img={img} setShow={ setShow } />
                    ))
                }
            </Row>
        </Container>
        {
                show.ok
                    &&
                show.img
                    &&
                <Figure
                    className="show-img"
                    onClick={ ()=> setShow({...show, ok:false }) }
                >
                    <Image
                        src={show.img}
                    />
                </Figure>
        }
  
        </>
    )
}