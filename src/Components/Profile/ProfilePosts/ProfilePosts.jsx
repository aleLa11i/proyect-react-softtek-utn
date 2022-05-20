import { useSelector } from 'react-redux';
import { PostList } from '../../Posts/PostList';

export const ProfilePosts = () => {
  const { posts } = useSelector( state => state.posts )
  const { uid } = useSelector( state => state.auth )  

  const profileposts = posts?.filter( post => post.user.uid === uid )

  console.log(profileposts);

  return (
    <>
      {
        profileposts.length==0
            ?
        (<h1
          className='mt-5 d-flex justify-content-center'
        >
          Todavía no se han subido fotos
        </h1>)
            :
        <PostList posts={ profileposts } profile/>
        
      }
    </>
  )
}