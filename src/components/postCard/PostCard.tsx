import { changeIdForCommentsFetching, fetchComments } from 'app/store';
import avatar from 'assets/avatar-placeholder.png';
import { CommentsList } from 'components/commentsList';
import { FC, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { pathRoutes } from 'shared/routes.ts';
import { Post } from 'shared/types.ts';

interface PostCardProps {
  post: Post;
}

export const PostCard: FC<PostCardProps> = ({ post }) => {
  const [isCommentsShown, setIsCommentsShown] = useState(false);
  const dispatch = useAppDispatch();
  const fetchId = useAppSelector(state => state.commentsReducer.postIdForFetch);
  const handleToggleComments = () => {
    if (!isCommentsShown) {
      setIsCommentsShown(true);
      if (post.id !== fetchId) {
        console.log(post.id);
        dispatch(changeIdForCommentsFetching(post.id));
        dispatch(fetchComments());
      }
      return;
    }
    setIsCommentsShown(false);
  };

  return (
    <Card className={'flex-row p-3 gap-3'}>
      <Link to={pathRoutes.userById(post.userId)} className={'flex-grow-0 flex-shrink-0'}>
        <Card.Img src={avatar} />
      </Link>
      <Card.Body>
        <Card.Title>
          {post.title}
        </Card.Title>
        <Card.Text>
          {post.body}
        </Card.Text>
        <Button onClick={handleToggleComments}>Show comments</Button>
        {isCommentsShown && <div className={'mt-3'}>
          <CommentsList postId={post.id} />
        </div>}
      </Card.Body>
    </Card>
  );
};
