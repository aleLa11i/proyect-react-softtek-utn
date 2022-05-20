import { PostItem } from "./PostItem";

export const PostList = ({posts, profile}) => {
  const orderPost = posts?.sort( (prev, next) => Date.parse(prev.date) > Date.parse(next.date) ? -1 : 1 );

  return (
    <div
      className={`d-flex align-items-center justify-content-center flex-wrap ${ profile || 'flex-column' } `}
    >
      {orderPost?.map( post  => 
      <PostItem
        key={ post.postId } 
        data={ post } 
      />
      )}
    </div>
  );
};
