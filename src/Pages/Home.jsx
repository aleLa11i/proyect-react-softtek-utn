import { useSelector } from 'react-redux';
import { PostList } from '../Components/Posts/PostList';

export const Home = () => {
  const {posts} = useSelector( state => state.posts )

  return (
    <PostList posts={ posts } />
  )
}
