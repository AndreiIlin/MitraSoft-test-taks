import { PostCard } from 'components/postCard';
import { FC } from 'react';
import { Spinner } from 'react-bootstrap';
import { Post } from 'shared/types.ts';

interface PostsListProps {
  posts: Post[];
  postsStatus: string;
}

export const PostsList: FC<PostsListProps> = ({ postsStatus, posts }) => {

  return (
    <div className={'d-flex flex-column gap-3 mt-3'}>
      {postsStatus === 'loading' &&
        <Spinner variant={'info'} role={'status'} style={{ width: '4rem', height: '4rem' }} />}
      {postsStatus === 'success' && posts.length && posts.map(post => (
        <PostCard post={post} key={post.id} />
      ))}
      {postsStatus === 'error' && <h2 className={'fs-2 text-center'}>Oops, something goes wrong!</h2>}
    </div>
  );
};
